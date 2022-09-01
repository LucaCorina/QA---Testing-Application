async function runner(){
  const createTestCafe = require('gherkin-testcafe');
  const testcafe = await createTestCafe('localhost', 1337);

try {
    const runner = testcafe.createRunner('localhost', 1337);
 
    const reportsTest = await runner
        .src(["features/step-definitions/reports.js","features/scenarios/reports/reports.feature"])
        .browsers(["chrome"])
        .run();

    console.log('Tests failed: ' + reportsTest);
}
finally {
    await testcafe.close();
}
}
runner();
