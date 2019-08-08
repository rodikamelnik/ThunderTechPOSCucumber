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
  "name": "Ability to do some Actions under action button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CholponA"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Bright ERP page",
  "keyword": "When "
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
  "name": "Manager clicks on PriceList tab under catalog",
  "keyword": "When "
});
formatter.match({
  "location": "ActionButton_Steps.manager_clicks_on_PriceList_tab_under_catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager should see list of products",
  "keyword": "Then "
});
formatter.match({
  "location": "ActionButton_Steps.manager_should_see_list_of_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on one or multiple product",
  "keyword": "When "
});
formatter.match({
  "location": "ActionButton_Steps.manager_clicks_on_one_or_multiple_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager shoul able to see Export,Archive,Unarchive,Delete",
  "keyword": "Then "
});
formatter.match({
  "location": "ActionButton_Steps.manager_shoul_able_to_see_Export_Archive_Unarchive_Delete()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});