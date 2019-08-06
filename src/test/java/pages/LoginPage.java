package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Config;
import utilities.Driver;

public class LoginPage {



    public LoginPage(){

        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id="login")
    public WebElement email;

    @FindBy(id="password")
    public WebElement password;

    @FindBy(xpath = "//button[.='Log in']")
    public  WebElement login;

    @FindBy(xpath = "(//a[@class = 'oe_menu_toggler']//span)[5]")
    public WebElement pointOfSale;

    public void loginPage(){
        Driver.getDriver().get("http://54.148.96.210/web/login");
    }
    public void login(String user)throws InterruptedException{
        email.sendKeys(Config.getProperty("email" + user));
        password.sendKeys(Config.getProperty("password" + user));
        login.click();
        Thread.sleep(3000);
    }
    public void navigateToPOS(){
        pointOfSale.click();
    }





}
