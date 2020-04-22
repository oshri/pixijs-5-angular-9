module.exports = {
    preset: 'jest-preset-angular',
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$',
            astTransformers: [
                'jest-preset-angular/build/InlineFilesTransformer',
                'jest-preset-angular/build/StripStylesTransformer'
            ]
        }
    },
    testEnvironment: 'jest-environment-jsdom-thirteen',
    testMatch: ['**/*.spec.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest'
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    moduleFileExtensions: ['ts', 'tsx', 'json', 'js'],
    testResultsProcessor: 'jest-sonar-reporter',
    moduleNameMapper: {},
    snapshotSerializers: [
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '^.+\\.mock\\.ts$']
};
