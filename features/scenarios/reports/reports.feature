Feature: Reports feature
    The user wants to create a new task
Scenario: Create a task
Given I open the login page
When I enter the username
And I enter the password
And I click on the login button
Then A succesful message is displayed
Given I click on Reports button
When I click on Create Task button
And I write a title
And I write a description
And I click on create button 
Then the task is created