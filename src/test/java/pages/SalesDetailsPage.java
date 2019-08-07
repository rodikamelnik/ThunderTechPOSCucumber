package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class SalesDetailsPage {

    public SalesDetailsPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(xpath = "//div[@name='list_price']")
    public WebElement SalesPrice;


    //This button arranges all products in a list
    @FindBy(xpath = "//button[@aria-label='list']")
    public WebElement listButton;


    // Actin Button, pop ups after Manager selects one product from list
    @FindBy(xpath = "(//button[@class='o_dropdown_toggler_btn btn btn-sm dropdown-toggle'])[2]")
    public WebElement ActionButton;


    @FindBy(xpath = "(//select[@class='o_input o_field_widget o_required_modifier'])[1]")
    public WebElement productType;

    //WebElement OK button for both pop up windows, confirmatin window and error window
    @FindBy(xpath = "//button[@class='btn btn-sm btn-primary']")
    public WebElement okButton;


    //WebElement Delete option from Action Button
    @FindBy(xpath = "(//a[@data-section='other'])[4]")
    public WebElement deleteOption;


}
