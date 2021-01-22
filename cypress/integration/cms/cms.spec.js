import * as loginObj from "../../pageObject/cms/loginObj"

describe('system ', () => {
    before(() => {
        loginObj.backEndLogin()
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce("laravel_session_sewa");
    });

    var admindata = Cypress.env("backendCredential")
    var login = Cypress.env("mode").login
    if (login) {
        it(" user login ", () => {
            loginObj.cmsLogin(admindata)
        })
    }

    it('storing data from testing module', () => {
        //loginObj.createJson()
        loginObj.writeOnJsonFile()
        loginObj.extractActiveProduct()
        loginObj.extractInactiveProduct()
        loginObj.coupons();
        loginObj.extractActiveCoupon()
    })
})