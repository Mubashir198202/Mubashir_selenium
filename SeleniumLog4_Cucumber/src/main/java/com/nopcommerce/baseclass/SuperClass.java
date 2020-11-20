package com.nopcommerce.baseclass;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SuperClass {
	
public static WebDriver driver;
public static Logger log; // import from org.apache.log4j.Logger
public static Properties configProp;

/*public WebDriver getDriver() {
	return driver;
	
}*/

public SuperClass() {
	
	log = Logger.getLogger("QA-MUBASHIR"); // add logger
	PropertyConfigurator.configure("Log4j.properties");// added logger
	
	
}

public static void initialization() throws Throwable {	
	
 configProp = new Properties(); //import java.util.Properties
 //import java.io.FileInputStream
 FileInputStream configPropfile	= new FileInputStream("config.properties"); // change to throws Throwable
 configProp.load(configPropfile);	//import.load( 1st one)
	
	String br = configProp.getProperty("browser");
	
	if(br.equals("firefox")) {
		System.setProperty("webdriver.gecko.driver",configProp.getProperty("firefoxbrowser"));
	     driver = new FirefoxDriver(); 
	     
	    }else if(br.equals("chrome")) {
	    System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromebrowser"));
	    driver = new ChromeDriver();
	    }else if(br.equals("medge")) {
			System.setProperty("webdriver.edge.driver",configProp.getProperty("medgebrowser"));
			driver=new EdgeDriver();
		}
	//System.setProperty("webdriver.chrome.driver",("./Driver/chromedriver.exe"));
   // driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}
	

}
