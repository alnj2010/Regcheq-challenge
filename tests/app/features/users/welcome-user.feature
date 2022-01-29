Feature: Welcome User
  In order to welcome admins to regcheq
  As a admin user
  I want to receive a welcome message

  Scenario: A valid admin user
    Given I send a POST request to "/user/welcome" with body:
    """
    {
      "name": "admin",
      "key": "admin"
    }
    """
    Then the response status code should be 200
    And the response should be:
    """
    {
      "message": "welcome to Regcheq Admin"
    }
    """
