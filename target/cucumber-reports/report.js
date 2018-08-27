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
  "duration": 4705051030,
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
  "duration": 869587832,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:05:20.749Z\u0027\nSystem info: host: \u0027MAYURBI01\u0027, ip: \u0027169.254.140.175\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\mayur\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:56173}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: e3405543ad512cc03c0986206ae24ff7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat stepDefinition.Task1_Test_Steps.a_user_is_at_the_Google_home_page(Task1_Test_Steps.java:38)\r\n\tat ✽.Given A user is at the Google home page(Task1_Test.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Task1_Test_Steps.user_searches_for_the_string_Cars_in_London()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 656931988,
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
  "duration": 2316500610,
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
  "duration": 746393,
  "status": "passed"
});
formatter.match({
  "location": "Task1_Test_Steps.i_click_on_each_link_containing_Gumtree()"
});
formatter.result({
  "duration": 51315,
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
  "duration": 3049483,
  "status": "passed"
});
formatter.after({
  "duration": 704583135,
  "status": "passed"
});
});