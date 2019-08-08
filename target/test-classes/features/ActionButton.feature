 @CholponA
Feature: Check Action Button as a manager

  Scenario: Ability to do some Actions under action button
    When Manager is on Bright ERP page
    And Manager clicks on POS functionality
    Then Manager is on POS page
    When Manager clicks on PriceList tab under catalog
    Then Manager should see list of products
    When Manager clicks on one or multiple product
    Then Manager shoul able to see "Export","Archive","Unarchive","Delete"
    When Manager clicks on Action Button
    Then Manager should able to do Actions with "Export","Archive","Unarchive","Delete"
