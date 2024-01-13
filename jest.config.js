module.exports = {
  verbose: true,
  globalSetup: './jest.env.setup.js',
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: "jsdom"
};
