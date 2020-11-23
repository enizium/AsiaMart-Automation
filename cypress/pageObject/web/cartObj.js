import {
    Cart
} from "../../page/web/cart"
import {
    Home
} from "../../page/web/home"

const cartPage = new Cart()
const applycoupon = Cypress.env("mode").coupon

const home = new Home()

export function cart() {
    cartPage.cart()


    home.cartItem().then(count => {
        cy.log(count)
        if (count == 0) {
            cartPage.goToHomepage()
            //reading and comparing button text
            // cartPage.goToHomepage().then((textElements) => {
            //     cy.contains('Go To Homepage', textElements)
            //     var msg = textElements.text()
            //     cy.log(msg)
            //     cy.wait(2000)
            //     if ("Go To Homepage" == msg) {
            //         cartPage.goToHomepage().click()
            //     }
            // })
            
            // cartPage.gotHomePageTextBtn().then((text1) =>{
            //     cy.log(text1.text())

            // })
            // for (i=0; i<5; i++){
                //if (var i = = 2){
                 //   exit(0)
             //   }
               // 
            //
            // }



        } else {
            cartPage.decreaseQuantity()
            cartPage.increaseQuantity()

            //cart item count and delete 
            deleteItem()

            //apply coupon
            if (applycoupon) {
                couponApply()
            }
            cartPage.proceedToCheckoutBtn()
        }
    })

    function couponApply() {

        cy.readFile('cypress/fixtures/activeCoupons.json').then((data) => {
            var coupon = data[0].code
            cy.log(coupon)
            cartPage.couponCode(coupon)
            cartPage.applyCouponBtn()
            cy.get(':nth-child(4) > .alert > p').then(($msg) => {
                cy.log($msg.text())
            })
        })
    }

    function deleteItem() {
        cartPage.cartItemCount().then((count) => {
            var countItem = count.children().length
            cy.log(countItem)
            if (countItem >= 2) {
                cartPage.deleteBtn()
                cy.get(':nth-child(4) > .alert').then(($data) => {
                    cy.log($data.text())
                });
            }
        })
    }
}