Feature: Retrive User
  In order to know users in the system
  As client
  I want to retrive a user by id

  Scenario: get existing user
    Given I send a GET request to "/user/1"
    Then the response status code should be 200
    And the response should be:
      """
      {
        "id": 1,
        "name": "Abraham",
        "lastname": "Navarro"
      }
      """

  Scenario: get nonexistent user
    Given I send a GET request to "/user/4"
    Then the response status code should be 404
    And the response should be:
      """
      {
        "errorMsg": "user not found"
      }
      """
