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
        tags = "@smoke",
=======
        tags = "@Add_Teachers",
>>>>>>> 73f28e08a8fb610f7407b4417d2a8354a544bef8

        dryRun = false
)





public class Runner {
}
