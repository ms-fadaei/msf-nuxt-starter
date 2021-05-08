module.exports = {
  moduleNameMapper: {
    '^~.*(svg\\?inline)$': '<rootDir>/test/unit/__stubs__/SvgStub.vue',
    '^@@/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  coverageDirectory: '<rootDir>/report/coverage/unit',
  coverageReporters: ['html', 'text']
  // collectCoverageFrom: [
  //   '<rootDir>/src/components/**/*.vue',
  //   '<rootDir>/src/pages/**/*.vue'
  // ]
}
