$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ActionButton.feature");
formatter.feature({
  "name": "Check Action Button as a manager",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CholponA"
    }
  ]
});
formatter.scenario({
<<<<<<< HEAD
  "name": "Manager should be able to see the Bar Chart Reports",
=======
  "name": "Ability to do some Actions under action button",
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@smoke"
    },
    {
      "name": "@mehmet"
=======
      "name": "@CholponA"
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager is on Odoo page",
  "keyword": "Given "
=======
  "name": "Manager is on Bright ERP page",
  "keyword": "When "
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
});
formatter.match({
  "location": "ActionButton_Steps.manager_is_on_Bright_ERP_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on POS functionality",
  "keyword": "And "
});
formatter.match({
  "location": "ActionButton_Steps.manager_clicks_on_POS_functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on POS page",
  "keyword": "Then "
});
formatter.match({
  "location": "ActionButton_Steps.manager_is_on_POS_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks on Orders tab under Reporting",
  "keyword": "And "
});
formatter.match({
  "location": "BarCharReports_Steps.manager_clicks_on_Orders_tab_under_Reporting()"
=======
  "name": "Manager clicks on PriceList tab under catalog",
  "keyword": "When "
});
formatter.match({
  "location": "ActionButton_Steps.manager_clicks_on_PriceList_tab_under_catalog()"
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks on Measures tab on top left corner",
  "keyword": "Then "
});
formatter.match({
  "location": "BarCharReports_Steps.manager_clicks_on_Measures_tab_on_top_left_corner()"
=======
  "name": "Manager should see list of products",
  "keyword": "Then "
});
formatter.match({
  "location": "ActionButton_Steps.manager_should_see_list_of_products()"
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Click on Total price form Measures tab",
  "keyword": "And "
});
formatter.match({
  "location": "BarCharReports_Steps.click_on_Total_price_form_Measures_tab()"
=======
  "name": "Manager clicks on one or multiple product",
  "keyword": "When "
});
formatter.match({
  "location": "ActionButton_Steps.manager_clicks_on_one_or_multiple_product()"
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Click on Total Discount",
  "keyword": "Then "
});
formatter.match({
  "location": "BarCharReports_Steps.click_on_Total_Discount()"
=======
  "name": "Manager shoul able to see Export,Archive,Unarchive,Delete",
  "keyword": "Then "
});
formatter.match({
  "location": "ActionButton_Steps.manager_shoul_able_to_see_Export_Archive_Unarchive_Delete()"
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});