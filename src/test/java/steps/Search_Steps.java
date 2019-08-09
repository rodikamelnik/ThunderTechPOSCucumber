package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Keys;
import pages.LoginPage;
import pages.POSHomePage;
import utilities.Driver;
import org.junit.Assert;

public class Search_Steps {

    LoginPage lp = new LoginPage();
    POSHomePage posHomePage = new POSHomePage();
    @When("The Manager is on Odoo page")
    public void the_Manager_is_on_Odoo_page() throws InterruptedException {
        lp.loginPage();
        lp.login("POSManager7");
    }
    @When("Manager clicks on Point Of Sale tab")
    public void manager_clicks_on_Point_Of_Sale_tab() throws InterruptedException {
        lp.navigateToPOS();
        Thread.sleep(3000);
    }
    @Then("Manager is on Point of Sale tab page")
    public void manager_is_on_Point_of_Sale_tab_page() {
        String expectedTitle = "Point of Sale - Odoo";
        String actualTitle = Driver.getDriver().getTitle();
        Assert.assertTrue(expectedTitle.equalsIgnoreCase(actualTitle));
    }
    @When("Manager types {string} in the search box and searches for it")
    public void manager_types_in_the_search_box_and_searches_for_it(String string) {
        posHomePage.searchBox.sendKeys(string + Keys.ENTER);
    }
    @Then("Manager sees {string} in the updated version of the page")
    public void manager_sees_in_the_updated_version_of_the_page(String string) {
        Assert.assertTrue(posHomePage.searchInput.getText().equalsIgnoreCase(string));
    }

}
