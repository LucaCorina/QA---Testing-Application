/* eslint-disable new-cap, security/detect-non-literal-regexp */
const { Selector } = require('testcafe');

module.exports.settingsSelectors = {
  getSettingsButton: testController => Selector('[href="/dashboard/settings"]').with({ boundTestRun: testController }),
  };