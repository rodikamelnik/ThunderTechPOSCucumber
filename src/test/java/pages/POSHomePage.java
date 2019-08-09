package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class POSHomePage {

    public POSHomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "//input[@class='o_searchview_input']")
    public WebElement searchBox;
    @FindBy(xpath = "//div[@class='o_primary']")
    public WebElement searchResult;
    @FindBy(xpath = "//div[@class='o_facet_values']")
    public WebElement searchInput;
}
