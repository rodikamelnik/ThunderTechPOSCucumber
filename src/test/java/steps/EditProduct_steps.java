package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.sl.In;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.LoginPage;
import pages.ProductsPage;
import utilities.Driver;

import java.util.List;

public class EditProduct_steps {


    LoginPage login = new LoginPage();
    ProductsPage products = new ProductsPage();
    Actions actions = new Actions(Driver.getDriver());

    // Manager is is logging in Odoo page with manager credentials
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
        products.product.click();
    }

    // after clicking on first product, window with info will pop up and manager is able to edit information, on highlited tabs
    // we clear previous product name and change the input, and change product type
    @Then("Window with info will pop up and user is able to edit")
    public void window_with_info_will_pop_up_and_user_is_able_to_edit()throws InterruptedException {
        products.edit.click();
        products.inputName.clear();
        products.inputName.sendKeys("MacBook Pro");
        Thread.sleep(2000);
        Select select = new Select(products.productType);
        select.selectByIndex(2);

    }

    @Then("Manager is able to save changes")
    public void manager_is_able_to_save_changes() {
       products.save.click();
    }


    // first manager is clicking on listButton, wich arranges all products in a list, and then selects one product, Action button
    // should pop up on top
    @When("Manager selects one product and Action button pop up")
    public void manager_selects_one_product_and_Action_button_pop_up()throws InterruptedException {
       products.listButton.click();
       WebElement randomProduct = Driver.getDriver().findElement(By.xpath("(//input[@type='checkbox'])[8]"));
       randomProduct.click();
       Thread.sleep(2000);
       Assert.assertTrue(products.ActionButton.isDisplayed());

    }
    // Action button has 4 options, manager should select and click on delete option
    @When("Manager select delete option")
    public void manager_select_delete_option() throws InterruptedException{
        products.ActionButton.click();
        Thread.sleep(2000);
        products.deleteOption.click();

    }
    // a window will pop up with confirmation message
    @Then("Confirmation window pop up")
    public void confirmation_window_pop_up() {
        WebElement confirmationWindow = Driver.getDriver().findElement(By.xpath("//div[@class='modal-content']"));
        Assert.assertTrue(confirmationWindow.isDisplayed());

    }

    @When("Manager clicks Ok")
    public void manager_clicks_Ok()throws InterruptedException {
        Thread.sleep(2000);
        products.okButton.click();

    }

    // after clicking ok, another window pop ups with error message, and manager again clicks ok
    @When("Error message pop up and manager clicks Ok")
    public void error_message_pop_up_and_manager_clicks_Ok() throws InterruptedException{
        WebElement errorWindow = Driver.getDriver().findElement(By.xpath("//div[@class='modal-content']"));
        Thread.sleep(2000);
        products.okButton.click();
    }

    // Manager should be able to see the list of products from begining
    @Then("List of POS appear")
    public void list_of_POS_appear() {
        List <WebElement> allProducts = Driver.getDriver().findElements(By.xpath("//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped']"));
        for(WebElement product: allProducts){
            Assert.assertTrue(product.isDisplayed());
        }

    }


}
