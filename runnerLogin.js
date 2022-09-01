async function runner(){
  const createTestCafe = require('gherkin-testcafe');
  const testcafe = await createTestCafe('localhost', 1337);

try {
    const runner = testcafe.createRunner('localhost', 1337);
 
    const loginTest = await runner
        .src(["features/step-definitions/login.js","features/scenarios/login/login.feature"])
        .browsers(["chrome"])
        .run();

    console.log('Tests failed: ' + loginTest);
}
finally {
    await testcafe.close();
}
}
runner();
