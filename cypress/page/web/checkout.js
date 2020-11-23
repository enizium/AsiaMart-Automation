export class Checkout {
    checkout() {
        cy.get('.my-account-container > :nth-child(4) > a').click()

    }
    placeOrderBtn() {
        cy.get('.order-button-payment > input').click()
    }

}