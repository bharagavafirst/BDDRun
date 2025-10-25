module.exports = {
  default: {
    require: ["ts-node/register", "steps/**/*.ts"],
    format: [
      "progress",
      "json:reports/cucumber_report.json"
    ],
    publishQuiet: true,
    paths: ["features/**/*.feature"]
  }
};
