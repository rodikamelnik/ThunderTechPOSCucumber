package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class POSCategoriesPage {



    public POSCategoriesPage(){

        PageFactory.initElements( Driver.getDriver(), this);
    }

    @FindBy(xpath = "(//a[@data-menu-xmlid='point_of_sale.pos_menu_products_configuration'])/span")
    public WebElement productsPOS;

    @FindBy(xpath = "(//a//span[contains(text(), 'PoS Categories')])")
    public WebElement PosCategories;

    @FindBy(xpath = "//div//button[contains(text(), 'Import')]")
    public WebElement importButton;

    @FindBy(xpath = "//div//span//input")
    public WebElement loadFile;

    @FindBy(xpath = "//div[@class='oe_import_with_file oe_padding col-sm-12']//h2")
    public WebElement text;
}

