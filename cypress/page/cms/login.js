export class Login {

    loginAdmin(admindata) {
        cy.get('.email-content > .form-control').type(admindata.username)
        cy.get('.password-content > .form-control').type(admindata.password)
        cy.get('.btn').click()
    }

}