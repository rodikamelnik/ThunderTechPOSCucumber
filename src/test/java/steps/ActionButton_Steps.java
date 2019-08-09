package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.ActionPage;
import pages.LoginPage;
import pages.ProductsPage;
import utilities.Driver;

import java.util.List;

public class ActionButton_Steps {

    LoginPage login = new LoginPage();
    ProductsPage productsPage = new ProductsPage();
    ActionPage actionPage = new ActionPage();


    @When("Manager is on Bright ERP page")
    public void manager_is_on_Bright_ERP_page() throws  InterruptedException{
        login.loginPage();
        login.login("POSManager7");
    }

    @When("Manager clicks on POS functionality")
    public void manager_clicks_on_POS_functionality() throws  InterruptedException{
        login.navigateToPOS();
        Thread.sleep(2000);

    }

    @Then("Manager is on POS page")
    public void manager_is_on_POS_page() {
        Assert.assertTrue( Driver.getDriver().getCurrentUrl().contains("http://54.148.96.210/web?#view_type=kanban&model=pos.config&menu_id=500&action=677"));

    }

    @When("Manager clicks on PriceList tab under catalog")
    public void manager_clicks_on_PriceList_tab_under_catalog() {
        actionPage.priceList.click();

    }

    @Then("Manager should see list of products")
    public void manager_should_see_list_of_products() {
        List<WebElement> allProducts = Driver.getDriver().findElements(By.xpath("(//div[@class='table-responsive'])"));
        for(WebElement element: allProducts){
            Assert.assertTrue(element.isDisplayed());
        }
    }

    @When("Manager clicks on one or multiple product")
    public void manager_clicks_on_one_or_multiple_product()throws InterruptedException {
        Thread.sleep(2000);
     actionPage.getPriceListName.click();
     actionPage.actionButton.click();

    }

    @Then("Manager shoul able to see Export,Archive,Unarchive,Delete")
    public void manager_shoul_able_to_see_Export_Archive_Unarchive_Delete()throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertTrue(actionPage.export.isDisplayed());
        Assert.assertTrue(actionPage.archive.isDisplayed());
        Assert.assertTrue(actionPage.unarchive.isDisplayed());
        Assert.assertTrue(actionPage.delete.isDisplayed());

    }


}
