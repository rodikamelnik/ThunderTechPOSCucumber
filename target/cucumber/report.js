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
formatter.uri("src/test/resources/features/PointOfSales.feature");
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
  "name": "Ability to edit certain product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@rodika1"
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
  "name": "Manager clicks on Products tab",
  "keyword": "When "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_clicks_on_Products_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager should see all products",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_should_see_all_products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on any product",
  "keyword": "When "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_clicks_on_any_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Window with info will pop up and user is able to edit",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_EditProduct_Steps.window_with_info_will_pop_up_and_user_is_able_to_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager is able to save changes",
  "keyword": "And "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_is_able_to_save_changes()"
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
      "name": "@rodika2"
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
  "name": "Manager selects one product and Action button pop up",
  "keyword": "When "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.manager_selects_one_product_and_Action_button_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager select delete option",
  "keyword": "And "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.manager_select_delete_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirmation window pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.confirmation_window_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks Ok",
  "keyword": "When "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.manager_clicks_Ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message pop up and manager clicks Ok",
  "keyword": "And "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.error_message_pop_up_and_manager_clicks_Ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "List of POS appear",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.list_of_POS_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "\"Create\" functionality for Product tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@rodika3"
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
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat steps.POS_EditProduct_Steps.manager_is_on_Point_of_Sale_page(POS_EditProduct_Steps.java:42)\n\tat ✽.Manager is on Point of Sale page(src/test/resources/features/PointOfSales.feature:45)\n",
  "status": "failed"
});
formatter.step({
  "name": "Manager clicks on Products tab",
  "keyword": "When "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_clicks_on_Products_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager clicks on Create button",
  "keyword": "And "
});
formatter.match({
  "location": "POS_Create_Steps.manager_clicks_on_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new window for create product pops up",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_Create_Steps.new_window_for_create_product_pops_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager fills out empty field and uploads picture",
  "keyword": "When "
});
formatter.match({
  "location": "POS_Create_Steps.manager_fills_out_empty_fielsd_and_upload_picture()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "POS_Create_Steps.manager_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager can see confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_Create_Steps.manager_can_see_confirmation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
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