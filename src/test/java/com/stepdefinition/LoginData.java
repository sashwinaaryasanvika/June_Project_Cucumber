package com.stepdefinition;

import org.openqa.selenium.WebDriver;


import com.baseclass_cucumber.BaseClasss;
import com.helperfile.File_Read_Manager;
import com.pomclass.PageObjectManage;
import com.runnerfile.TestRunnerFile;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginData extends BaseClasss{
	
	public static WebDriver driver= TestRunnerFile.driver;
	
	public static PageObjectManage pom=new  PageObjectManage(driver);	

	@Before
	public void beforeHooks(Scenario s) {
		String name = s.getName();
		System.out.println("Scenario Name: " +name);

	}
	
	@After
	public void afterHooks(Scenario s) {
		String status = s.getStatus();
		System.out.println("Scenario Status: " +status);

	}
	
	
	
	@Given("^User is Launch the application$")
	public void user_is_Launch_the_application() throws Throwable {
	    getUrl("https://adactinhotelapp.com/");
	}
	
	@When("^User is enter the \"([^\"]*)\" in username field$")
	public void user_is_enter_the_in_username_field(String arg1) throws Throwable {
	    input_Text(pom.getInstancelp().getUsername(), arg1);
	}

	@When("^User is enter the \"([^\"]*)\" in pasword field$")
	public void user_is_enter_the_in_pasword_field(String arg1) throws Throwable {
	    input_Text(pom.getInstancelp().getPassword(), arg1);
	}

	@Then("^User is enter the Submit Button$")
	public void user_is_enter_the_Submit_Button() throws Throwable {
		click_Button(pom.getInstancelp().getSubmit());
	}
	
	@When("^user is select the location$")
	public void user_is_select_the_location() throws Throwable {
	    
		
	}

}
