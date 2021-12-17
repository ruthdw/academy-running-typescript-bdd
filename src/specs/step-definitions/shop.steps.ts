import {DataTable} from '@cucumber/cucumber'
import {Customer, Catalogue} from "../../main/shop";
import {defineFeature, loadFeature} from "jest-cucumber";
import {mock} from "jest-mock-extended";

const feature = loadFeature('./src/specs/features/shop.feature')

defineFeature(feature, test => {

    let customer
    let catalogue = [
        {
            id: 10001,
            name: 'Lord of the Rings',
            price: '£10.00',
            rating : null
        },
        {
            id: 10002,
            name: 'The Hobbit',
            price: '£5.00',
            rating : null
        },
        {
            id: 20001,
            name: 'Game of Thrones',
            price: '£9.00',
            rating : 18
        },
        {
            id: 20110,
            name: 'Breaking Bad',
            price: '£7.00',
            rating : 18
        }
    ]

    test("A 12 year old boy is using our services", ({ given, and, when, then}) => {
        given("a 12 year old customer has logged in", () => {
            customer = new Customer(12);
        })
        when("the products are displayed", () => {
            Catalogue.display();
        })
        then("only products with a classication of 12A or below are displayed", () => {

        })
    })
})