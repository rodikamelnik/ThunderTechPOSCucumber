package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pages.LoginPage;
import pages.ProductsPage;
import pages.SalesDetailsPage;
import utilities.Driver;

import java.util.List;

public class POS_DeleteProduct_Steps {

    LoginPage login = new LoginPage();
    ProductsPage productsPage = new ProductsPage();
    Actions actions = new Actions(Driver.getDriver());
    SalesDetailsPage salePage = new SalesDetailsPage();





    //@rodika2(TT-120)
    // first manager is clicking on listButton, wich arranges all products in a list, and then selects one product, Action button
    // should pop up on top
    @When("Manager selects one product and Action button pop up")
    public void manager_selects_one_product_and_Action_button_pop_up()throws InterruptedException {
        salePage.listButton.click();
        WebElement randomProduct = Driver.getDriver().findElement(By.xpath("(//input[@type='checkbox'])[8]"));
        randomProduct.click();
        Thread.sleep(2000);
        Assert.assertTrue(salePage.ActionButton.isDisplayed());

    }
    // Action button has 4 options, manager should select and click on delete option
    @When("Manager select delete option")
    public void manager_select_delete_option() throws InterruptedException{
        salePage.ActionButton.click();
        Thread.sleep(2000);
        salePage.deleteOption.click();

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
        salePage.okButton.click();

    }

    // after clicking ok, another window pop ups with error message, and manager again clicks ok
    @When("Error message pop up and manager clicks Ok")
    public void error_message_pop_up_and_manager_clicks_Ok() throws InterruptedException{
        WebElement errorWindow = Driver.getDriver().findElement(By.xpath("//div[@class='modal-content']"));
        Thread.sleep(2000);
        salePage.okButton.click();
    }

    // Manager should be able to see the list of products from begining
    @Then("List of POS appear")
    public void list_of_POS_appear() {
        List<WebElement> allProducts = Driver.getDriver().findElements(By.xpath("//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped']"));
        for(WebElement product: allProducts){
            Assert.assertTrue(product.isDisplayed());
        }

    }

}
