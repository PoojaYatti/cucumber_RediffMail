package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "@target/rerun.txt",
        plugin = {"pretty", 
                  "html:target/cucumber-reports",
                  "json:target/cucumber.json","rerun:target/rerun.txt"},
                  tags="@login"
		)
		public class FailedRunner {

}


