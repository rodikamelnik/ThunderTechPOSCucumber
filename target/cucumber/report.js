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
formatter.scenario({
  "name": "Ability to add teachers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@Add_Teachers"
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
  "name": "Admin clicks on Teachers module",
  "keyword": "And "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_clicks_on_Teachers_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin chooses Add teachers sub-category",
  "keyword": "When "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_chooses_Add_teachers_sub_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fills out all necessary fields",
  "keyword": "And "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_fills_out_all_necessary_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTeachers_Steps.admin_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});