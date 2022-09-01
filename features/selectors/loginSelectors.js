/* eslint-disable new-cap, security/detect-non-literal-regexp */
const { Selector } = require('testcafe');

module.exports.loginSelectors = {
    getLoginUsername: testController => Selector('[id="username"]').with({ boundTestRun: testController }),
    getLoginPassword: testController => Selector('[id="password"]').with({ boundTestRun: testController }),
    getLoginButton: testController => Selector('[type="submit"]').with({ boundTestRun: testController }),
    getLoginMessage: testController => Selector('div#content').with({ boundTestRun: testController }),
    };
    