package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AddTeachersPage {


    public AddTeachersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//span[.=' Teachers']")
    public WebElement teachersFunctionality;

    @FindBy(xpath = "//a[.='Add Teacher']")
    public WebElement addTeachersSubCategory;

    @FindBy(xpath = "(//input[@type='text'])[1]")
    public WebElement firstName;

    @FindBy(xpath = "(//input[@type='text'])[2]")
    public WebElement emailAddr;

    @FindBy(xpath = "(//input[@type='password'])[1]")
    public WebElement password;

    @FindBy(xpath = "(//input[@type='text'])[3]")
    public WebElement subject;


    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])/select")
    // in case if the above doesn't work: //div[@class='form-group custom-mt-form-group'][5]
    public WebElement gender;


    @FindBy(xpath = "(//input[@type='text'])[4]")
    public WebElement birthDate;


    @FindBy(xpath = "//div[@class='form-group custom-mt-form-group'][7]/select")
    public WebElement batch;

    @FindBy(xpath = "(//input[@type='text'])[5]")
    public WebElement lastName;



    @FindBy(xpath = "(//input[@type='text'])[6]")
    public WebElement joiningDate;



    @FindBy(xpath = "(//input[@type='password'])[2]")
    public WebElement confirmPasswd;

    @FindBy(xpath = "//input[@type='number']")
    public WebElement mobileNumber;


    @FindBy(xpath = "(//div[@class='form-group custom-mt-form-group'])[12]/select")
    public WebElement department;


    @FindBy(xpath = "(//input[@type='text'])[7]")
    public WebElement salary;

    @FindBy(xpath = "(//input[@type='text'])[8]")
    public WebElement section;


    @FindBy(xpath = "//textarea[@id='message']")
    public WebElement permenantAddress;






}
