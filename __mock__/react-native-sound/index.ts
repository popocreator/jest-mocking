jest.mock('react-native-sound', () => {
  const mock = jest.fn().mockImplementation(() => ({
    setCategory: jest.fn(),
  }));
  return Object.assign(mock, {setCategory: jest.fn()});
});
