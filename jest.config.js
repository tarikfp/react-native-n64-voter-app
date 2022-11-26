// jest.config.js
const { defaults: tsjPreset } = require("ts-jest/presets");
module.exports = {
  ...tsjPreset,
  verbose: true,
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|@react-native-community/datetimepicker|react-native-device-info|@react-native-community/masked-view|@react-navigation/.*|@unimodules/.*)",
  ],
  moduleNameMapper: {
    "^@api(.*)$": "<rootDir>/src/api$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@lib(.*)$": "<rootDir>/src/lib$1",
    "^@localization(.*)$": "<rootDir>/src/localization$1",
    "^@navigation(.*)$": "<rootDir>/src/navigation$1",
    "^@rtk(.*)$": "<rootDir>/src/rtk$1",
    "^@screens(.*)$": "<rootDir>/src/screens$1",
    "^@theme(.*)$": "<rootDir>/src/theme$1",
    "^@utils$": "<rootDir>/src/utils/index",
  },
  setupFiles: [
    "./jest.setup.js",
    "<rootDir>/node_modules/react-native/jest/setup.js",
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(test).ts?(x)",
    "**/?(*.)+(test).js?(x)",
  ],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
