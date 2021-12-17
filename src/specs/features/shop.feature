Feature: Customers can only purchase products within their age bracket

  Scenario:  A 12 year old boy is using our services
    Given a 12 year old customer has logged in
    When the products are displayed
    Then only products with a classication of 12A or below are displayed

  Scenario:  A 18 year old boy is using our services
    Given a 18 year old customer has logged in
    When the products are displayed
    Then all products are displayed
