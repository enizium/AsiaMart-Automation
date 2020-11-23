import * as loginObj from "../../pageObject/web/loginObj"
import {
    Home
} from "../../page/web/home"

const home = new Home()

describe('system ', () => {
    before(() => {
        loginObj.FrontEndLogin()
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce("laravel_session_sewa");
    });

    var login = Cypress.env("mode").login
    if (login) {
        it(" user login ", () => {
            loginObj.Logins()
        })

        it("cart count", () => {
            home.cartItem().then(count => {
                cy.log(count)
            })
        })

    }

});