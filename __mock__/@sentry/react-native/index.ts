jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  withProfiler: jest.fn(),
  ReactNavigationInstrumentation: jest.fn(),
  ReactNativeTracing: jest.fn(),
}));
