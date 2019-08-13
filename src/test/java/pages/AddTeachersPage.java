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


}
