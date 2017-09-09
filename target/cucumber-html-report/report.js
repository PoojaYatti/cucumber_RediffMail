$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
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
  "duration": 720697851,
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
  "duration": 13478642888,
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
  "duration": 7917911903,
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
  "duration": 194724292,
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
  "duration": 150246880,
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
  "duration": 119263011,
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
  "duration": 2758914940,
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
  "duration": 5158313156,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[success]\u003e but was:\u003c[failure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.Login.the_login_should_be(Login.java:96)\r\n\tat ✽.Then The login should be \"success\"(Login.feature:16)\r\n",
  "status": "failed"
});
});