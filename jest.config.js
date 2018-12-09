module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
};
