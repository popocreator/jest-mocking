jest.mock('@react-native-firebase/messaging', () => {
  const mock = jest.fn().mockImplementation(() => ({
    getToken: jest.fn(() => Promise.resolve({data: {}})),
  }));
  return Object.assign(mock, {});
});
