const Auth = {
  // 各種環境変数で定義
  region: process.env.VUE_APP_AUTH_REGION,
  userPoolId: process.env.VUE_APP_AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.VUE_APP_AUTH_USER_POOL_WEB_CLIENT_ID,
  authenticationFlowType: 'USER_PASSWORD_AUTH',
  // Amplify モジュールのデフォルトでは localStorage
  // storage: localStrage,
}

export default Auth;