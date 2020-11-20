package com.nop.commerce.myrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		plugin ={"pretty","html:target/cucumber-reports/cucumber.json", "json:target/cucumber.json"},
		monochrome = true,
		features = "Cucumber_Feature",
		
		glue = "com.nop.commerce.stepdefination"
		
		)




public class OutLineRunner extends AbstractTestNGCucumberTests{

}
