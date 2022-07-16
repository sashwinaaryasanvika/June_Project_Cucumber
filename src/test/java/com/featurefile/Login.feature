Feature: Adactine Ticket Booking

Scenario Outline: Login Feature
Given User is Launch the application
When User is enter the "<username>" in username field
And User is enter the "<password>" in pasword field
Then User is enter the Submit Button
Examples:
	|username|password|
	|admin|admin123|
	|arvind19|12345678|


Scenario: Search Hotel
When user is select the location


Scenario: Payment
When user is select the Bank









