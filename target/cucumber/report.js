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
  "name": "Ability to edit certain product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.manager_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Point of Sale functionality",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.manager_clicks_on_Point_of_Sale_functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Point of Sale page",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.manager_is_on_Point_of_Sale_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Products tab",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.manager_clicks_on_Products_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager should see all products",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.manager_should_see_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on any product",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.manager_clicks_on_any_product()"
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
  "name": "Manager is able to save changes",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.manager_is_able_to_save_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add an Item to the list in \"Sales Details\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@rodika"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.manager_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Point of Sale functionality",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.manager_clicks_on_Point_of_Sale_functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Point of Sale page",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.manager_is_on_Point_of_Sale_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager selects one product and Action button pop up",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.manager_selects_one_product_and_Action_button_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager select delete option",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.manager_select_delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirmation window pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.confirmation_window_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Ok",
  "keyword": "When "
});
formatter.match({
  "location": "EditProduct_steps.manager_clicks_Ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message pop up and manager clicks Ok",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct_steps.error_message_pop_up_and_manager_clicks_Ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of POS appear",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct_steps.list_of_POS_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});