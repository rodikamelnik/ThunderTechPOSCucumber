$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PointOfSales.feature");
formatter.feature({
  "name": "Edit certain product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Ability to edit certain product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.user_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Point of Sale functionality",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.user_clicks_on_Point_of_Sale_functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Point of Sale page",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.user_is_on_Point_of_Sale_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Products tab",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.user_clicks_on_Products_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see all products",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.user_should_see_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on any product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.user_clicks_on_any_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Window with info will pop up and user is able to edit",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.window_with_info_will_pop_up_and_user_is_able_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to save changes",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.user_is_able_to_save_changes()"
});
formatter.result({
  "status": "passed"
});
});