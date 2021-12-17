
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

    public search(customer: Customer): CatalogueItem[]{
        return [];
    }


}

export interface CatalogueItem {
    id : number,
    name: string,
    price: string,
    rating?: number
}
