import * as loginObj from "../../pageObject/web/loginObj"
import * as addtocartObj from "../../pageObject/web/addtocartObj"
import * as profileObj from "../../pageObject/web/profileObj"
import * as cartObj from "../../pageObject/web/cartObj"
import * as checkoutObj from "../../pageObject/web/checkoutObj"

describe('Web ', () => {
    before(() => {
        loginObj.FrontEndLogin()
    })
    // afterEach(function() {
    //     if (this.currentTest.state === 'failed') {
    //       Cypress.runner.stop()
    //     }
    //   });
    beforeEach(() => {
        Cypress.Cookies.preserveOnce("laravel_session_sewa");
    });

    const login = Cypress.env("mode").login
    const addtocart = Cypress.env("mode").addtocart
    const profile = Cypress.env("mode").profile
    const orderhistory = Cypress.env("mode").orderhistory
    const addaddress = Cypress.env("mode").addaddress
    const editaddress = Cypress.env("mode").editaddress
    const cartpage = Cypress.env("mode").cartpage
    const checkout = Cypress.env("mode").checkout

    if (login) {
        it(" user login ", () => {
            loginObj.Logins()
        })
    }
    if (addtocart) {
        it(" search and add to cart", () => {
            addtocartObj.addToCart()

        })
    }
    if (cartpage) {
        it('change qty, delete and apply coupon in cart', () => {
            cartObj.cart()

        })

    }
    if (profile) {
        it('update profile', () => {

            profileObj.profileUpdate()

        });
    }
    if (orderhistory) {
        it('order history', () => {
            profileObj.viewOrderHistory()
        });
    }
    if (addaddress) {
        it('check and add address', () => {
            profileObj.addMyAddress()
        })
    }
    if (editaddress) {
        it('edit delivery address', () => {
            profileObj.editAddress()
        });
    }
    if (checkout) {
        it('checkout', () => {
            checkoutObj.checkout()
        });
    }
})