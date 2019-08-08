$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ActionButton.feature");
formatter.feature({
<<<<<<< HEAD
  "name": "Check Action Button as a manager",
=======
  "name": "Point of Sales functionality",
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
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
  "name": "Ability to do some Actions under action button",
=======
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
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "name": "@CholponA"
=======
      "name": "@smoke"
    },
    {
      "name": "@rodika2"
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
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
<<<<<<< HEAD
formatter.match({});
=======
formatter.match({
  "location": "POS_EditProduct_Steps.manager_is_on_Odoo_page()"
});
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Manager clicks on POS functionality",
  "keyword": "And "
});
<<<<<<< HEAD
formatter.match({});
=======
formatter.match({
  "location": "POS_EditProduct_Steps.manager_clicks_on_Point_of_Sale_functionality()"
});
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Manager is on POS page",
  "keyword": "Then "
});
<<<<<<< HEAD
formatter.match({});
=======
formatter.match({
  "location": "POS_EditProduct_Steps.manager_is_on_Point_of_Sale_page()"
});
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Manager clicks on PriceList tab under catalog",
  "keyword": "When "
});
<<<<<<< HEAD
formatter.match({});
=======
formatter.match({
  "location": "POS_DeleteProduct_Steps.manager_selects_one_product_and_Action_button_pop_up()"
});
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
formatter.result({
  "status": "undefined"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager should see list of products",
  "keyword": "Then "
=======
  "name": "Manager select delete option",
  "keyword": "And "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.manager_select_delete_option()"
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks on one or multiple product",
  "keyword": "When "
=======
  "name": "Confirmation window pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.confirmation_window_pop_up()"
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager shoul able to see \"Export\",\"Archive\",\"Unarchive\",\"Delete\"",
  "keyword": "Then "
=======
  "name": "Manager clicks Ok",
  "keyword": "When "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.manager_clicks_Ok()"
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks on Action Button",
  "keyword": "When "
=======
  "name": "Error message pop up and manager clicks Ok",
  "keyword": "And "
});
formatter.match({
  "location": "POS_DeleteProduct_Steps.error_message_pop_up_and_manager_clicks_Ok()"
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
});
formatter.match({});
formatter.result({
<<<<<<< HEAD
  "status": "undefined"
=======
  "status": "passed"
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
});
formatter.step({
  "name": "Manager should able to do Actions with \"Export\",\"Archive\",\"Unarchive\",\"Delete\"",
  "keyword": "Then "
});
<<<<<<< HEAD
formatter.match({});
formatter.result({
  "status": "undefined"
=======
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
  "name": "Manager clicks on Create button",
  "keyword": "And "
});
formatter.match({
  "location": "POS_Create_Steps.manager_clicks_on_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new window for create product pops up",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_Create_Steps.new_window_for_create_product_pops_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager fills out empty field and uploads picture",
  "keyword": "When "
});
formatter.match({
  "location": "POS_Create_Steps.manager_fills_out_empty_fielsd_and_upload_picture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "POS_Create_Steps.manager_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager can see confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_Create_Steps.manager_can_see_confirmation_message()"
});
formatter.result({
  "status": "passed"
});
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
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
});
formatter.after({
  "status": "passed"
});
});