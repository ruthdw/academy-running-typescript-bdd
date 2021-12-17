import { Customer, Catalogue, CatalogueItem } from "../../main/shop";
import { defineFeature, loadFeature } from "jest-cucumber";
import { testCatalogue } from "../../test/data/catalogue";

const feature = loadFeature('./src/specs/features/shop.feature')

defineFeature(feature, test => {

  let customer: Customer
  let catalogue = new Catalogue(testCatalogue)

  let searchResult: CatalogueItem[]

  test("A 12 year old boy is using our services", ({ given, when, then }) => {
    given("a 12 year old customer has logged in", () => {
      customer = new Customer(12);
    })
    when("the products are displayed", () => {
      searchResult = catalogue.search(customer);
    })
    then("only products with a classication of 12A or below are displayed", () => {
      expect(searchResult).toEqual([
        {
          id: 10001,
          name: 'Lord of the Rings',
          price: '£10.00'
        },
        {
          id: 10002,
          name: 'The Hobbit',
          price: '£5.00'
        },
        {
          id: 20002,
          name: 'Lion King',
          price: '£9.00',
          rating: 'U'
        },
      ])
    })
  });

  test("A 18 year old boy is using our services", ({ given, when, then }) => {
    given("a 18 year old customer has logged in", () => {
      customer = new Customer(18);
    })
    when("the products are displayed", () => {
      searchResult = catalogue.search(customer);
    })
    then("all products are displayed", () => {
      expect(searchResult).toEqual(testCatalogue)
    })
  });


})
