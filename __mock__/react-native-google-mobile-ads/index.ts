jest.mock('react-native-google-mobile-ads', () => {
  const mock = jest.fn().mockImplementation(() => ({
    initialize: jest.fn(() => Promise.resolve({data: {}})),
  }));
  return Object.assign(mock, {
    RewardedAd: {
      createForAdRequest: jest.fn(),
    },
  });
});
