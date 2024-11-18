# Getting Started

## Step 1: Configure Okta Settings

Copy `example.auth.config.js` to `auth.config.js`

```
$ cp example.auth.config.js auth.config.js
```

Fill in the values for `clientId`, `redirectUri`, `endSessionRedirectUri` and `discoveryUri` in `auth.config.js`

```
export default {
  oidc: {
    clientId: 'YOUR CLIENT iD',
    redirectUri: 'com.toyota.sample-app:/callback',
    endSessionRedirectUri: 'com.toyota.sample-app:/logout',
    discoveryUri: 'https://<YOUR OKTA TENANT>.okta.com/oauth2/default',
    scopes: ['openid', 'profile', 'offline_access'],
    requireHardwareBackedKeyStore: false,
  },
};
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
