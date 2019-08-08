package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class OrderPage {
    // TT-126 Cholpon Shabolotova



    public OrderPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//a[@data-menu-xmlid='point_of_sale.menu_point_ofsale'])/span[1]")
    public  WebElement orders;

    @FindBy(xpath = "//li[.='Orders']")
    public WebElement orderText;

    @FindBy(xpath = "(//input[@type='checkbox'])[3]")
    public WebElement orderRefButton;

    @FindBy(xpath = "(//button[@class='o_dropdown_toggler_btn btn btn-sm dropdown-toggle'])[2]")
    public WebElement actionModule;

    public void orderModule(){

        orders.click();
    }
}
