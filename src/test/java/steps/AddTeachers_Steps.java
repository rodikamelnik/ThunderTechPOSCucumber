package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AddTeachersPage;
import pages.LoginPageForSchool;
import utilities.Driver;

public class AddTeachers_Steps {

    LoginPageForSchool loginPageForSchool = new LoginPageForSchool();
    AddTeachersPage addTeachersPage = new AddTeachersPage();


    @When("Admin is on School page")
    public void admin_is_on_School_page() {
       loginPageForSchool.loginPageForSchool();

    }



    @When("Admin clicks on Teachers module")
    public void admin_clicks_on_Teachers_module() {
        addTeachersPage.teachersFunctionality.click();


    }



    @When("Admin chooses Add teachers sub-category")
    public void admin_chooses_Add_teachers_sub_category() {
        addTeachersPage.addTeachersSubCategory.click();

    }



    @When("Admin fills out all necessary fields")
    public void admin_fills_out_all_necessary_fields() {

    }



    @Then("Admin clicks on submit button")
    public void admin_clicks_on_submit_button() {

    }



}
