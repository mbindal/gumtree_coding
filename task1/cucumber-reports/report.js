$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Task1_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Web UI testing using Selenium Web Driver",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validating number of Gumtree links",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver;validating-number-of-gumtree-links",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A user is at the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user searches for the string \u003csearch_string\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "There are \u003ccount\u003e results found for \u003ckeyword\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver;validating-number-of-gumtree-links;",
  "rows": [
    {
      "cells": [
        "search_string",
        "count",
        "keyword"
      ],
      "line": 8,
      "id": "web-ui-testing-using-selenium-web-driver;validating-number-of-gumtree-links;;1"
    },
    {
      "cells": [
        "Cars in London",
        "3",
        "Gumtree"
      ],
      "line": 9,
      "id": "web-ui-testing-using-selenium-web-driver;validating-number-of-gumtree-links;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4578514043,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validating number of Gumtree links",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver;validating-number-of-gumtree-links;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "A user is at the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user searches for the string Cars in London",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "There are 3 results found for Gumtree",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1_Test_Steps.a_user_is_at_the_Google_home_page()"
});
formatter.result({
  "duration": 2137403074,
  "status": "passed"
});
formatter.match({
  "location": "Task1_Test_Steps.user_searches_for_the_string_Cars_in_London()"
});
formatter.result({
  "duration": 3081380194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Task1_Test_Steps.there_are_results_found_for_Gumtree(int)"
});
formatter.result({
  "duration": 246780479,
  "status": "passed"
});
formatter.after({
  "duration": 669123389,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Validate title and number of results on each link click",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver;validate-title-and-number-of-results-on-each-link-click",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Google search results for \u003csearch_string\u003e are shown",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on each link containing \u003ckeyword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the title and number of results greater than \u003ccount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver;validate-title-and-number-of-results-on-each-link-click;",
  "rows": [
    {
      "cells": [
        "search_string",
        "count",
        "keyword"
      ],
      "line": 16,
      "id": "web-ui-testing-using-selenium-web-driver;validate-title-and-number-of-results-on-each-link-click;;1"
    },
    {
      "cells": [
        "Cars in London",
        "0",
        "Gumtree"
      ],
      "line": 17,
      "id": "web-ui-testing-using-selenium-web-driver;validate-title-and-number-of-results-on-each-link-click;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2308487145,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate title and number of results on each link click",
  "description": "",
  "id": "web-ui-testing-using-selenium-web-driver;validate-title-and-number-of-results-on-each-link-click;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Google search results for Cars in London are shown",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on each link containing Gumtree",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify the title and number of results greater than 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Task1_Test_Steps.google_search_results_for_Cars_in_London_are_shown()"
});
formatter.result({
  "duration": 103095,
  "status": "passed"
});
formatter.match({
  "location": "Task1_Test_Steps.i_click_on_each_link_containing_Gumtree()"
});
formatter.result({
  "duration": 97406481586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 54
    }
  ],
  "location": "Task1_Test_Steps.i_verify_the_title_and_number_of_results_greater_than(int)"
});
formatter.result({
  "duration": 263570,
  "status": "passed"
});
formatter.after({
  "duration": 862720081,
  "status": "passed"
});
});