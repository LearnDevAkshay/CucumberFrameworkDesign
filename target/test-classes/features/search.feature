Feature: Search and place order for vegitable

@smokeTest
Scenario: Serach for vegatble and validate
Given User is on home page
When User enter the "Cucumber" in search box
Then "Cucumber" result should be dispalyed

@regTest
Scenario: Serach for vegatble and procced to checkout page
Given User is on home page
When User enter the "Beetroot" in search box

