Feature: Create a Fixed Rate Contract Feature

    Scenario: Creation of Fixed Rate Contract with weekly pay and special clause
        Given I am on the Deel Login page
        When I log in with valid credentials
        Then I validate that I am on Deel Home Page
        When I go to "Create A Contract"
        Then I validate that I am on Contract Type Page
        When I go for "Fixed Rate" contract creation
        Then I validate the heading for page is "Creating a fixed contract"
        And I enter data in General info
            | Entity | Contract name | Tax Residence | State      | Job title | Seniority                               | Scope         | Date      |
            | None   | test          | United States | California | Account   | Junior (Individual Contributor Level 1) | just for test | yesterday |
        And I enter data in Payment details
            | Currency            | Payment Rate | Frequency | Customize invoice |
            | GBP - British Pound | 1000         | Weekly    | false             |
        And I enter data in Define Dates
            | First Payment Date | Type        |
            | today              | Full amount |
        When I add a special clause as "Special Clause for Test Purpose"
        And I click on Next
        Then I create Deel Contract named "test"