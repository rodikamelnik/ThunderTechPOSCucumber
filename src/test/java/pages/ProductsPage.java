package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ProductsPage {

    public ProductsPage(){

        PageFactory.initElements(Driver.getDriver(), this);
    }

    // by clicking create Button a new window will pop up
    @FindBy(xpath = "//button[contains(text(), 'Create')]")
    public WebElement createButton;


    // name of new product
    @FindBy(xpath = "(//input[@placeholder='Product Name'])")
    public WebElement inputName;

    @FindBy(xpath = "//div[@class='o_cp_left']//button[contains(text(), 'Save')]")
    public WebElement save;

    @FindBy(xpath = "(//div[@class='o_thread_message ']//p)[2]")
    public WebElement message;

    @FindBy(xpath = "//button[contains(text(), 'Discard')]")
    public WebElement discard;

    @FindBy(xpath = "//h4[@class='modal-title']")
    public WebElement warningMessage;

    @FindBy(xpath = "//button/span[.='Ok']")
    public WebElement ok;

    @FindBy(xpath = "//div[@class='o_notification_manager']//li")
    public WebElement notificationManager;

    @FindBy(xpath = "(//div[@class='o_hidden_input_file ']//form/input[@name='ufile'])[2]")
    public WebElement chooseFileInput;

    @FindBy(xpath = "//div[@name='image_medium']/img")
    public WebElement image;

    @FindBy(xpath = "((//div[@class='oe_kanban_global_click o_kanban_record'])[1])")
    public WebElement product;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_form_button_edit']")
    public WebElement edit;





    @FindBy(xpath = "(//select[@class='o_input o_field_widget o_required_modifier'])[1]")
    public WebElement productType;

    //WebElement OK button for both pop up windows, confirmatin window and error window
    @FindBy(xpath = "//button[@class='btn btn-sm btn-primary']")
    public WebElement okButton;


    //WebElement Delete option from Action Button
    @FindBy(xpath = "(//a[@data-section='other'])[4]")
    public WebElement deleteOption;





}
