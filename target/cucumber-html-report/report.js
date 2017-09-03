$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging in Rediffmail",
  "description": "\r\nIn order to test mail\r\nAs a user\r\nI want to login",
  "id": "logging-in-rediffmail",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "",
  "id": "logging-in-rediffmail;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I go to \"LoginURL\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"SignIn_xpath\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Email_xpath\" as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pass_xpath\" as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I uncheck remember me \"remembercheck_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"GoBtn_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The login should be \"\u003cexpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "logging-in-rediffmail;;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "browser",
        "username",
        "password",
        "expectedResult"
      ],
      "line": 19,
      "id": "logging-in-rediffmail;;;1"
    },
    {
      "cells": [
        "Y",
        "Chrome",
        "nisha.tok",
        "nisha@123",
        "success"
      ],
      "line": 20,
      "id": "logging-in-rediffmail;;;2"
    },
    {
      "cells": [
        "Y",
        "Chrome",
        "xxxx",
        "yyyy",
        "failure"
      ],
      "line": 21,
      "id": "logging-in-rediffmail;;;3"
    },
    {
      "cells": [
        "N",
        "Chrome",
        "nisha.toki",
        "nisha@123",
        "success"
      ],
      "line": 22,
      "id": "logging-in-rediffmail;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "logging-in-rediffmail;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I go to \"LoginURL\" on \"Chrome\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"SignIn_xpath\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Email_xpath\" as \"nisha.tok\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pass_xpath\" as \"nisha@123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I uncheck remember me \"remembercheck_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"GoBtn_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The login should be \"success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "Login.runmode_is(String)"
});
formatter.result({
  "duration": 241355332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "Login.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 16309296003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn_xpath",
      "offset": 12
    }
  ],
  "location": "Login.i_click_on_on_homepage(String)"
});
formatter.result({
  "duration": 7668052544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email_xpath",
      "offset": 9
    },
    {
      "val": "nisha.tok",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "duration": 222391525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass_xpath",
      "offset": 9
    },
    {
      "val": "nisha@123",
      "offset": 25
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "duration": 172118876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remembercheck_xpath",
      "offset": 23
    }
  ],
  "location": "Login.i_uncheck_remember_me(String)"
});
formatter.result({
  "duration": 191331149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GoBtn_xpath",
      "offset": 12
    }
  ],
  "location": "Login.i_click_on(String)"
});
formatter.result({
  "duration": 6359986897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 21
    }
  ],
  "location": "Login.the_login_should_be(String)"
});
formatter.result({
  "duration": 5104250905,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[success]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.Login.the_login_should_be(Login.java:84)\r\n\tat ✽.Then The login should be \"success\"(resources/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "logging-in-rediffmail;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I go to \"LoginURL\" on \"Chrome\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"SignIn_xpath\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Email_xpath\" as \"xxxx\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pass_xpath\" as \"yyyy\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I uncheck remember me \"remembercheck_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"GoBtn_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The login should be \"failure\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "Login.runmode_is(String)"
});
formatter.result({
  "duration": 92800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "Login.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 2011034708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn_xpath",
      "offset": 12
    }
  ],
  "location": "Login.i_click_on_on_homepage(String)"
});
formatter.result({
  "duration": 6942006518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email_xpath",
      "offset": 9
    },
    {
      "val": "xxxx",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "duration": 137893018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass_xpath",
      "offset": 9
    },
    {
      "val": "yyyy",
      "offset": 25
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "duration": 133056272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "remembercheck_xpath",
      "offset": 23
    }
  ],
  "location": "Login.i_uncheck_remember_me(String)"
});
formatter.result({
  "duration": 162540750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GoBtn_xpath",
      "offset": 12
    }
  ],
  "location": "Login.i_click_on(String)"
});
formatter.result({
  "duration": 5213239341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 21
    }
  ],
  "location": "Login.the_login_should_be(String)"
});
formatter.result({
  "duration": 5032753879,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "logging-in-rediffmail;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Runmode is \"N\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I go to \"LoginURL\" on \"Chrome\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on \"SignIn_xpath\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Email_xpath\" as \"nisha.toki\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Pass_xpath\" as \"nisha@123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I uncheck remember me \"remembercheck_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"GoBtn_xpath\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The login should be \"success\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "Login.runmode_is(String)"
});
formatter.result({
  "duration": 3774458,
  "error_message": "cucumber.api.PendingException: Skipping the test as runmode is N\r\n\tat stepDefinitions.Login.runmode_is(Login.java:23)\r\n\tat ✽.Given Runmode is \"N\"(resources/Login.feature:9)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 23
    }
  ],
  "location": "Login.i_go_to_on(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn_xpath",
      "offset": 12
    }
  ],
  "location": "Login.i_click_on_on_homepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email_xpath",
      "offset": 9
    },
    {
      "val": "nisha.toki",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass_xpath",
      "offset": 9
    },
    {
      "val": "nisha@123",
      "offset": 25
    }
  ],
  "location": "Login.i_enter_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "remembercheck_xpath",
      "offset": 23
    }
  ],
  "location": "Login.i_uncheck_remember_me(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "GoBtn_xpath",
      "offset": 12
    }
  ],
  "location": "Login.i_click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 21
    }
  ],
  "location": "Login.the_login_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
});