Feature: Verifying Left Hand Side Mailbox links in rediffmail
  
  In order to verify different mailboxes in rediffmail
  As a tester
  I want to test mailbox links on LHS

  @MailMenus
  Scenario Outline: Verify the presence of different types of mail boxes
    Given I am logged in "<browser>"
    When all Mail categories are present
    |CategoryName|
    |WriteMail|
    |Inbox|
    |Bulk|
    |Junk|
    |Sent|
    |Trash|
    |Drafts|
    And I click on "<MailBoxElement>"
    Then The "<VerificationObject>" should be present

    Examples: 
      | browser | MailBoxElement | VerificationObject |
      | Chrome  | WriteMail      | NewMail_Vobject    |
      | Chrome  | Inbox          | Inbox_Vobject      |
      | Chrome  | Bulk           | Bulk_Vobject       |
      | Chrome  | Junk           | Junk_Vobject       |
      | Chrome  | Sent           | Sent_Vobject        |
      | Chrome  | Trash          | Trash_Vobject       |
      | Chrome  | Drafts         | Drafts_Vobject      |
