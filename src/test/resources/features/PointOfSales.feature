@smoke
Feature: Edit certain product as a manager

  Scenario: Ability to edit certain product
    When Manager is on Odoo page
    And Manager clicks on Point of Sale functionality
    Then Manager is on Point of Sale page
    When Manager clicks on Products tab
    Then Manager should see all products
    When Manager clicks on any product
    Then Manager with info will pop up and user is able to edit
    And Manager is able to save changes


  Scenario: Add an Item to the list in "Sales Details"
    When Manager is on Odoo page
    And Manager clicks on Point of Sale functionality
    Then Manager is on Point of Sale page


