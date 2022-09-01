async function runner(){
  const createTestCafe = require('gherkin-testcafe');
  const testcafe = await createTestCafe('localhost', 1337);

try {
    const runner = testcafe.createRunner('localhost', 1337);

    const registerTests = await runner
        .src(["features/step-definitions/register.js","features/scenarios/register/register.feature"])
        .browsers(["chrome"])
        .run();

    console.log('Tests failed: ' + registerTests);
}
finally {
    await testcafe.close();
}
}
runner();
