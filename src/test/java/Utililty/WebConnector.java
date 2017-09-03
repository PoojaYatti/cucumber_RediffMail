package Utililty;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
//import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebConnector {
	
	Properties OR=null;
	Properties config=null;
	WebDriver driver=null;
	WebDriver Mozilla=null;
	WebDriver Chrome=null;
	static WebConnector w=null;
	
Logger logger =Logger.getLogger("WebConnector");



	
	//webConnector constructor to initialize the properties files
	//the webconnector constructor is created private as we want this class to be a singleton class whose only one object can be created
	private WebConnector(){
		if(OR==null){
			try{
				
				//initialize OR
				OR=new Properties();
				FileInputStream fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\Config\\OR.properties");
				OR.load(fis);
				
				//initialize config
				config=new Properties();
				fis=new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\Config\\"+OR.getProperty("Env")+".properties");
				config.load(fis);
				

//				System.out.println(OR.getProperty("GoBtn_xpath"));
//				System.out.println(config.getProperty("LoginURL"));
			}
			catch(Exception e){
				System.out.println("Properties file not initialized properly");
			}
			
			PropertyConfigurator.configure("log4j.properties");
			
		}
		
	}
	
	public void OpenBrowser(String bType){
		if(bType.equals("Mozilla") && Mozilla==null){
			System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir")+"\\Drivers\\geckodriver.exe");
			driver=new FirefoxDriver();
			Mozilla=driver;
		}else if(bType.equals("Mozilla") && Mozilla!=null){
			driver=Mozilla;
		}
		else if(bType.equals("Chrome") && Chrome==null){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");
			driver=new ChromeDriver();
			Chrome=driver;
		}else if(bType.equals("Chrome") && Chrome!=null){
			driver=Chrome;
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
	
	public void navigate(String URL){
		System.out.println("value of URL"+ URL);
		driver.get(OR.getProperty(URL));
	}
	
	
	public void click(String object){
		driver.findElement(By.xpath(OR.getProperty(object))).click();
		
	 }
	
	public void type(String object,String text){
		driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(text);;
	}
	
	public boolean isElementPresent(String object){
		int count = driver.findElements(By.xpath(OR.getProperty(object))).size();
		System.out.println("count "+count);
		if(count==0)
			return false;
		else
			return true;
		}
	
	
	
	/**************************Application dependent functions*************************************/


	public boolean isLoggedIn(){
		if(isElementPresent("inbox_xpath"))
			return true;
		else
			return false;
	}
	
	
	
	public void doDeafultLogin(){
		navigate("LoginURL");
		click("SignIn_xpath");
		type("Email_xpath", "nisha.toki");
		type("Pass_xpath", "nisha@123");
		click("remembercheck_xpath");
		click("GoBtn_xpath");
	}
	
	
	
	
	
	
	/**********************************Singleton*****************************************/
      public static WebConnector getInstance(){
	
	  if(w==null)
		w=new WebConnector();
	  return w;
}

/*****************************Logging***************************************************/
 
  public void log(String msg){
	  logger.info(msg);
  }
}
	
	

