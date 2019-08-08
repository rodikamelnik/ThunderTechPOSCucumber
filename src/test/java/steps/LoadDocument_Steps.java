package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.LoginPage;
import pages.POSCategoriesPage;
import utilities.Driver;

import java.io.File;

public class LoadDocument_Steps {

    POSCategoriesPage pos=new POSCategoriesPage();
    WebElement upload;

    //Albina Urmat
    //Test Case #115 Import document and upload

    @When("Manager {int} is on Odoo page")
    public void manager_is_on_Odoo_page(Integer int1) throws InterruptedException {
        LoginPage lp = new LoginPage();
        // Log in to WebApp
        lp.loginPage();
        lp.login("POSManager8");
    }

    @When("Manager clicks on Products from Configuration tab")
    public void manager_clicks_on_Products_from_Configuration_tab() throws InterruptedException {
        //Products tab from Configuration folder
        Thread.sleep(3000);
        pos.productsPOS.click();

    }


    @Then("Manager clicks POS Categories tab")
    public void manager_clicks_POS_Categories_tab() throws InterruptedException {
        //located ProductsPage tab from Configuration
        pos.PosCategories.click();
        Thread.sleep(2000);
    }

    @Then("Manager clicks on import button")
    public void manager_clicks_on_import_button() throws InterruptedException {
        //located import button
        pos.importButton.click();
        Thread.sleep(2000);
    }

    @When("Manager clicks on Load File button")
    public void manager_clicks_on_Load_File_button() {
        //click File Upload button
        upload= Driver.getDriver().findElement(By.xpath("//div//span//input"));
    }

    @Then("Manager chooses a file from the documents")
    public void manager_chooses_a_file_from_the_documents() throws InterruptedException {
        //choose a file to upload
        File filepath = new File("uploadedFiles/Test.xlsx");
        String absolutePath = filepath.getAbsolutePath();
        upload.sendKeys(absolutePath);
        Thread.sleep(2000);
    }

    @Then("Manager sees uploaded document on the page")
    public void manager_sees_uploaded_document_on_the_page() {
        //make sure the file is uploaded
        Assert.assertTrue("Message FAILED to display", pos.text.getText().contains("Map your columns to import"));
    }
}


