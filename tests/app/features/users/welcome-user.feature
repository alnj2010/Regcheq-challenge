Feature: Welcome User
  In order to welcome admins to regcheq
  As a admin user
  I want to receive a welcome message

  Scenario: A valid admin user
    Given I send a POST request to "/user/welcome" with body:
    """
    {
      "name": "admin",
      "password": "admin"
    }
    """
    Then the response status code should be 200
    And the response should be:
    """
    {
      "message": "Welcome to Regcheq Admin"
    }
    """

  Scenario: A invalid admin user
    Given I send a POST request to "/user/welcome" with body:
    """
    {
      "name": "abraham",
      "password": "123456"
    }
    """
    Then the response status code should be 401
    And the response should have a non-empty

  Scenario: A invalid admin user
    Given I send a POST request to "/user/welcome" with body:
    """
    {
      "name": 2,
      "password": "123456"
    }
    """
    Then the response status code should be 422
