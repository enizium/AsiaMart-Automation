export class Login {

    postLogin(userdata) {
        cy.get('#email').type(userdata.email)
        cy.get('#password').type(userdata.password)
        cy.get('.button').click()
    }
    message(){
         return cy.get('.alert > p')
    }
}