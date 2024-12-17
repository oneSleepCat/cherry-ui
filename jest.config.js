const obj =  {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
      '^.+\.(css|less)$': 'identity-obj-proxy',
  },
}

export default obj
