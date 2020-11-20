$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Scenariooutline.feature");
formatter.feature({
  "line": 1,
  "name": "Login function validations",
  "description": "",
  "id": "login-function-validations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with data table",
  "description": "",
  "id": "login-function-validations;login-with-data-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As a user i can open any browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "As a user i can enter the \"https://admin-demo.nopcommerce.com/\" and go to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "As a user i can enter as \"\u003cuserName\u003e\" and password \"\u003cpassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Homepage title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "As a user i can click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Loginpage title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-function-validations;login-with-data-table;",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ],
      "line": 14,
      "id": "login-function-validations;login-with-data-table;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 15,
      "id": "login-function-validations;login-with-data-table;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 16,
      "id": "login-function-validations;login-with-data-table;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login with data table",
  "description": "",
  "id": "login-function-validations;login-with-data-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As a user i can open any browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "As a user i can enter the \"https://admin-demo.nopcommerce.com/\" and go to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "As a user i can enter as \"admin@yourstore.com\" and password \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Homepage title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "As a user i can click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Loginpage title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OutLineTestStepDef.as_a_user_i_can_open_any_browser()"
});
formatter.result({
  "duration": 6013640300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 27
    }
  ],
  "location": "OutLineTestStepDef.as_a_user_i_can_enter_the_and_go_to_the_login_page(String)"
});
formatter.result({
  "duration": 1928617900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 26
    },
    {
      "val": "admin",
      "offset": 61
    }
  ],
  "location": "OutLineTestStepDef.as_a_user_i_can_enter_as_and_password(String,String)"
});
formatter.result({
  "duration": 255941300,
  "status": "passed"
});
formatter.match({
  "location": "OutLineTestStepDef.click_on_login()"
});
formatter.result({
  "duration": 2361326400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 26
    }
  ],
  "location": "OutLineTestStepDef.homepage_title_should_be(String)"
});
formatter.result({
  "duration": 174713800,
  "status": "passed"
});
formatter.match({
  "location": "OutLineTestStepDef.as_a_user_i_can_click_on_logout_link()"
});
formatter.result({
  "duration": 1288637900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 27
    }
  ],
  "location": "OutLineTestStepDef.loginpage_title_should_be(String)"
});
formatter.result({
  "duration": 8505100,
  "status": "passed"
});
formatter.match({
  "location": "OutLineTestStepDef.close_the_browser()"
});
formatter.result({
  "duration": 1137187800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with data table",
  "description": "",
  "id": "login-function-validations;login-with-data-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As a user i can open any browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "As a user i can enter the \"https://admin-demo.nopcommerce.com/\" and go to the login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "As a user i can enter as \"admin@yourstore.com\" and password \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Homepage title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "As a user i can click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Loginpage title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OutLineTestStepDef.as_a_user_i_can_open_any_browser()"
});
formatter.result({
  "duration": 5318776400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 27
    }
  ],
  "location": "OutLineTestStepDef.as_a_user_i_can_enter_the_and_go_to_the_login_page(String)"
});
formatter.result({
  "duration": 1868075000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 26
    },
    {
      "val": "admin",
      "offset": 61
    }
  ],
  "location": "OutLineTestStepDef.as_a_user_i_can_enter_as_and_password(String,String)"
});
formatter.result({
  "duration": 222874200,
  "status": "passed"
});
formatter.match({
  "location": "OutLineTestStepDef.click_on_login()"
});
formatter.result({
  "duration": 2472917900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 26
    }
  ],
  "location": "OutLineTestStepDef.homepage_title_should_be(String)"
});
formatter.result({
  "duration": 106511800,
  "status": "passed"
});
formatter.match({
  "location": "OutLineTestStepDef.as_a_user_i_can_click_on_logout_link()"
});
formatter.result({
  "duration": 1423427700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 27
    }
  ],
  "location": "OutLineTestStepDef.loginpage_title_should_be(String)"
});
formatter.result({
  "duration": 10260700,
  "status": "passed"
});
formatter.match({
  "location": "OutLineTestStepDef.close_the_browser()"
});
formatter.result({
  "duration": 1110007900,
  "status": "passed"
});
});