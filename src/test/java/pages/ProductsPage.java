package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ProductsPage {

    public ProductsPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//button[contains(text(), 'Create')]")
    public WebElement create;

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

    @FindBy(xpath = "//div[@name='list_price']")
    public WebElement SalesPrice;

    @FindBy(xpath = "//button[@aria-label='list']")
    public WebElement listButton;

    @FindBy(xpath = "(//button[@class='o_dropdown_toggler_btn btn btn-sm dropdown-toggle'])[2]")
    public WebElement ActionButton;

    @FindBy(xpath = "(//select[@class='o_input o_field_widget o_required_modifier'])[1]")
    public WebElement productType;
}
