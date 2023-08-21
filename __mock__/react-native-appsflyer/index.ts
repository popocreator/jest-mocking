jest.mock('react-native-appsflyer', () => {
  const mock = jest.fn().mockImplementation(() => ({
    // initialize: jest.fn(() => Promise.resolve({data: {}})),
  }));
  return Object.assign(mock, {
    onInstallConversionData: jest.fn(),
    onAppOpenAttribution: jest.fn(),
    initSdk: jest.fn(),
  });
});
