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
        tags = "@Check_StudentDB",
=======
        tags = "@Add_Teachers",
>>>>>>> c3f970bbd5911fbaaca8805f908ccc63a52de0e8
        dryRun = false
)





public class Runner {
}
