@smoke
Feature: Point of Sales functionality

@rodika1
  Scenario: Ability to edit certain product
    When Manager is on Odoo page
    And Manager clicks on Point of Sale functionality
    Then Manager is on Point of Sale page
    When Manager clicks on Products tab
    Then Manager should see all products
    When Manager clicks on any product
    Then Window with info will pop up and user is able to edit
    And Manager is able to save changes

@rodika2
  Scenario: Add an Item to the list in "Sales Details"
    When Manager is on Odoo page
    And Manager clicks on Point of Sale functionality
    Then Manager is on Point of Sale page
    When Manager selects one product and Action button pop up
    And Manager select delete option
    Then Confirmation window pop up
    When Manager clicks Ok
    And Error message pop up and manager clicks Ok
    Then List of POS appear

  @albina
  Scenario: Uploading document to POS category as a manager

  When Manager 2 is on Odoo page
  And Manager clicks on Point of Sale functionality
  Then Manager is on Point of Sale page
  When Manager clicks on Products from Configuration tab
  Then Manager clicks POS Categories tab
  And Manager clicks on import button
  When Manager clicks on Load File button
  Then Manager chooses a file from the documents
  And Manager sees uploaded document on the page


  @rodika3
  Scenario: "Create" functionality for Product tab
    When Manager is on Odoo page
    And Manager clicks on Point of Sale functionality
    Then Manager is on Point of Sale page
    When Manager clicks on Products tab
    And Manager clicks on Create button
    Then new window for create product pops up
    When Manager fills out empty field and uploads picture
    And Manager clicks on save button
    Then Manager can see confirmation message

  @cholponS
  Scenario:Ability to take an action on certain "Order References"
    Given User is on Odoo page
    When User provides username and password
    And User clicks on  PoS Functionality
    When User clicks on Orders module
    And User clicks on Order Ref button
    Then User should see Action button


  @sapar
  Scenario Outline: "Search" functionality Result Verification
    When The Manager is on Odoo page
    And Manager clicks on Point Of Sale tab
    Then Manager is on Point of Sale tab page
    When Manager types "<searchInput>" in the search box and searches for it
    Then Manager sees "<searchResult>" in the updated version of the page
    Examples: Test data for search functionality
      |searchInput   |searchResult   |
      |Phone Elektrik|Phone Elektrik |
      |ASD           |ASD            |
      |TJ            |TJ             |




  @mehmet
    Scenario: Manager should be able to see the Bar Chart Reports
    Given Manager is on Odoo page
    And Manager clicks on Point of Sale functionality
    Then Manager is on Point of Sale page
    And  Manager clicks on Orders tab under Reporting
    Then Manager clicks on Measures tab on top left corner
    And Click on Total price form Measures tab
    Then Click on Total Discount


