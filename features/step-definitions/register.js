/* global testController */
import {Then, When, Given} from '@cucumber/cucumber'; 
const { registerSelectors } = require('../selectors/registerSelectors');
const data={Name: "Alex", Surname:"Horea",Username:"Yoyo"+Math.random(),Password:"123",Passwordid:"123"}

Given('I open the register page', async(testController)=>{
  await testController.navigateTo('http://localhost:3000/register')
})

When('I enter a name',async function(testController){
  const registerName=await registerSelectors.getRegisterName(testController);
  await testController
  .typeText(registerName,data.Name);
});

When('I enter a surname',async function(testController){
  const registerSurname=await registerSelectors.getRegisterSurname(testController);
  await testController
  .typeText(registerSurname,data.Surname);

});

When('I enter a username',async function(testController){
  const registerUsername=await registerSelectors.getRegisterUsername(testController);
  await testController
  .typeText(registerUsername,data.Username);
});

When('I enter a password',async function(testController){
  const registerPassword=await registerSelectors.getRegisterPassword(testController);
  await testController
  .typeText(registerPassword,data.Password);

});

When('I enter a confirmation',async function(testController){
  const registerPasswordid=await registerSelectors.getRegisterPasswordid(testController);
  await testController
  .typeText(registerPasswordid,data.Passwordid);

});


When('I click on the register button', async function(testController){
  const loginButton=await registerSelectors.getRegisterButton(testController);

  await testController
  .click(loginButton);
});

Then('a succesful message is displayed', async function(testController){
  const responseCard=await registerSelectors.getRegisterMessage(testController);

  await testController.expect(responseCard.innerText).contains('User '+ data.Name +' successfully registered!');
})
