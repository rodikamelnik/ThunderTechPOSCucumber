@smoke
Feature: Edit certain product as a manager

  Scenario: Ability to edit certain product
    When User is on Odoo page
    And User clicks on Point of Sale functionality
    Then User is on Point of Sale page
    When User clicks on Products tab
    Then User should see all products
    When User clicks on any product
    Then Window with info will pop up and user is able to edit
    And User is able to save changes


  Scenario: Add an Item to the list in "Sales Details"
    When User is on Odoo page
    And User clicks on Point of Sale functionality
    Then User is on Point of Sale page
    When User clicks on Sale Details tab
    
