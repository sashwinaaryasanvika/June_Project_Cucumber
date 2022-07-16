$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Adactine Ticket Booking",
  "description": "",
  "id": "adactine-ticket-booking",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Feature",
  "description": "",
  "id": "adactine-ticket-booking;login-feature",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is enter the \"\u003cusername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User is enter the \"\u003cpassword\u003e\" in pasword field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is enter the Submit Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "adactine-ticket-booking;login-feature;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "adactine-ticket-booking;login-feature;;1"
    },
    {
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 10,
      "id": "adactine-ticket-booking;login-feature;;2"
    },
    {
      "cells": [
        "arvind19",
        "12345678"
      ],
      "line": 11,
      "id": "adactine-ticket-booking;login-feature;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12397900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login Feature",
  "description": "",
  "id": "adactine-ticket-booking;login-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is enter the \"admin\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User is enter the \"admin123\" in pasword field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is enter the Submit Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginData.user_is_Launch_the_application()"
});
formatter.result({
  "duration": 2557447500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 159201200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_pasword_field(String)"
});
formatter.result({
  "duration": 103939500,
  "status": "passed"
});
formatter.match({
  "location": "LoginData.user_is_enter_the_Submit_Button()"
});
formatter.result({
  "duration": 286141000,
  "status": "passed"
});
formatter.after({
  "duration": 148000,
  "status": "passed"
});
formatter.before({
  "duration": 134700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Feature",
  "description": "",
  "id": "adactine-ticket-booking;login-feature;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is Launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is enter the \"arvind19\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User is enter the \"12345678\" in pasword field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User is enter the Submit Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginData.user_is_Launch_the_application()"
});
formatter.result({
  "duration": 202523500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arvind19",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 121110100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 19
    }
  ],
  "location": "LoginData.user_is_enter_the_in_pasword_field(String)"
});
formatter.result({
  "duration": 92776900,
  "status": "passed"
});
formatter.match({
  "location": "LoginData.user_is_enter_the_Submit_Button()"
});
formatter.result({
  "duration": 581876000,
  "status": "passed"
});
formatter.after({
  "duration": 149700,
  "status": "passed"
});
formatter.before({
  "duration": 1497000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Hotel",
  "description": "",
  "id": "adactine-ticket-booking;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user is select the location",
  "keyword": "When "
});
formatter.match({
  "location": "LoginData.user_is_select_the_location()"
});
formatter.result({
  "duration": 70300,
  "status": "passed"
});
formatter.after({
  "duration": 388300,
  "status": "passed"
});
formatter.before({
  "duration": 76900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Payment",
  "description": "",
  "id": "adactine-ticket-booking;payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user is select the Bank",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 91600,
  "status": "passed"
});
});