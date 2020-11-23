export class CMSPage {
    testing() {
        cy.get(':nth-child(53) > a').click()
    }
    submitBtn() {
        cy.get('.col-md-6 > .btn').click()
    }
}