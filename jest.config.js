module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/$1",
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        // Use @swc/jest for JavaScript and TypeScript files
        // "^.+\\.(js|jsx|ts|tsx)$": ["@swc/jest"],
    },
    testEnvironment: "jsdom",
};
