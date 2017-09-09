Feature: Logging in Rediffmail
  
  In order to test mail
  As a user
  I want to login

  @login
  Scenario Outline: 
    Given Runmode is "<Runmode>"
    Given I go to "LoginURL" on "<browser>"
    When I click on "SignIn_xpath" on homepage
    And I enter "Email_xpath" as "<username>"
    And I enter "Pass_xpath" as "<password>"
    And I uncheck remember me "remembercheck_xpath"
    And I click on "GoBtn_xpath"
    Then The login should be "<expectedResult>"

    Examples: 
      | Runmode | browser | username   | password  | expectedResult |
      | Y       | Chrome  | nisha.toki | nisha@123 | success        |
      | Y       | Chrome  | nisha.tok  | nisha@123 | fail        |
      