Feature: Web UI testing using Selenium Web Driver

   Scenario Outline: Validating number of Gumtree links
     Given A user is at the Google home page
     When user searches for the string <search_string>
     Then There are <count> results found for <keyword>
     Examples:
       | search_string  | count | keyword  |
       | Cars in London |     3 | Gumtree  |

   Scenario Outline: Validate title and number of results on each link click
     Given Google search results for <search_string> are shown
     When I click on each link containing <keyword>
     Then I verify the title and number of results greater than <count>
     Examples:
       | search_string  | count | keyword  |
       | Cars in London |     0 | Gumtree  |