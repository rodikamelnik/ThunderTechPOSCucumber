package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class BarChartReportsPage {

    public BarChartReportsPage(){

        PageFactory.initElements( Driver.getDriver(), this);
    }
    @FindBy(xpath = "//a[@href='/web#menu_id=502&action=681']")
     public WebElement clickOnOrdersUnderReporting ;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm dropdown-toggle']")
    public  WebElement clickOnMeasures;

    @FindBy(xpath = "//li[@data-field='price_total']")
    public WebElement clickOnTotalPrice;

    @FindBy(xpath = "//a[text()='Total Discount']")
    public  WebElement clickonTotalDiscount;
}
