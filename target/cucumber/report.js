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
  "name": "Admin clicks and types \"\u003cid\u003e\" of the student in student id box",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks on search button and clicks on student",
  "keyword": "And "
});
formatter.step({
  "name": "I query database with sql \"Select FIRST_NAME, LAST_NAME FROM student WHERE STUDENT_ID \u003d \u0027\u003cid\u003e\u0027 \"",
  "keyword": "And "
});
formatter.step({
  "name": "UI and database must contain \"\u003cid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id"
      ]
    },
    {
      "cells": [
        "55184"
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
  "name": "Admin clicks and types \"55184\" of the student in student id box",
  "keyword": "And "
});
formatter.match({
  "location": "DBCheking_Steps.admin_clicks_and_types_of_the_student_in_student_id_box(String)"
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
  "name": "I query database with sql \"Select FIRST_NAME, LAST_NAME FROM student WHERE STUDENT_ID \u003d \u002755184\u0027 \"",
  "keyword": "And "
});
formatter.match({
  "location": "DBCheking_Steps.i_query_database_with_sql(String)"
});
formatter.result({
  "error_message": "java.sql.SQLException: No suitable driver found for jdbc:oracle:thin:@schooloracledb.ckgvmy6l4fr7.us-east-2.rds.amazonaws.com:1521/ORCL\n\tat java.sql/java.sql.DriverManager.getConnection(DriverManager.java:702)\n\tat java.sql/java.sql.DriverManager.getConnection(DriverManager.java:228)\n\tat utilities.DBUtility.establishConnection(DBUtility.java:20)\n\tat steps.DBCheking_Steps.i_query_database_with_sql(DBCheking_Steps.java:50)\n\tat ✽.I query database with sql \"Select FIRST_NAME, LAST_NAME FROM student WHERE STUDENT_ID \u003d \u002755184\u0027 \"(src/test/resources/features/Cybertek_Training.feature:29)\n",
  "status": "failed"
});
formatter.step({
  "name": "UI and database must contain \"55184\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DBCheking_Steps.ui_and_database_must_contain(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});