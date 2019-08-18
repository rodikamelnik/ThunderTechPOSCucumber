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
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Check_StudentDB"
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
  "name": "Admin clicks on Student module",
  "keyword": "And "
});
formatter.match({
  "location": "AddStudent_Steps.admin_clicks_on_Student_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
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
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on search button and clicks on student",
  "keyword": "And "
});
formatter.match({
  "location": "DBCheking_Steps.admin_clicks_on_search_button_and_clicks_on_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "UI and database must match",
  "keyword": "Then "
});
formatter.match({
  "location": "DBCheking_Steps.ui_and_database_must_match()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});