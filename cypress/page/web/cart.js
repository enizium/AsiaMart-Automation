export class Cart {
    cart() {
        cy.get('.my-account-container > :nth-child(2) > a').click()
    }
    increaseQuantity() {
        cy.get(':nth-child(1) > .plantmore-product-quantity > .number-input > .plus').click()
    }
    decreaseQuantity() {
        cy.get(':nth-child(1) > .plantmore-product-quantity > .number-input > .minus').click()
    }
    cartItemCount() {
        return cy.get('body > div.main-wrapper > div.main-content-wrap.section-ptb.cart-page > div > div > div > form > div.table-content.table-responsive > table > tbody')
    }
    deleteBtn() {

        cy.get(':nth-child(1) > .plantmore-product-remove > form > .btn').click()
    }
    couponCode(coupon) {
        cy.get('#coupon-code').type(coupon)
    }

    applyCouponBtn() {
        cy.get('#apply_coupon').click()
    }
    proceedToCheckoutBtn() {
        cy.get('.proceed-checkout-btn').click()
    }

    goToHomepage() {
        cy.get('.text-center > .btn').click()

    }
    gotHomePageTextBtn(){
       return cy.get('a.btn').should('have.text', 'Go To Homepage')
    }
}