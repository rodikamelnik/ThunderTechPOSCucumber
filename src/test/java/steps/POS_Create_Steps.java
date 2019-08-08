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
import pages.SalesDetailsPage;
import utilities.Driver;

import java.io.File;
import java.util.List;

public class POS_Create_Steps {


    LoginPage login = new LoginPage();
    ProductsPage productsPage = new ProductsPage();
    Actions actions = new Actions(Driver.getDriver());
    SalesDetailsPage salePage = new SalesDetailsPage();

    //@rodika3(TT-93)
<<<<<<< HEAD
    // Manager creates a new product
    @When("Manager clicks on Create button")
    public void manager_clicks_on_Create_button() {
        productsPage.createButton.click();
    }
=======
   // Manager creates a new product
//    @When("Manager clicks on Create button")
//    public void manager_clicks_on_Create_button() {
//        productsPage.createButton.click();
//    }

>>>>>>> ded44736f9630f81712aace135e0d946b0b99e04
    // make sure the window for create product is displayed
    @Then("new window for create product pops up")
    public void new_window_for_create_product_pops_up() {
        WebElement createWindow = Driver.getDriver().findElement(By.xpath("//div[@class='o_form_sheet_bg']"));
        Assert.assertTrue(createWindow.isDisplayed());
    }

    //Manager insert name for new product and uploade a picture
    @When("Manager fills out empty field and uploads picture")
    public void manager_fills_out_empty_fielsd_and_upload_picture() throws InterruptedException {
        productsPage.inputName.sendKeys("apple Watch");
        //String filePath = Config.getProperty("imagePath");
        File filepath = new File("uploadedFiles/images.jpeg");
        String absolutePath = filepath.getAbsolutePath();
        productsPage.chooseFileInput.sendKeys(absolutePath);
        Thread.sleep(3000);
        Assert.assertTrue(!productsPage.image.getAttribute("src").equals("/web/static/src/img/placeholder.png"));
    }

    //Manager clicks on save button to save new created product
    @When("Manager clicks on save button")
    public void manager_clicks_on_save_button() {
        productsPage.save.click();
    }

    // Manager can see the confirmation message down of the page
    @Then("Manager can see confirmation message")
    public void manager_can_see_confirmation_message() {
        Assert.assertTrue(productsPage.message.getText().contains("created"));
    }
}