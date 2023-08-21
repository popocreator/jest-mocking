jest.mock('@hackler/react-native-sdk', () => {
  return {
    createInstance: jest.fn(() => ({
      variation: jest.fn(),
      variationDetail: jest.fn(),
      track: jest.fn(),
      setUserProperties: jest.fn(),
      setUserId: jest.fn(),
    })),
  };
});
