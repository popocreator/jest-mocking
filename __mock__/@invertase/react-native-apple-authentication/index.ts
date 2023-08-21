jest.mock('@invertase/react-native-apple-authentication', () => {
  return {
    appleAuthAndroid: jest.fn(),
    appleAuth: jest.fn(),
  };
});
