Feature: Login 
    As a user I can login the website
Scenario:  Login
Given I open the login page
When I enter the username
And I enter the password
And I click on the login button
Then A succesful message is displayed