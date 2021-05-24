module.exports = {
  "looks-same": {
    "ignoreCaret": true,
  },
  configurations: {
    desktop: {
      target: "chrome.app",
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
    tablet: {
      target: "chrome.app",
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
    iphone7: {
      target: "chrome.app",
      preset: "iPhone 7",
    },
  }
};
