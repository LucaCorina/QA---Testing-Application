/*global testController*/
import {When,Then, Given} from '@cucumber/cucumber';
const { loginSelectors } = require('../selectors/loginSelectors');
const { reportsSelectors }=require('../selectors/reportsSelectors');

const data = { userName: "adrrfar", pasword: "1234" };
const dataForTask={title:"New Task", description:"Be Happy!"};

Given('I open the login page', async(testController)=>{
    await testController
    .navigateTo('http://localhost:3000/login');
});

When('I enter the username', async function(testController){
    const loginUsername=await loginSelectors.getLoginUsername(testController);

    await testController
    .typeText(loginUsername, data.userName);
});

When('I enter the password', async function(testController){
    const loginPassword=await loginSelectors.getLoginPassword(testController);

    await testController
    .typeText(loginPassword, data.pasword);

});

When('I click on the login button', async function(testController){
    const loginButton=await loginSelectors.getLoginButton(testController);

    await testController
    .click(loginButton);
});

Then('A succesful message is displayed', async function(testController){
    const responseCard=await loginSelectors.getLoginMessage(testController);

    await testController.expect(responseCard.innerText).contains('User successfully login!');
});

Given('I click on Reports button', async function(testController){
    const reportsButton=await reportsSelectors.getReportsButton(testController);

    await testController
    .click(reportsButton);
});

When('I click on Create Task button', async function(testController){
    const reportsCreateTaskButton=await reportsSelectors.getReportsCreateTaskButton(testController);

    await testController
    .click(reportsCreateTaskButton);
}); 

When('I write a title', async function(testController){
    const reportsTaskTitle=await reportsSelectors.getReportsTaskTitle(testController);

    await testController
    .typeText(reportsTaskTitle, dataForTask.title);
}); 

When('I write a description', async function(testController){
    const reportsTaskDescription=await reportsSelectors.getReportsTaskDescription(testController);

    await testController
    .typeText(reportsTaskDescription, dataForTask.description);
}); 

When('I click on create button', async function(testController){
    const reportsSubmitTaskButton=await reportsSelectors.getReportsSubmitTaskButton(testController);

    await testController
    .click(reportsSubmitTaskButton);
});

Then('the task is created', async function(testController){
    const ReportsVerifyTask=await reportsSelectors.getReportsVerifyTask(testController);

    await testController.expect(ReportsVerifyTask.innerText).contains(dataForTask.description);
});