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
<<<<<<< HEAD
        tags = "@smoke",
=======
        tags = "@Add_Teachers",
>>>>>>> 73f28e08a8fb610f7407b4417d2a8354a544bef8
>>>>>>> 2354afdf53c7194ee0f7316b38e5996f0f4e2b6e

        dryRun = false
)





public class Runner {
}
