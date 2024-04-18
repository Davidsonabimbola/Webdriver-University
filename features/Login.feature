@Login
Feature: webdriveruniversity - Login Page

    # Background: Pre-condition


    Scenario Outline: Validate valid and invalid login credentials
        Given I navigate to the WebdriverUniversity homepage
        When I click on the login portal button
        And I type a username <username>
        And I type a password <password>
        And I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText   |
            | webdriver | webdriver123 | validation suceeded |
            | webdriver | password123  | validation failed   |


# Scenario:  Valid login credentials
#     Given I navigate to the WebdriverUniversity homepage
#     When I click on the login portal button
#     And I type a username 'webdriver'
#     And I type a password 'webdriver123'
#     And I click on the login button
#     Then I should be presented with an alert box which contains text 'validation suceeded'