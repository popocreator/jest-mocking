jest.mock('react-native-onesignal', () => {
  return {
    setAppId: jest.fn(),
    setNotificationWillShowInForegroundHandler: jest.fn(),
    setNotificationOpenedHandler: jest.fn(),
  };
});
