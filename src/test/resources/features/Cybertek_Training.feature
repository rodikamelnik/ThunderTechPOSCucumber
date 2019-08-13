@smoke
  Feature: Teachers' and Students' Functionalities

    @Add_Teachers
    Scenario: Ability to add teachers
      When Admin is on School page
      And Admin clicks on Teachers module
      When Admin chooses Add teachers sub-category
      And Admin fills out all necessary fields
      Then Admin clicks on submit button


