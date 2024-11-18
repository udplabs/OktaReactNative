export default {
  oidc: {
    clientId: 'YOUR CLIENT ID',
    redirectUri: 'YOUR DOMAIN REVERSED:/callback',
    endSessionRedirectUri: 'YOUR DOMAIN REVERSED:/logout',
    discoveryUri: 'https://<TENANT>.okta.com/oauth2/default',
    scopes: ['openid', 'profile', 'offline_access'],
    requireHardwareBackedKeyStore: false,
  },
};
