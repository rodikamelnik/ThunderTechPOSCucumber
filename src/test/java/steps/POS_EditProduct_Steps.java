package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.LoginPage;
import pages.ProductsPage;
import utilities.Driver;

import java.util.List;

public class POS_EditProduct_Steps {


    LoginPage login = new LoginPage();
    ProductsPage productsPage = new ProductsPage();
    Actions actions = new Actions(Driver.getDriver());

    // @rodika1
    // Manager is is logging in Odoo page with manager credentials
    @When("Manager is on Odoo page")
    public void manager_is_on_Odoo_page()throws InterruptedException {
        login.loginPage();
        login.login("POSManager7");
    }

    // Manager is navigating to Point of Sales module
    @When("Manager clicks on Point of Sale functionality")
    public void manager_clicks_on_Point_of_Sale_functionality()throws InterruptedException {
        login.navigateToPOS();
        Thread.sleep(2000);

    }

    // verifing if manager is on Point of Sales page, we check if current URL contains expected URL
    @Then("Manager is on Point of Sale page")
    public void manager_is_on_Point_of_Sale_page(){
        Assert.assertTrue( Driver.getDriver().getCurrentUrl().contains("http://54.148.96.210/web?#view_type=kanban&model=pos.config&menu_id=500&action=677"));

    }

    @When("Manager clicks on Products tab")
    public void manager_clicks_on_Products_tab() {
        WebElement productsModule = Driver.getDriver().findElement(By.xpath("(//a[@data-menu-xmlid='point_of_sale.menu_pos_products'])"));
        productsModule.click();
    }

    // Manager should see all products, using for each loop, cheking if each product is displayed
    @Then("Manager should see all products")
    public void manager_should_see_all_products() {
        List<WebElement> allProducts = Driver.getDriver().findElements(By.className("o_kanban_view o_kanban_ungrouped"));
        for(WebElement element: allProducts){
            Assert.assertTrue(element.isDisplayed());
        }
    }
    // manager clicks on a random product, in this case first product
    @When("Manager clicks on any product")
    public void manager_clicks_on_any_product() {
        productsPage.product.click();
    }

    // after clicking on first product, window with info will pop up and manager is able to edit information, on highlited tabs
    // we clear previous product name and change the input, and change product type
    @Then("Window with info will pop up and user is able to edit")
    public void window_with_info_will_pop_up_and_user_is_able_to_edit()throws InterruptedException {
        productsPage.edit.click();
        productsPage.inputName.clear();
        productsPage.inputName.sendKeys("MacBook Pro");
        Thread.sleep(2000);
        Select select = new Select(productsPage.productType);
        select.selectByIndex(2);

    }

    @Then("Manager is able to save changes")
    public void manager_is_able_to_save_changes() {
        productsPage.save.click();
    }



}
