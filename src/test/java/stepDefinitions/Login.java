package stepDefinitions;



import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import Utililty.WebConnector;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login {


    
	//web object will call the contructor of WebConnector and initialize and load the properties file
	WebConnector web = WebConnector.getInstance();
	
	

	
	
	@Given("^Runmode is \"(.*?)\"$")
	public void runmode_is(String runmode){
		if(runmode.equals("N"))
			throw new PendingException("Skipping the test as runmode is N");  
	}


	@Given("^I go to \"(.*?)\" on \"(.*?)\"$")
	public void i_go_to_on(String URL, String browser){
		//System.out.println("I go to "+URL+"on"+browser);
	
		web.log("Opening "+URL+"on"+browser);
	    web.OpenBrowser(browser);
	    web.navigate(URL);
	}


   @When("^I click on \"(.*?)\" on homepage$")
	public void i_click_on_on_homepage(String Signinobject){
	   web.log("Clicking on ");
	  web.click(Signinobject);
	}


	//same function is used for entering username and password as they have the same format
	@And("^I enter \"(.*?)\" as \"(.*?)\"$")
	public void i_enter_as(String object, String text){
	    //System.out.println("I enter "+object+" as "+text);
		web.log("Entering "+text+"in "+object);
	    web.type(object, text);
	}
	
	
	@When("^I uncheck remember me \"(.*?)\"$")
	public void i_uncheck_remember_me(String object)  {
		web.log("Unchecking remember me checkbox ");
	  web.click(object);  
	}


	@And("^I click on \"(.*?)\"$")
	public void i_click_on(String object){
	   // System.out.println("I click on "+object);
		web.log("Clicking on "+object);
	    web.click(object);
	}

	@Then("^The login should be \"(.*?)\"$")
	public void the_login_should_be(String expectedResult){
	    //System.out.println("login should be "+expectedResult);
		web.log("Login should be "+expectedResult);
	    boolean result = web.isElementPresent("inbox_xpath");
	    System.out.println("result "+result);
	    String actualResult=null;
	    if(result){
	    	actualResult="success";
	    	System.out.println("actualResult"+actualResult);
	    	web.click("LogOut_xpath");
	    	
	    }
	    else{
	    	actualResult="failure";
	    	System.out.println("actualResult"+actualResult);
	    	
	    }
	    Assert.assertEquals(expectedResult, actualResult);
	    }
	

	
	 
	/*  @After
		public void closeBrowser(Scenario s){
			if(s.isFailed()){
	
				s.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
			}
			
			driver.close();*/

	
				
	}

	
	
	
	
	
	
	
	

