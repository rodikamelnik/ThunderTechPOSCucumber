package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import pages.BarChartReportsPage;
import pages.LoginPage;


public class BarCharReports_Steps {
    BarChartReportsPage barChar = new BarChartReportsPage();

    @Then("Manager clicks on Orders tab under Reporting")
    public void manager_clicks_on_Orders_tab_under_Reporting() throws InterruptedException{

        barChar.clickOnOrdersUnderReporting.click();
        Thread.sleep(2000);
    }

    @Then("Manager clicks on Measures tab on top left corner")
    public void manager_clicks_on_Measures_tab_on_top_left_corner() throws InterruptedException{
        barChar.clickOnMeasures.click();
        Thread.sleep(2000);
    }

    @Then("Click on Total price form Measures tab")
    public void click_on_Total_price_form_Measures_tab() throws InterruptedException{
        barChar.clickonTotalDiscount.click();
        Thread.sleep(2000);
    }

    @Then("Click on Total Discount")
    public void click_on_Total_Discount() {
       barChar.clickOnTotalPrice.click();

    }


}