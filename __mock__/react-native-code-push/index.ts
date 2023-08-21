jest.mock('react-native-code-push', () => {
  const mock = jest.fn().mockImplementation(() => jest.fn());
  return Object.assign(mock, {
    CheckFrequency: {
      ON_APP_START: 0,
    },
    InstallMode: {
      IMMEDIATE: 0,
    },
  });
});
