$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PointOfSales.feature");
formatter.feature({
  "name": "Point of Sales functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Manager should be able to see the Bar Chart Reports",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@mehmet"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Odoo page",
  "keyword": "Given "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Point of Sale functionality",
  "keyword": "And "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_clicks_on_Point_of_Sale_functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Point of Sale page",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_is_on_Point_of_Sale_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Orders tab under Reporting",
  "keyword": "And "
});
formatter.match({
  "location": "BarCharReports_Steps.manager_clicks_on_Orders_tab_under_Reporting()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Measures tab on top left corner",
  "keyword": "Then "
});
formatter.match({
  "location": "BarCharReports_Steps.manager_clicks_on_Measures_tab_on_top_left_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Total price form Measures tab",
  "keyword": "And "
});
formatter.match({
  "location": "BarCharReports_Steps.click_on_Total_price_form_Measures_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Total Discount",
  "keyword": "Then "
});
formatter.match({
  "location": "BarCharReports_Steps.click_on_Total_Discount()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});