Feature: verify login functionality for various roles
Background: "user is on landing page" 
    Given I am on the login page

  @smoke
  Scenario: Verify As a admin , I should view home page
      Then I can see home page

  @regression
  Scenario: Verify As a admin , i should able to view validation message when login with invalid username and password
    When I login with username "admin" and password "Admin@123"
    Then I should see validation message as "Error: Please check your username and password. If you still can't log in, contact your Salesforce administrator."
