Feature: Settings
As a user I want to enter settings

Scenario:Settings
Given I open the login page
When I enter the username
And I enter the password
And I click on the login button
Then A succesful message is displayed
Given i click on settings button
Then the settings tab opens