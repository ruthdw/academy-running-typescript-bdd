import { Customer, Catalogue } from "../main/shop";
import { testCatalogue } from "./data/catalogue"

describe('Catalogue', () => {

  let catalogue = new Catalogue(testCatalogue)

  it("can filter items by customer by age", () => {
    let customer = new Customer(18);

    const actual = catalogue.search(customer);

    expect(actual).toEqual(testCatalogue);
  })
})
