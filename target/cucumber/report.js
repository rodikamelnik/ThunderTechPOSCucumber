$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PointOfSales.feature");
formatter.feature({
  "name": "Edit certain product as a manager",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Ability to take an action on certain \"Order References\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@cholponS"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Odoo page",
  "keyword": "Given "
});
formatter.match({
  "location": "Orders_steps.user_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Orders_steps.user_provides_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on  PoS Functionality",
  "keyword": "And "
});
formatter.match({
  "location": "Orders_steps.user_clicks_on_PoS_Functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Orders module",
  "keyword": "When "
});
formatter.match({
  "location": "Orders_steps.user_clicks_on_Orders_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Order Ref button",
  "keyword": "And "
});
formatter.match({
  "location": "Orders_steps.user_clicks_on_Order_Ref_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see Action button",
  "keyword": "Then "
});
formatter.match({
  "location": "Orders_steps.user_should_see_Action_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"button\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Cholpons-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c1:aae2:1dd1:f1e3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\n\tat steps.Orders_steps.user_should_see_Action_button(Orders_steps.java:59)\n\tat ✽.User should see Action button(src/test/resources/features/PointOfSales.feature:33)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});