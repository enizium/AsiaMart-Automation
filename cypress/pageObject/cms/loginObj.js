import {
    Login
} from "../../page/cms/login"
import {
    CMSPage
} from "../../page/cms/cmspage"

const loginPage = new Login()
const cmspage = new CMSPage()

function getCurrentUrl() {
    return Cypress.env(Cypress.env("backEndURL")).url;
}

export function backEndLogin() {
    cy.visit(getCurrentUrl());
}

export function cmsLogin(admindata) {
    loginPage.loginAdmin(admindata)

}

export function createJson() {
    cy.writeFile("cypress/fixtures/allProduct.json", "")
}

export function writeOnJsonFile() {
    var cmsurl = getCurrentUrl()
    cy.log(cmsurl)
    cy.request(cmsurl + '/test?type=product&id=').then((response) => {
        cy.writeFile('cypress/fixtures/allProduct.json', response.body)
    })
}
export function extractActiveProduct() {

    cy.readFile('cypress/fixtures/allProduct.json').then((data) => {

        var newdata = data.filter(function (item) {
            return item.status
        })
        cy.writeFile("cypress/fixtures/activeProduct.json", newdata)
    });
}

export function extractInactiveProduct() {
    cy.readFile('cypress/fixtures/allProduct.json').then((data) => {

        var newdata = data.filter(function (item) {
            return (!item.status)
        })
        cy.writeFile("cypress/fixtures/inactiveProduct.json", newdata)
    });
}

export function coupons() {
    var cmsurl = getCurrentUrl()
    cy.log(cmsurl)
    cy.request(cmsurl + '/test?type=coupon&id=').then((response) => {
        cy.writeFile('cypress/fixtures/coupons.json', response.body)
    })
}
export function extractActiveCoupon() {

    cy.readFile('cypress/fixtures/coupons.json').then((data) => {

        var newdata = data.filter(function (item) {
            return item.status
        })
        cy.writeFile("cypress/fixtures/activeCoupons.json", newdata)
    });
}