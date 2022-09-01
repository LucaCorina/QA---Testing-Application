/*global testController*/
import {When,Then, Given} from '@cucumber/cucumber';
const { loginSelectors } = require('../selectors/loginSelectors');

const data = { userName: "adrrfar", pasword: "1234" };

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
})