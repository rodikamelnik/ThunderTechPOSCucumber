package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.poi.POIReadOnlyDocument;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pages.LoginPage;
import pages.ProductsPage;
import utilities.Driver;

import java.util.List;

public class EditProduct_steps {


    LoginPage login = new LoginPage();
    ProductsPage products = new ProductsPage();
    Actions actions = new Actions(Driver.getDriver());


    @When("Manager is on Odoo page")
    public void manager_is_on_Odoo_page()throws InterruptedException {
        login.loginPage();
        login.login("POSManager7");
    }

    @When("Manager clicks on Point of Sale functionality")
    public void manager_clicks_on_Point_of_Sale_functionality()throws InterruptedException {
        login.navigateToPOS();
        Thread.sleep(2000);

    }

    @Then("Manager is on Point of Sale page")
    public void manager_is_on_Point_of_Sale_page(){
        Assert.assertTrue( Driver.getDriver().getCurrentUrl().contains("http://54.148.96.210/web?#view_type=kanban&model=pos.config&menu_id=500&action=677"));

    }

    @When("Manager clicks on Products tab")
    public void manager_clicks_on_Products_tab() {
        WebElement productsModule = Driver.getDriver().findElement(By.xpath("(//a[@data-menu-xmlid='point_of_sale.menu_pos_products'])"));
        productsModule.click();
    }

    @Then("Manager should see all products")
    public void manager_should_see_all_products() {
        List<WebElement> allProducts = Driver.getDriver().findElements(By.className("o_kanban_view o_kanban_ungrouped"));
        for(WebElement element: allProducts){
            Assert.assertTrue(element.isDisplayed());
        }
    }

    @When("Manager clicks on any product")
    public void manager_clicks_on_any_product() {
        products.product.click();
    }

    @Then("Window with info will pop up and user is able to edit")
    public void window_with_info_will_pop_up_and_user_is_able_to_edit()throws InterruptedException {
        products.edit.click();
        products.inputName.clear();
        products.inputName.sendKeys("MacBook Pro");
        Thread.sleep(2000);
        actions.doubleClick(products.SalesPrice).perform();
        products.SalesPrice.clear();
        Thread.sleep(2000);
        products.SalesPrice.sendKeys("3000");

    }

    @Then("Manager is able to save changes")
    public void manager_is_able_to_save_changes() {
       products.save.click();
    }



}
