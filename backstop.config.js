const stories = require("./storybook-static/stories.json");

const baseUrl = `file:///${__dirname}/storybook-static/`;
const storiesId = Object.values(stories.stories).map(item => item.id);

const report = ["CI"];

if (process.env.CI !== true && process.env.CI !== "true") {
  report.push("browser");
}

const scenarios = storiesId.map((id) => ({
  label: id,
  url: `${baseUrl}/iframe.html?id=${id}&viewMode=story`,
  delay: 3000,
  requireSameDimensions: false,
}));

const viewports = [
  {
    label: "phone",
    width: 320,
    height: 480
  },
  {
    label: "tablet",
    width: 1024,
    height: 768
  },
  {
    label: "desktop",
    width: 1280,
    height: 1024
  }
];

/*
const onBeforeScript = "puppet/onBefore.js";
const onReadyScript = "puppet/onReady.js";
*/

const config = {
  id: "backstop_default",
  viewports,
  scenarios,
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    engine_scripts: "backstop_data/engine_scripts",
    bitmaps_test: "backstop_output/bitmaps_test",
    html_report: "backstop_output/html_report",
    ci_report: "backstop_output/ci_report"
  },
  report,
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};

module.exports = config;
