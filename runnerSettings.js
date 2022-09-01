async function runner(){
  const createTestCafe = require('gherkin-testcafe');
  const testcafe = await createTestCafe('localhost', 1337);

try {
    const runner = testcafe.createRunner('localhost', 1337);
 
    const settingsTest = await runner
        .src(["features/step-definitions/settings.js","features/scenarios/settings/settings.feature"])
        .browsers(["chrome"])
        .run();

    console.log('Tests failed: ' + settingsTest);
}
finally {
    await testcafe.close();
}
}
runner();
