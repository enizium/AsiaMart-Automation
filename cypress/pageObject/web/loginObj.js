import {
    Login
} from "../../page/web/login"
import {
    Home
} from "../../page/web/home"

const homepage = new Home()
const loginpage = new Login();

var userdata = Cypress.env("userdata");

function getCurrentUrl() {
    return Cypress.env(Cypress.env("FrontendURL")).url;
}

export function FrontEndLogin() {
    cy.visit(getCurrentUrl());
}

export function Logins() {
    homepage.login()

    loginpage.postLogin(userdata);
   // homepage.checkMyAccount().should('contain' , 'My Account').then(($data) =>{
        
    //     cy.log($data.text())
    //     Cypress.runner.stop()
      

    // })

}