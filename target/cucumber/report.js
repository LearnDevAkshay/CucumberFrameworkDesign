$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for vegitable",
  "description": "",
  "id": "search-and-place-order-for-vegitable",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Serach for vegatble and validate",
  "description": "",
  "id": "search-and-place-order-for-vegitable;serach-for-vegatble-and-validate",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"Cucumber\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" result should be dispalyed",
  "keyword": "Then "
});
formatter.match({
  "location": "MystepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 4587899800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 16
    }
  ],
  "location": "MystepDefination.user_enter_the_in_search_box(String)"
});
formatter.result({
  "duration": 1235957200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MystepDefination.result_should_be_dispalyed(String)"
});
formatter.result({
  "duration": 26910600,
  "status": "passed"
});
});