/* eslint-disable new-cap, security/detect-non-literal-regexp */
const { Selector } = require('testcafe');

module.exports.reportsSelectors = {
    getReportsButton: testController => Selector('[href="/dashboard/reports"]').with({ boundTestRun: testController }),
    getReportsCreateTaskButton:testController => Selector('[class="crud-button crud-button--positive crud-button--modal-trigger"]').with({ boundTestRun: testController }),
    getReportsTaskTitle:testController => Selector('[type="text"]').with({boundTestRun:testController}),
    getReportsTaskDescription:testController => Selector('textarea').with({boundTestRun:testController}),
    getReportsSubmitTaskButton:testController =>Selector('[type="submit"]').with({boundTestRun:testController}),
    getReportsVerifyTask:testController => Selector('div#content').with({boundTestRun:testController})
    };