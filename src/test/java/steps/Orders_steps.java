package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.LoginPage;
import pages.OrderPage;
import pages.ProductsPage;
import utilities.Driver;

public class Orders_steps {

    // TT-126 Cholpon Shabolotova

    LoginPage loginPage = new LoginPage();
    OrderPage orderPage = new OrderPage();


    // User is going to application
    @Given("User is on Odoo page")
    public void user_is_on_Odoo_page() {
        loginPage.loginPage();

    }

    // User provides valid credentials
    @When("User provides username and password")
    public void user_provides_username_and_password() throws InterruptedException {
        loginPage.login("POSUser4");

    }

    // User clicks on PoS Functionality
    @When("User clicks on  PoS Functionality")
    public void user_clicks_on_PoS_Functionality() {
        loginPage.navigateToPOS();
    }

    // User clicks on Order module.
    @When("User clicks on Orders module")
    public void user_clicks_on_Orders_module() {
        orderPage.orderModule();
        Assert.assertTrue("Order text isn't displayed", orderPage.orderText.isDisplayed());

    }

    // User clicks on Order Ref button.
    @When("User clicks on Order Ref button")
    public void user_clicks_on_Order_Ref_button() {
        orderPage.orderRefButton.click();
    }

    // After clicking on Order Ref button, user  should be able to see Action button.
    @Then("User should see Action button")
    public void user_should_see_Action_button() {
        Assert.assertTrue("Action module is not displayed", orderPage.actionModule.isDisplayed());



    }


}
