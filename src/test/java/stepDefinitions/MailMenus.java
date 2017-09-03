package stepDefinitions;

import Utililty.WebConnector;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

import org.junit.*;



public class MailMenus {
 WebConnector web = WebConnector.getInstance();
	
	
	@Given("^I am logged in \"(.*?)\"$")
	public void i_am_logged_in(String browser){
		web.OpenBrowser(browser);
		if(!web.isLoggedIn())
			web.doDeafultLogin();
	    
	}
	
	@When("^all Mail categories are present$")
	public void all_Mail_categories_are_present(DataTable table)  {
	   List<String> names = table.asList(String.class); 
	   for(int i=1;i<names.size();i++){
		   Assert.assertTrue("Elemeent not present",web.isElementPresent(names.get(i)));
	   }
	}
	
	
	

	@Then("^The \"(.*?)\" should be present$")
	public void the_should_be_present(String object){
	   Assert.assertTrue("Object Not Found", web.isElementPresent(object)); 
	}


}
