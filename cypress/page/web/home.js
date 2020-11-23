export class Home {
    login() {
        //cy.get('.my-account-container > :nth-child(1) > [href="https://uat.ordering-asianmart.ekbana.net/login"]').click()
        cy.xpath("//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[1]/a[1]").click()
    }
    signup(){
        cy.xpath("//a[contains(text(),'Sign Up')]").click()
    }
    cartAmount() {
        cy.get('.cart-total-amunt').click()
    }
    cartItem() {
        return cy.get('.cart-total').then(count => {
            return count.text()
        })
        //or 
        //return Cypress.$('.cart-total').text()
    }
    cart() {
        cy.get('.my-account-container > :nth-child(2) > a').click()
    }
    checkout() {
        cy.get('.my-account-container > :nth-child(4) > a').click()
    }
    searchBox(newdata) {
        cy.get('#search-placeholder').type(newdata)
    }
    searchButton() {
        cy.get('.search-btn > button').click()
    }
    addToCart() {
        cy.get('.add-to-cart').click()
    }
    quantity() {
        cy.get('.number-input > input').type("2")
    }
    moduleAddToCart() {
        cy.get('.cart-quantity > .add-to-cart').click()
    }
    flushCart() {
        cy.get('.flush').click({
            force: true
        })
    }
    confirmDeleteCart() {
        cy.xpath('//*[@id="confirm-modal-yes"]').click({
            force: true
        })
    }

    myAccount() {
        cy.get('.my-account-container > :nth-child(1) > a').click()
    }
}