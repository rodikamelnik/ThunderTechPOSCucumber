$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Cybertek_Training.feature");
formatter.feature({
  "name": "Teachers\u0027 and Students\u0027 Functionalities",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
<<<<<<< HEAD
formatter.scenarioOutline({
  "name": "Checking if student is created in DB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Check_StudentDB"
    }
  ]
});
formatter.step({
  "name": "Admin is on School page",
  "keyword": "When "
});
formatter.step({
  "name": "Admin clicks on Student module",
  "keyword": "And "
});
formatter.step({
  "name": "Admin chooses All students sun-category",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks and types \"\u003cname\u003e\" of the student in student name box",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on search button and clicks on student",
  "keyword": "And "
});
formatter.step({
  "name": "UI and database must match",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "Patricia"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking if student is created in DB",
  "description": "",
  "keyword": "Scenario Outline",
=======
formatter.scenario({
  "name": "Ability to add teachers",
  "description": "",
  "keyword": "Scenario",
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
  "tags": [
    {
      "name": "@smoke"
    },
    {
<<<<<<< HEAD
      "name": "@Check_StudentDB"
=======
      "name": "@Add_Teachers"
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on School page",
  "keyword": "When "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_is_on_School_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Admin clicks on Student module",
  "keyword": "And "
});
formatter.match({
  "location": "AddStudent_Steps.admin_clicks_on_Student_module()"
=======
  "name": "Admin clicks on Teachers module",
  "keyword": "And "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_clicks_on_Teachers_module()"
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Admin chooses All students sun-category",
  "keyword": "And "
});
formatter.match({
  "location": "DBCheking_Steps.admin_chooses_All_students_sun_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks and types \"Patricia\" of the student in student name box",
  "keyword": "And "
});
formatter.match({
  "location": "DBCheking_Steps.admin_clicks_and_types_of_the_student_in_student_name_box(String)"
=======
  "name": "Admin chooses Add teachers sub-category",
  "keyword": "When "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_chooses_Add_teachers_sub_category()"
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Admin clicks on search button and clicks on student",
  "keyword": "And "
});
formatter.match({
  "location": "DBCheking_Steps.admin_clicks_on_search_button_and_clicks_on_student()"
=======
  "name": "Admin fills out all necessary fields",
  "keyword": "And "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_fills_out_all_necessary_fields()"
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "UI and database must match",
  "keyword": "Then "
});
formatter.match({
  "location": "DBCheking_Steps.ui_and_database_must_match()"
=======
  "name": "Admin clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_clicks_on_submit_button()"
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});