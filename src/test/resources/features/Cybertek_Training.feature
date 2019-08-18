@smoke
Feature: Teachers' and Students' Functionalities

  @Add_Teachers
  Scenario: Ability to add teachers
    When Admin is on School page
    And Admin clicks on Teachers module
    When Admin chooses Add teachers sub-category
    And Admin fills out all necessary fields
    Then Admin clicks on submit button


  @Add_Student
  Scenario: Abbility to add a student
    When Admin is on School page
    And Admin clicks on Student module
    When Admin chooses Add student sub-category
    And Admin fills out all necessary fields for student
    Then Admin clicks on submit button


  @Check_StudentDB
  Scenario Outline: Checking if student is created in DB
    When Admin is on School page
    And Admin clicks on Student module
    And Admin chooses All students sun-category
    And Admin clicks and types "<name>" of the student in student name box
    And Admin clicks on search button and clicks on student
    Then UI and database must match
    Examples:
      | name    |
      | Patricia |