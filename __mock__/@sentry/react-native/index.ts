jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  withProfiler: jest.fn(component => component),
  ReactNavigationInstrumentation: jest.fn(),
  ReactNativeTracing: jest.fn(),
}));
