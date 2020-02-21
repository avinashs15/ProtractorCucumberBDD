#features/test.feature
Feature: Running Cucumber with Protractor
  As a github user
  I should be able to create and delete repository
  In order to verify sanity checks

  Scenario: GitHub Create and delete scenario
    Given When I launch "https://github.com"
    When I enter username "new10TestUser" and password "<Password>" and login
    Then I should be able to see home page
    Then I should be able to Add a new Repository named "TestDemoRepository"
    Then I should be able to search for the created repository
    Then I should be able to delete the created repository
    Then I should verify the repository is deleted
    Then I should be able to log out of github
