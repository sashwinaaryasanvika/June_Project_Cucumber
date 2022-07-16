package com.runnerfile;


import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.baseclass_cucumber.BaseClasss;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\java\\com\\featurefile",
					glue ="com.stepdefinition",
					//tags = {"@regression_run"},
					monochrome = true,
					dryRun = false,
					strict = true,
					
					plugin = {"html:Reports/htmlreport",
							   //"pretty",
							   "json:Reports/jsonreport.json",
							   "com.cucumber.listener.ExtentCucumberFormatter:Reports/extent_report.html"									
					}
		)
public class TestRunnerFile {	

	public static WebDriver driver;  // Null driver	
	@BeforeClass
	public static void setUp() {
		driver=BaseClasss.get_Drivers("Chrome");

	}
	
	@AfterClass
	public static void tearDown() {
		driver.close();

	}
	
	
	
	
	}
		


