package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="features",
		glue={"stepDefinitions"},
		plugin={"html:target/cucumber-html-report","json:target/cucumber.json","rerun:target/rerun.txt"},
		tags={"@login"})
public class TestRunner {

}
