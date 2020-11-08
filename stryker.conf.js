/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "off",
  mutate: ['source/**/*.js', '!source/**/*@(.test|.spec|Spec).js'],
};
