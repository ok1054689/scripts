const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36';


// 使用fetch获取初始IP并打印
async function getIP() {
    try {
        const response = await fetch('http://4.ipw.cn');
        const ip = await response.text();
        console.log(`当前IP地址: ${ip.trim()}`);
        return ip
    } catch (error) {
        console.error(`获取IP时出错: ${error.message}`);
    }
}

// 获取CSRF令牌 
async function getCsrfToken() {
    const url = 'http://192.168.1.1/admin/login_others.asp';
    try {
        // 创建一个可保持会话的fetch实例
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': userAgent,
            },
            // credentials: 'include', // 保持会话的cookies
        });

        if (!response.ok) {
            throw new Error(`HTTP错误: ${response.status}`);
        }
        const html = await response.text();
        // 从HTML中提取csrf token
        const csrfTokenMatch = html.match(/name='csrftoken'[^>]*value='([^']*)/);
        if (csrfTokenMatch && csrfTokenMatch[1]) {
            console.log(`成功获取CSRF令牌: ${csrfTokenMatch[1]}`);
            return csrfTokenMatch[1];
        } else {
            throw new Error('无法找到CSRF令牌');
        }
    } catch (error) {
        console.error(`获取CSRF令牌时出错: ${error.message}`);
        return null;
    }
}

//get pppoeCsrftoken
async function getPppoeCsrfToken() {
    const url = 'http://192.168.1.1/top_cmcc.asp?index=1';
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'User-Agent': userAgent,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP错误: ${response.status}`);
        }
        const html = await response.text();
        // 从HTML中提取csrf token
        const csrfTokenMatch = html.match(/name='csrftoken'[^>]*value='([^']*)/);
        if (csrfTokenMatch && csrfTokenMatch[1]) {
            console.log(`成功获取PPPOE CSRF令牌: ${csrfTokenMatch[1]}`);
            return csrfTokenMatch[1];
        } else {
            throw new Error('无法找到PPPOE CSRF令牌');
        }
    } catch (error) {
        console.error(`获取PPPOE CSRF令牌时出错: ${error.message}`);
        return null;
    }
}



// 使用会话信息进行登录
async function login(loginCsrftoken) {
    if (!loginCsrftoken) {
        console.error('loginCsrftoken为空，无法进行登录');
        return false;
    }

    const url = 'http://192.168.1.1/boaform/admin/formLogin';
    const loginData = new URLSearchParams({
        'psd': 'M2RtNWY2OWc=',
        'username': 'user',
        'submit.htm?login_others.asp': 'Send',
        'postSecurityFlag': '51241',
        'csrftoken': loginCsrftoken
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'User-Agent': userAgent
            },
            body: loginData,
            // credentials: 'include',
        });

        const responseText = await response.text();
        console.log('登录响应状态码:', response.status);
        // console.log('登录响应头:', response.headers);

        if (response.ok) {
            console.log('登录成功');
            return true
        } else {
            console.log('登录失败:', responseText);
            return false;
        }
    } catch (error) {
        console.error(`登录请求出错: ${error.message}`);
        return false;
    }
}

// 进行PPPOE
async function pppoe(csrftoken) {
    if (!csrftoken) {
        throw new Error("csrftoken为空，无法进行登录");
    }

    try {
        const response = await fetch("http://192.168.1.1/boaform/admin/formEthernet_cmcc_userspec", {
            "headers": {
            },
            "body": "submit-url=%2Fnet_eth_links_user_cmcc_spec.asp&encodePppUserName=MDgxNzAwNDIxOTk3&encodePppPassword=KioqKioq&postSecurityFlag=31291&csrftoken=" + csrftoken,
            "method": "POST"
        });

        const responseText = await response.text();
        // console.log('pppoe响应状态码:', response.status);
        // console.log('响应body:', responseText);

        const csrfTokenMatch = responseText.match(/name='csrftoken'[^>]*value='([^']*)/);
        if (csrfTokenMatch && csrfTokenMatch[1]) {

            return csrfTokenMatch[1];
        } else {
            throw new Error('无法找到CSRF令牌');
        }


    } catch (error) {
        throw new Error(`请求出错: ${error.message}`);

    }
}

async function logout(csrftoken) {
    await fetch("http://192.168.1.1/boaform/admin/formLogout", {
        "headers": {
        },
        "body": "csrftoken=" + csrftoken,
        "method": "POST"
    });
}

// 主函数
async function main() {
    const oldIP = await getIP();
    let csrfToken
    const loginResult = await login(await getCsrfToken());
    if (loginResult) {
        console.log('登录成功，可以进行后续操作');
        csrfToken = await pppoe(await getPppoeCsrfToken());
        //退出 logout
        await logout(csrfToken)
        
        // 等待IP更新
        console.log('等待IP更新中...');
        let newIP = oldIP;
        let attempts = 0;
        const maxAttempts = 10;
        
        // 每5秒检查一次IP是否变更，最多尝试10次
        while (newIP === oldIP && attempts < maxAttempts) {
            attempts++;
            await new Promise(resolve => setTimeout(resolve, 5000)); // 等待5秒
            newIP = await getIP();
            console.log(`尝试 ${attempts}/${maxAttempts}: 新IP: ${newIP}`);
            
            // IP已变化，立即跳出循环
            if (newIP !== oldIP) {
                console.log(`IP已更新: ${oldIP} → ${newIP}`);
                break;
            }
        }
        
        if (newIP === oldIP) {
            console.log(`IP未变更，仍为: ${oldIP}`);
        }
    } else {
        console.log('登录失败，请检查凭据或网络连接');
    }
}

// 执行主函数
main();
