package com.nop.commerce.stepdefination;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.nopcommerce.baseclass.SuperClass;
import com.nopcommerce.pagefactory.MasterPageFactory;
import com.util.HightLighter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OutLineTestStepDef extends SuperClass {
	MasterPageFactory mf;
	
	
	
	
	@Given("^As a user i can open any browser$")
	public void as_a_user_i_can_open_any_browser() throws Throwable  {
	log.info("********>As a user i can open any browser<********");	
		SuperClass.initialization(); 
	    mf=PageFactory.initElements(driver, MasterPageFactory.class);
	}

	@Given("^As a user i can enter the \"([^\"]*)\" and go to the login page$")
	public void as_a_user_i_can_enter_the_and_go_to_the_login_page(String URL)  {
		log.info("********>As a user i can enter the URL<********");
	    driver.get(URL);
	    
	}

	@When("^As a user i can enter as \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void as_a_user_i_can_enter_as_and_password(String userName, String passWord)  {
		log.info("********>As a user i can enter username<********");
		HightLighter.getcolor(driver, mf.getEnterUsername(), "yellow");
	  mf.getEnterUsername().sendKeys(userName);
	  log.info("********>As a user i can enter password<********");
	  HightLighter.getcolor(driver, mf.getEnterPassword(), "green");
	  mf.getEnterPassword().sendKeys(passWord);  
	}

	@When("^Click on login$")
	public void click_on_login()  {
	log.info("********>As a user i can click loggin<********");
	HightLighter.getcolor(driver, mf.getClicklogin(), "red");
	mf.getClicklogin().click();    
	    
	}

	@When("^Homepage title should be \"([^\"]*)\"$")
	public void homepage_title_should_be(String homeTitle)  {
	log.info("********>As a user i can verify login title<********");	
	 if(driver.getPageSource().contains("Login was Unsuccesfull")) {  
	  driver.quit();
	 } 
	 else {
		Assert.assertEquals("Dashboard / nopCommerce administration", homeTitle); 
	 }
	}

	@When("^As a user i can click on logout link$")
	public void as_a_user_i_can_click_on_logout_link()  {
	log.info("********>As a user i can clicklogout<********");
	HightLighter.getcolor(driver, mf.getClicklogout(), "red");
	  mf.getClicklogout().click();  
	    
	}

	@Then("^Loginpage title should be \"([^\"]*)\"$")
	public void loginpage_title_should_be(String LoginPageTitle)  {
	log.info("********>As a user i can verify Loginpage title<********");	
		 if(driver.getPageSource().contains("Logout was Unsuccesfull")) {  
			  driver.quit();
			 } 
			 else {
				Assert.assertEquals("Your store. Login", LoginPageTitle); 
			 }   
	    
	}

	@Then("^Close the browser$")
	public void close_the_browser()  {
	log.info("********>As a user i can close the browser<********");	
		
	  driver.quit();  
	    
	}


}
