package pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ActionPage {
    WebDriver driver;
    public ActionPage(){
        driver= Driver.getDriver();
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "(//a[@data-menu-xmlid='point_of_sale.pos_config_menu_action_product_pricelist'])")
    public WebElement priceList;

    @FindBy(xpath ="(//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped']/tbody/tr[3]/td/div/input)[1]" )
    public  WebElement getPriceListName;

    @FindBy(xpath="(//div[@class='table-responsive'])")
        public WebElement allProducts;

    @FindBy(xpath = "//div[@class='o_cp_sidebar']")
    public WebElement actionButton;

    @FindBy(xpath = "(//a[@data-index='0'])")
    public WebElement export;

    @FindBy(xpath = "(//a[@data-index='1'])")
    public WebElement archive;

    @FindBy(xpath = "(//a[@data-index='2'])")
    public WebElement unarchive;

    @FindBy(xpath = "(//a[@data-index='3'])")
    public WebElement delete;

}
