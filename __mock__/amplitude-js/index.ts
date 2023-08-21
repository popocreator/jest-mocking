jest.mock('amplitude-js', () => {
  const mock = jest.fn().mockImplementation(() => ({}));
  return Object.assign(mock, {
    getInstance: jest.fn(() => {
      return {
        init: jest.fn(),
      };
    }),
  });
});
