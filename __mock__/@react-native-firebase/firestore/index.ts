jest.mock('@react-native-firebase/firestore', () => () => {
  return {
    settings: jest.fn(),
  };
});
