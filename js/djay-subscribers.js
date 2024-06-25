let url = $request.url;
console.log(url,Object.keys(this)); 
console.log(`djay-subscriptions`); 

// 参考https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/Script.conf 

 
// // let resStatus = $response.status ? $response.status : $response.statusCode;;

// let currentDate = new Date();
// let formattedDate = currentDate.toISOString(); // 将日期格式化为ISO 8601格式

 
// let nextMonthDate = new Date(); 
// // 将日期增加一个月
// nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

// let formattedNextMonthDate = nextMonthDate.toISOString(); 


// let responseBody = {
//   "request_date": formattedDate,
//   "request_date_ms": currentDate.getTime(),
//   "subscriber" : {
//     "non_subscriptions" : {

//     },
//     "first_seen" : "2024-01-09T18:47:44Z",
//     "original_application_version" : "38208",
//     "other_purchases" : {

//     },
//     "management_url" : null,
//     "subscriptions" : {
//       "$rc_annual" : {
//         "original_purchase_date" : "2024-01-15T08:24:16Z",
//         "expires_date" : formattedNextMonthDate,
//         "is_sandbox" : false,
//         "refunded_at" : null,
//         "store_transaction_id" : "3eae2667447c6182cf63f93226945c1d",
//         "unsubscribe_detected_at" : null,
//         "grace_period_expires_date" : null,
//         "period_type" : "normal",
//         "purchase_date" : "2024-01-15T08:24:16Z",
//         "billing_issues_detected_at" : null,
//         "store" : "promotional",
//         "auto_resume_date" : null
//       }
//     },
//     "entitlements" : {
//       "pro" : {
//         "grace_period_expires_date" : null,
//         "purchase_date" : "2024-01-15T08:24:16Z",
//         "product_identifier" : "$rc_annual",
//         "expires_date" : formattedNextMonthDate
//       }
//     },
//     "original_purchase_date" : "2020-06-23T08:21:30Z",
//     "original_app_user_id" : "$RCAnonymousID:347d452d86d24ebf8c7e60c594ddddac",
//     "last_seen" : "2024-06-25T03:35:59Z"
//   }
// };


// if (url.includes('/offerings')) {
//      responseBody = {
//     "current_offering_id": "default",
//     "offerings": [
//         {
//             "description": "Standard monthly/yearly products",
//             "identifier": "default",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "Legacy unlock for djay 2 iOS",
//             "identifier": "legacy_unlock.djay_2",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_lifetime",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.legacy_unlock.djay_2"
//                 }
//             ]
//         },
//         {
//             "description": "Legacy unlock for djay Pro iOS",
//             "identifier": "legacy_unlock.djay_pro",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_lifetime",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.legacy_unlock.djay_pro"
//                 }
//             ]
//         },
//         {
//             "description": "Legacy unlock for djay Pro 2 Mac",
//             "identifier": "legacy_unlock.djay_pro_mac",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_lifetime",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.legacy_unlock.djay_pro_mac"
//                 }
//             ]
//         },
//         {
//             "description": "\"pro_loyalty\" products.",
//             "identifier": "loyalty",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "\"pro_loyalty_2\" products",
//             "identifier": "loyalty_2",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_2.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "Discounted yearly no trial shown on mobile after first launch (using \"pro_loyalty_3\" products)",
//             "identifier": "loyalty_3",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_3.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_3.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "Obsolete (replaced by \"mac_yearly\" offering)",
//             "identifier": "mac",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_mac.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_mac.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "Android legacy \"fullapp\" product",
//             "identifier": "android.fullapp",
//             "metadata": null,
//             "packages": [

//             ]
//         },
//         {
//             "description": "\"pro_vision\" products",
//             "identifier": "vision",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_vision.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_vision.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "2 month free offer for AM subscribers (using \"pro_loyalty\" products), monthly only",
//             "identifier": "am_offer",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.monthly"
//                 }
//             ]
//         },
//         {
//             "description": "Legacy unlock for djay Pro Windows legacy app",
//             "identifier": "legacy_unlock.djay_pro_windows",
//             "metadata": null,
//             "packages": [

//             ]
//         },
//         {
//             "description": "\"pro_mac\" products (yearly only)",
//             "identifier": "mac_yearly",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_mac.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "2 month free offer for AM subscribers (using \"pro_loyalty\" products), monthly and yearly",
//             "identifier": "am_offer_2",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.yearly"
//                 }
//             ]
//         },
//         {
//             "description": "Offer for AM subscribers (\"pro_loyalty\" monthly / \"pro_loyalty_3\" yearly)",
//             "identifier": "am_yearly_direct",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_3.yearly"
//                 },
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.monthly"
//                 }
//             ]
//         },
//         {
//             "description": "Offer for AM subscribers (\"pro_loyalty\" monthly / \"pro_loyalty_2\" yearly 2)",
//             "identifier": "am_yearly_trial",
//             "metadata": null,
//             "packages": [
//                 {
//                     "identifier": "$rc_monthly",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty.monthly"
//                 },
//                 {
//                     "identifier": "$rc_annual",
//                     "platform_product_identifier": "com.algoriddim.djay_iphone_free.pro_loyalty_2.yearly_2"
//                 }
//             ]
//         }
//     ],
//     "placements": {
//         "fallback_offering_id": "default"
//     }
// }
//     // console.log(`替换platform:${url}`);
// }  




// let done  = { status: 200, body: responseBody }
// console.log(done);

// $done({ status: 200, body: responseBody });






let obj = JSON.parse($response.body);
obj.subscriber.entitlements = {
  "pro": {
    "expires_date": "2029-05-26T05:05:04Z",
    "product_identifier": "rc_promo_pro_three_month",
    "purchase_date": "2020-05-19T05:05:04Z"
  }
}
obj.subscriber.subscriptions = {
  "rc_promo_pro_three_month": {
    "billing_issues_detected_at": null,
    "expires_date": "2029-05-26T05:05:04Z",
    "is_sandbox": false,
    "original_purchase_date": "2020-05-19T05:05:05Z",
    "period_type": "normal",
    "purchase_date": "2020-05-19T05:05:04Z",
    "store": "app_store",
    "unsubscribe_detected_at": null
  }
}
$done({ body: JSON.stringify(obj) });