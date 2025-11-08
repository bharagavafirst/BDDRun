module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    paths: ["features/**/*.feature"],
    require: [
      "steps/**/*.ts",
      "support/hooks.ts",
      "support/world.ts"
    ],
    tags: "@smoke or @regression",
    publishQuiet: true,
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],
    timeout: 120000
  }
};
