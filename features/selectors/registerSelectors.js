/* eslint-disable new-cap, security/detect-non-literal-regexp */
const { Selector } = require('testcafe');

module.exports.registerSelectors = {
    getRegisterName: testController => Selector('[id="userName"]').with({ boundTestRun: testController }),
    getRegisterSurname: testController => Selector('[id="userSurname"]').with({ boundTestRun: testController }),
    getRegisterUsername: testController => Selector('[id="userUsername"]').with({ boundTestRun: testController }),
    getRegisterPassword: testController => Selector('[id="userPassword"]').with({ boundTestRun: testController }),
    getRegisterPasswordid: testController => Selector('[id="userPasswordid"]').with({ boundTestRun: testController }),
    getRegisterButton: testController => Selector('[type="submit"]').with({ boundTestRun: testController }),
    getRegisterMessage: testController => Selector('div#content').with({ boundTestRun: testController }),
    };
    