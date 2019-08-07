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
  "name": "Uploading document to POS category as a manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@albina"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager 2 is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_is_on_Odoo_page(Integer)"
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
  "name": "Manager clicks on Products from Configuration tab",
  "keyword": "When "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_on_Products_from_Configuration_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks POS Categories tab",
  "keyword": "Then "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_POS_Categories_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on import button",
  "keyword": "And "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_on_import_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Load File button",
  "keyword": "When "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_on_Load_File_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager chooses a file from the documents",
  "keyword": "Then "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_chooses_a_file_from_the_documents()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sees uploaded document on the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_sees_uploaded_document_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});