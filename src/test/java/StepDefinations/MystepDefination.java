package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MystepDefination {
	WebDriver driver;

	@Given("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "F:\\Selenium\\chromedriver_win32\\Chrome\\chromedriver.exe");

		ChromeOptions options = new ChromeOptions();
		options.addArguments("start-maximized");

		driver = new ChromeDriver(options);
		driver.get("https://rahulshettyacademy.com/seleniumPractise/#/");

	}

	@When("^User enter the \"([^\"]*)\" in search box$")
	public void user_enter_the_in_search_box(String vegName) throws Throwable {
		driver.findElement(By.xpath("//input[@type=\"search\"]")).sendKeys(vegName);
		driver.findElement(By.xpath("//button[@type=\"submit\"]")).click() ;
		Thread.sleep(1000);

	}

	@Then("^\"([^\"]*)\" result should be dispalyed$")
	public void result_should_be_dispalyed(String expectedName) throws Throwable {
		
		String actualName = driver.findElement(By.cssSelector("h4.product-name")).getText() ;
		System.out.println(actualName + " " + expectedName);
		//Assert.assertTrue(actualName.contains(expectedName));
	

		
	}

}
