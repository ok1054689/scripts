let url = $request.url
// console.log(url,Object.keys(this));
console.log(
  `djay-subscriptions =================================================`
)
console.log('$response : ', $response)
let time = new Date()
// 参考https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/Script.conf
let responseBody = {
  request_date_ms: time.getTime(), //1726151502447
  request_date: time.toISOString(), //"2024-09-12T14:31:42Z"
  subscriber: {
    non_subscriptions: {},
    first_seen: '2024-01-09T18:47:44Z',
    original_application_version: '38208',
    other_purchases: {},
    management_url: null,
    subscriptions: {
      rc_promo_pro_three_month: {
        original_purchase_date: '2024-01-15T08:24:16Z',
        expires_date: '2094-04-16T08:24:16Z',
        is_sandbox: false,
        refunded_at: null,
        store_transaction_id: '3eae2667447c6182cf63f93226945c1d',
        unsubscribe_detected_at: null,
        grace_period_expires_date: null,
        period_type: 'normal',
        purchase_date: '2024-01-15T08:24:16Z',
        billing_issues_detected_at: null,
        store: 'promotional',
        auto_resume_date: null
      }
    },
    entitlements: {
      pro: {
        grace_period_expires_date: null,
        purchase_date: '2024-01-15T08:24:16Z',
        product_identifier: 'rc_promo_pro_three_month',
        expires_date: '2094-04-16T08:24:16Z'
      }
    },
    original_purchase_date: '2020-06-23T08:21:30Z',
    original_app_user_id: '$RCAnonymousID:347d452d86d24ebf8c7e60c594ddddac',
    last_seen: time.toISOString()
  }
}
console.log('$responseBody : ', responseBody)

$done({ status: 200, body: responseBody })
