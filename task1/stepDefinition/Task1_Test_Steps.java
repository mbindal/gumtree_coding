package stepDefinition;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before	;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Task1_Test_Steps {
	public static ArrayList<String> link = new ArrayList<String>();
	public static ArrayList<String> title = new ArrayList<String>();
	public static  ArrayList<Integer> link_count = new ArrayList<Integer>();
	public static WebDriver driver;
	public static  HashMap<Integer, String> hmap = new HashMap<Integer, String>();
	
	@Before
	public void beforeScenario() {
		System.setProperty("webdriver.chrome.driver",
                "C:\\Users\\mayur\\Downloads\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
	}
	
	@Given("^A user is at the Google home page$")
	public void a_user_is_at_the_Google_home_page() throws Throwable {
        driver.get("http://www.google.com");
	}

	@When("^user searches for the string Cars in London$")
	public void user_searches_for_the_string_Cars_in_London() throws Throwable {
		WebElement element = driver.findElement(By.name("q"));
        element.sendKeys("Cars in London");
        element.submit();
        
	}

	@Then("^There are (\\d+) results found for Gumtree$")
	public void there_are_results_found_for_Gumtree(int count) throws Throwable {
		 WebElement myDynamicElement = (new WebDriverWait(driver, 10))
	         .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h3[@class='r']/a")));
		 List<WebElement> findElements = driver.findElements(By.xpath("//*[@id='rso']//h3/a"));
		 int actual_count = 0;
		 for (WebElement webElement : findElements)
		    {
		        if (webElement.getAttribute("href").contains("gumtree")) {
		        	    link.add(webElement.getAttribute("href"));
		        	    actual_count++;
		        }
		    }
		 if (actual_count == count)
			 System.out.println("success");
	}

	@Given("^Google search results for Cars in London are shown$")
	public void google_search_results_for_Cars_in_London_are_shown() throws Throwable {
		//NOOP as all the data has been collected in previous steps
		System.out.println("Success");
	}

	@When("^I click on each link containing Gumtree$")
	public void i_click_on_each_link_containing_Gumtree() throws Throwable {
		for(int i=0;i<link.size();i++)
		{
			driver.navigate().to(link.get(i));
			WebElement myDynamicElement = null;
			myDynamicElement = (new WebDriverWait(driver, 10))
		        .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//article[@class='listing-maxi']/a[@class='listing-link']")));
			link_count.add(driver.findElements(By.xpath("//article[@class='listing-maxi']/a[@class='listing-link']")).size());
			title.add(driver.getTitle());
		}
			
	}

	@Then("^I verify the title and number of results greater than (\\d+)$")
	public void i_verify_the_title_and_number_of_results_greater_than(int arg1) throws Throwable {
		int flag = 0;
		for(int i=0;i<link.size();i++)
		{
			if (!(title.get(i).contains("Gumtree") && link_count.get(i) > arg1))
				    flag = 1;
		}
		if (flag == 1)
		   System.out.println("Failure");
		else
		   System.out.println("Success");
	}
	
	@After
	public void afterScenario() {
	    driver.quit();
	}
}
