export class Customer {
  constructor(age: number) {
    this.age = age;
  }

  public age: number;

}

export class Catalogue {

  constructor(items: CatalogueItem[]) {
    this.items = items;
  };

  public items: CatalogueItem[]

  public search(customer: Customer): CatalogueItem[] {
    return this.items.filter((item) => {
      if (item.rating) {
        return ratingToMinimumAge[item.rating] <= customer.age;
      }
      return true;
    });
  }

}

export interface CatalogueItem {
  id: number,
  name: string,
  price: string,
  rating?: Rating
}

export type Rating = 'U' | 'PG' | '12A' | '12' | '15' | '18' 

const ratingToMinimumAge = {
  'U': 0,
  'PG': 0,
  '12A' : 12,
  '12': 12,
  '15': 15,
  '18': 18
}
