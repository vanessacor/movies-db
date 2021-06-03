module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
};
