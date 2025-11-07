module.exports = {
  default: {
    timeout: 120000, 
    paths: ["features/**/*.feature"],
    require: [
      "support/world.ts",
      "support/hooks.ts",
      "steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    publishQuiet: true,
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ]
  }
};
