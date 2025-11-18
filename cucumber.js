module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    paths: ["features/**/*.feature"],
    require: [
      "steps/**/*.ts",
      "support/hooks.ts",
      "support/world.ts"
    ],
    publishQuiet: true,
    tags: process.env.CUCUMBER_TAGS || "",
    tag: process.env.CUCUMBER_TAGS?.replace('@', '') || 'all',
    format: [
     "progress",
      "json:reports/cucumber-report-${tag}.json"
    ],
    timeout: 120000
  }
};
