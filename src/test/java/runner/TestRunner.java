package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="classpath:resources/Login.feature",
		glue={"stepDefinitions"},
		plugin={"html:target/cucumber-html-report","rerun:target/rerun.txt"},
		tags={"@login"})
public class TestRunner {

}