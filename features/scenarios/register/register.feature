Feature: Register
As a user I can Register in the website

Scenario: Register with valid credentials
Given I open the register page
When I enter a name
And I enter a surname
And I enter a username
And I enter a password
And I enter a confirmation
And I click on the register button
Then a succesful message is displayed

# Scenario Outline: Register with invalid credentials
# Given I open the register page
# When I enter a name <name>
# And I enter a surname <surname>
# And I enter a username "Vasile.123"
# And I enter a password "123"
# And I enter a confirmation "123"
# And I click on register button
# Then a succesful message is displayed

#  Examples:
#     | name    | surname | username |
#     | Andrei  |   5 |    7 |
#     |    20   |   5 |   15 |