package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.AddStudentPage;
import utilities.DBType;
import utilities.DBUtility;
import utilities.Driver;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;

public class DBCheking_Steps {

    AddStudentPage addStudentPage = new AddStudentPage();
    List<WebElement> listOfStudents = Driver.getDriver().findElements(By.xpath("//div[@class='row staff-grid-row']"));
    private List<Map<String,Object>> DBStudents;

    @When("Admin chooses All students sun-category")
    public void admin_chooses_All_students_sun_category() {
        addStudentPage.allStudentsSubCategory.click();

    }

    @When("Admin clicks and types {string} of the student in student id box")
    public void admin_clicks_and_types_of_the_student_in_student_id_box(String id) {
        addStudentPage.SearchStudentID.click();
        addStudentPage.SearchStudentID.sendKeys(id);

    }

    @When("Admin clicks on search button and clicks on student")
    public void admin_clicks_on_search_button_and_clicks_on_student()throws InterruptedException {

        addStudentPage.SearchButton.click();
        Thread.sleep(2000);
        addStudentPage.Student.click();
        Thread.sleep(2000);
        Assert.assertTrue(addStudentPage.IDStudent.isDisplayed());
    }

    @When("I query database with sql {string}")
    public void i_query_database_with_sql(String sql) throws SQLException{
        DBUtility.establishConnection(DBType.ORACLE);
        DBStudents = DBUtility.runSQLquery(sql);
        DBUtility.closeConnections();

    }




    @Then("UI and database must contain {string}")
    public void ui_and_database_must_contain(String id) {

        boolean check = false;

        for(Map<String, Object> ids: DBStudents){
            if(ids.get("STUDENT_ID").equals(id)){
                check = true;
            }
        }
        Assert.assertTrue(id + "is not in database", check);

    }


}
