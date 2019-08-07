git config merge.conflictstyle diff3
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
<<<<<<< HEAD
  "name": "Uploading document to POS category as a manager",
=======
<<<<<<< HEAD
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
=======
  "name": "Ability to take an action on certain \"Order References\"",
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
<<<<<<< HEAD
      "name": "@albina"
=======
<<<<<<< HEAD
      "name": "@rodika2"
=======
      "name": "@cholponS"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager 2 is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_is_on_Odoo_page(Integer)"
=======
<<<<<<< HEAD
  "name": "Manager is on Odoo page",
  "keyword": "When "
});
formatter.match({
  "location": "POS_EditProduct_Steps.manager_is_on_Odoo_page()"
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
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
=======
  "name": "User is on Odoo page",
  "keyword": "Given "
});
formatter.match({
  "location": "Orders_steps.user_is_on_Odoo_page()"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks on Products from Configuration tab",
  "keyword": "When "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_on_Products_from_Configuration_tab()"
=======
  "name": "User provides username and password",
  "keyword": "When "
});
formatter.match({
<<<<<<< HEAD
  "location": "POS_DeleteProduct_steps.manager_selects_one_product_and_Action_button_pop_up()"
=======
  "location": "Orders_steps.user_provides_username_and_password()"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks POS Categories tab",
  "keyword": "Then "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_POS_Categories_tab()"
=======
  "name": "User clicks on  PoS Functionality",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "POS_DeleteProduct_steps.manager_select_delete_option()"
=======
  "location": "Orders_steps.user_clicks_on_PoS_Functionality()"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager clicks on import button",
  "keyword": "And "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_clicks_on_import_button()"
=======
<<<<<<< HEAD
  "name": "Confirmation window pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_DeleteProduct_steps.confirmation_window_pop_up()"
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on Load File button",
  "keyword": "When "
});
formatter.match({
<<<<<<< HEAD
  "location": "LoadDocument_Steps.manager_clicks_on_Load_File_button()"
=======
  "location": "POS_DeleteProduct_steps.manager_clicks_Ok()"
=======
  "name": "User clicks on Orders module",
  "keyword": "When "
});
formatter.match({
  "location": "Orders_steps.user_clicks_on_Orders_module()"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager chooses a file from the documents",
  "keyword": "Then "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_chooses_a_file_from_the_documents()"
=======
  "name": "User clicks on Order Ref button",
  "keyword": "And "
});
formatter.match({
<<<<<<< HEAD
  "location": "POS_DeleteProduct_steps.error_message_pop_up_and_manager_clicks_Ok()"
=======
  "location": "Orders_steps.user_clicks_on_Order_Ref_button()"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Manager sees uploaded document on the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoadDocument_Steps.manager_sees_uploaded_document_on_the_page()"
});
formatter.result({
  "status": "passed"
=======
  "name": "User should see Action button",
  "keyword": "Then "
});
formatter.match({
<<<<<<< HEAD
  "location": "POS_DeleteProduct_steps.list_of_POS_appear()"
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
  "location": "POS_steps.manager_clicks_on_Create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new window for create product pops up",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_steps.new_window_for_create_product_pops_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager fills out empty fielsd and upload picture",
  "keyword": "When "
});
formatter.match({
  "location": "POS_steps.manager_fills_out_empty_fielsd_and_upload_picture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on save button",
  "keyword": "And "
});
formatter.match({
  "location": "POS_steps.manager_clicks_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager can see confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "POS_steps.manager_can_see_confirmation_message()"
=======
  "location": "Orders_steps.user_should_see_Action_button()"
>>>>>>> dc2b5d40cd28c5c5605df894744f47a46c9e1a80
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"button\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Cholpons-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:14c1:aae2:1dd1:f1e3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\n\tat steps.Orders_steps.user_should_see_Action_button(Orders_steps.java:59)\n\tat ✽.User should see Action button(src/test/resources/features/PointOfSales.feature:33)\n",
  "status": "failed"
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
});
formatter.after({
  "status": "passed"
});
});
