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
        tags = " @CholponA",
=======
        tags = "@smoke",
>>>>>>> 0e27c27e4e850daf6ee396924a63db671967fba7
        dryRun = false
)





public class Runner {
}
