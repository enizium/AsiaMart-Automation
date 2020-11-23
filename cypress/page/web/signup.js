export class Signup{

    register(register){
        cy.get('#first_name').type(register.firstname)
        cy.get('#last_name').type(register.lastname)
        cy.get('#mobile_number').type(register.phone)
        cy.get('#email').type(register.email)
        cy.get('[name="password"]').type(register.passowrd)
        cy.get('[name="password_confirmation"]').type(register.passowrd)
        cy.get('.button').click()
 
    }
}