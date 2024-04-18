Feature: WebdriverUniversity- Contact Us Page

  Scenario: Valid Contact Us Form Submission
    Given I navigate to the WebdriverUniversity homepage
    When I click on the contact us button
    And I type a first name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a successful contact us submission message
  @specific
  Scenario: Valid Contact us form submission-Using Specific data
    Given I navigate to the WebdriverUniversity homepage
    When I click on the contact us button
    And I type a specific first name "Sarah"
    And I type a specific last name "Woods"
    And I enter a specific email address "woods_saro@yahoo.com"
    And I type a specific word "This is a new day" and number 6788 wthin the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message


  @regression
  Scenario Outline: Validate contact us page
    Given I navigate to the WebdriverUniversity homepage
    When I click on the contact us button
    And I type a first name <firstName> and a last name '<lastName>'
    And I type a '<emailAddress>' and a comment '<comment>'
    And I click on the submit button
    Then I should be presented with header text '<output>'

    Examples:
      | firstName | lastName | emailAddress      | comment              | output                      |
      | John      | Stevens  | Jtomsea@yahoo.com | Hello there          | Thank You for your Message! |
      | Mia       | Carter   | car_sea@yahoo.com | Hello there          | Thank You for your Message! |
      | Frank     | Bonkers  | gofrank@yahoo.com | Adventure Enthusiast | Thank You for your Message! |

# Scenario: Validate valid and invalid login credentials
#   Given I navigate to the WebdriverUniversity homepage
#   When I click on the login portal button
#   And I type a username <username>
#   And I type a password <password>
#   And I click on the login button
#   Then I should be presented with an alert box which contains text '<expectedAlertText>'

#   Examples:
#     | username  | password     | expectedAlertText   |
#     | webdriver | webdriver123 | validation suceeded |
#     | webdriver | password123  | validation failed   |

# | Frank     | Bonkers  | gofrank@.com      | Adventure Enthusiast |  Error: Invalid email address
