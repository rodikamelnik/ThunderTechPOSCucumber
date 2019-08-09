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
formatter.scenarioOutline({
  "name": "\"Search\" functionality Result Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sapar"
    }
  ]
});
formatter.step({
  "name": "The Manager is on Odoo page",
  "keyword": "When "
});
formatter.step({
  "name": "Manager clicks on Point Of Sale tab",
  "keyword": "And "
});
formatter.step({
  "name": "Manager is on Point of Sale tab page",
  "keyword": "Then "
});
formatter.step({
  "name": "Manager types \"\u003csearchInput\u003e\" in the search box and searches for it",
  "keyword": "When "
});
formatter.step({
  "name": "Manager sees \"\u003csearchResult\u003e\" in the updated version of the page",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for search functionality",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchInput",
        "searchResult"
      ]
    },
    {
      "cells": [
        "Phone Elektrik",
        "Phone Elektrik"
      ]
    },
    {
      "cells": [
        "ASD",
        "ASD"
      ]
    },
    {
      "cells": [
        "TJ",
        "TJ"
      ]
    }
  ]
});
formatter.scenario({
  "name": "\"Search\" functionality Result Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sapar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Manager is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "Search_Steps.the_Manager_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Point Of Sale tab",
  "keyword": "And "
});
formatter.match({
  "location": "Search_Steps.manager_clicks_on_Point_Of_Sale_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Point of Sale tab page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.manager_is_on_Point_of_Sale_tab_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager types \"Phone Elektrik\" in the search box and searches for it",
  "keyword": "When "
});
formatter.match({
  "location": "Search_Steps.manager_types_in_the_search_box_and_searches_for_it(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sees \"Phone Elektrik\" in the updated version of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.manager_sees_in_the_updated_version_of_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "\"Search\" functionality Result Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sapar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Manager is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "Search_Steps.the_Manager_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Point Of Sale tab",
  "keyword": "And "
});
formatter.match({
  "location": "Search_Steps.manager_clicks_on_Point_Of_Sale_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Point of Sale tab page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.manager_is_on_Point_of_Sale_tab_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager types \"ASD\" in the search box and searches for it",
  "keyword": "When "
});
formatter.match({
  "location": "Search_Steps.manager_types_in_the_search_box_and_searches_for_it(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sees \"ASD\" in the updated version of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.manager_sees_in_the_updated_version_of_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "\"Search\" functionality Result Verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sapar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The Manager is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "Search_Steps.the_Manager_is_on_Odoo_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Point Of Sale tab",
  "keyword": "And "
});
formatter.match({
  "location": "Search_Steps.manager_clicks_on_Point_Of_Sale_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is on Point of Sale tab page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.manager_is_on_Point_of_Sale_tab_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager types \"TJ\" in the search box and searches for it",
  "keyword": "When "
});
formatter.match({
  "location": "Search_Steps.manager_types_in_the_search_box_and_searches_for_it(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager sees \"TJ\" in the updated version of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.manager_sees_in_the_updated_version_of_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});