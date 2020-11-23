import {
    Home
} from "../../page/web/home"

const home = new Home()

export function addToCart() {

    home.cartItem().then(count => {
        cy.log(count)
        if (count == 0) {
            cy.readFile('cypress/fixtures/activeProduct.json').then((data) => {
                var newdata = data[0].title
                home.searchBox(newdata)
                cy.log(newdata)
            })
            home.searchButton()
            home.addToCart()
            cy.wait(1000)
            home.quantity()
            home.moduleAddToCart()
            cy.get('.alert > p').then(($data) => {
                var message = $data.text()
                cy.log(message)
            });

        } else if (count != 0) {
            flushCart()
            cy.get('.alert > p').then(($msg) => {
                var flushmessage = $msg.text()
                cy.log(flushmessage)
            });
            home.searchBox()
            home.searchButton()
            home.addToCart()
            cy.wait(1000)
            home.moduleAddToCart()
            cy.get('.alert > p').then(($data) => {
                var message = $data.text()
                cy.log(message)
            });
        }

    })

}
export function flushCart() {
    home.flushCart()
    home.confirmDeleteCart()
}