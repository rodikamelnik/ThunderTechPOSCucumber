package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import utilities.Driver;

public class ActionButton_steps {
LoginPage login = new LoginPage();


    @When("Manager is on Bright ERP page")
    public void manager_is_on_Bright_ERP_page() throws InterruptedException{
       login.loginPage();
       login.login("POSManager7");
    }

    @When("Manager clicks on POS functionality")
    public void manager_clicks_on_POS_functionality() {
     login.navigateToPOS();
    }

    @Then("Manager is on POS page")
    public void manager_is_on_POS_page() {
        Assert.assertTrue( Driver.getDriver().getCurrentUrl().contains("http://54.148.96.210/web?#view_type=kanban&model=pos.config&menu_id=500&action=677"));

    }

    @When("Manager clicks on PriceList tab under catalog")
    public void manager_clicks_on_PriceList_tab_under_catalog() {

    }

    @Then("Manager should see list of products")
    public void manager_should_see_list_of_products() {

    }

    @When("Manager clicks on one or multiple product")
    public void manager_clicks_on_one_or_multiple_product() {

    }

    @Then("Manager shoul able to see {string},{string},{string},{string}")
    public void manager_shoul_able_to_see(String string, String string2, String string3, String string4) {

    }

    @When("Manager clicks on Action Button")
    public void manager_clicks_on_Action_Button() {

    }

    @Then("Manager should able to do Actions with {string},{string},{string},{string}")
    public void manager_should_able_to_do_Actions_with(String string, String string2, String string3, String string4) {

    }

}
