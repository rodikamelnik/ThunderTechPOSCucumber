package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber", "json:target/report.json"},
        features = "src/test/resources/features",
        glue = "steps",
<<<<<<< HEAD
        tags = "@mehmet",
=======
        tags = " @CholponA",
>>>>>>> 7d02a8f20c9b75b98a194656b057655beb731bcf
        dryRun = false
)





public class Runner {
}
