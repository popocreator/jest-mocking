jest.mock('@react-native-firebase/remote-config', () => () => {
  return {
    setDefaults: jest.fn(() => Promise.resolve({data: {}})),
  };
});
