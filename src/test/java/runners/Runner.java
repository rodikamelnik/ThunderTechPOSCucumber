package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = "html:target/cucumber",
        features = "src/test/resources/features",
        glue = "steps",
<<<<<<< HEAD
        tags = "@albina",
=======
        tags = "@cholponS",
>>>>>>> c84257d6735ea38809a818e3d160d1b71cd1132a
        dryRun = false
)





public class Runner {
}
