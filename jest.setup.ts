import './__mock__/@react-native-firebase/crashlytics';
import './__mock__/react-native-localize';
import './__mock__/@react-native-async-storage/async-storage';
import './__mock__/react-native-device-info';
import './__mock__/@sentry/react-native';
import './__mock__/@react-native-firebase/app';
import './__mock__/@react-native-firebase/auth';
import './__mock__/@react-native-firebase/analytics';
import './__mock__/@react-native-firebase/firestore';
import './__mock__/@react-native-firebase/remote-config';
import './__mock__/@notifee/react-native';
import './__mock__/@react-native-community/push-notification-ios';
import './__mock__/react-native-system-setting';
import './__mock__/react-native-sound';
import './__mock__/react-native-permissions';
import './__mock__/amplitude-js';
import './__mock__/react-native-appsflyer';

// jest.mock('@sentry/react-native', () => ({
//   init: jest.fn(),
//   withProfiler: jest.fn(),
//   ReactNavigationInstrumentation: jest.fn(),
//   ReactNativeTracing: jest.fn(),
// }));

// import * as ReactNative from 'react-native';
// import * as jest from 'jest';
// // include this line for mocking react-native-gesture-handler
// import 'react-native-gesture-handler/jestSetup';
// import mock from 'react-native-permissions/mock';
// import 'jest/build/index';

// jest.mock('react-native-permissions', () => {
//   return mock;
// });

// jest.mock('@notifee/react-native', () =>
//   require('@notifee/react-native/jest-mock'),
// );

// // react-native-device-info
// jest.mock('react-native-device-info', () =>
//   require('react-native-device-info/jest/react-native-device-info-mock'),
// );

// // react-native-localize
// jest.mock('react-native-localize', () => {
//   return {
//     // getLocales: jest.fn(),
//     // you can add other functions mock here that you are using
//   };
// });

// // NativeEventEmitter
// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// //Haptic
// jest.mock('react-native-haptic-feedback', () => {});

// // AsyncStorage
// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
// );

// // react-navigation
// // include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   console.log('Reanimated', Reanimated);

//   // The mock for `call` immediately calls the callback which is incorrect
//   // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// // react-navigation
// // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
