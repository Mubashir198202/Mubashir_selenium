package com.nopcommerce.pagefactory;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.nopcommerce.baseclass.SuperClass;

public class MasterPageFactory extends SuperClass {
	
public	MasterPageFactory() {
	
	PageFactory.initElements(driver, this);
}
	
@FindBy(id="Email")
@CacheLookup
private WebElement enterUsername;
@FindBy(id="Password")
@CacheLookup
private WebElement enterPassword;
@FindBy(xpath="//*[@value='Log in']")
@CacheLookup
private WebElement clicklogin;
@FindBy(linkText = "Logout")
@CacheLookup
private WebElement clicklogout;
public WebElement getEnterUsername() {
	enterUsername.clear();
	return enterUsername;
}
public WebElement getEnterPassword() {
	enterPassword.clear();
	return enterPassword;
}
public WebElement getClicklogin() {
	return clicklogin;
}
public WebElement getClicklogout() {
	return clicklogout;
}





}
