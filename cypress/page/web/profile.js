export class Profile {

    accountDetails() {
        cy.get(':nth-child(1) > .nav-link').click()
    }
    firstName() {
        cy.get('[name="first_name"]').clear().type("KOKLASS")
    }
    lastName() {
        cy.get('[name="last_name"]').clear().type("TEST")
    }
    phone() {
        cy.get('.form-control').clear().type("9843644360")
    }
    profileSaveButton() {
        cy.get('.button-box > .btn').click()
    }
    changePassword() {
        cy.get(':nth-child(3) > .nav-link').click()
    }
    oldPassword() {
        cy.get(':nth-child(3) > .nav-link').clear().type("123456")
    }
    newPassword() {
        cy.get('#newpassword').clear().type("1234564")
    }
    confirmPassword() {
        cy.get('#passwordconfirm').clear().type("123456")
    }
    passwordSaveButton() {
        cy.get('.button-box > .btn').click()
    }
    myAddress() {
        cy.get(':nth-child(4) > .nav-link').click()
    }
    addAddressButton() {
        cy.get('.view').click()
    }
    addressTitle(title) {
        //return cy.get('#myMapModal > .modal-dialog > .modal-content > form > [style="width: 97%;"] > .form-control').type(title)
        //cy.xpath('//*[@id="myMapModal"]/div/div/form/div[1]/input').type(title)
        cy.get(".modal-content .form-group input[name='title']:visible").type(title)
    }
    longitude() {
        cy.get('#map_longitude').type("83.18523455", {
            force: true
        })
    }
    latitude() {
        cy.get('#map_latitude').type("28.123456454", {
            force: true
        })
    }
    addressSaveBtn() {
        cy.get("#delivery-submit").then(elm => {
            elm.prop("disabled", false);
        });
        cy.get('#delivery-submit').click({
            force: true
        })
    }

    deleteAddressButton() {
        cy.xpath('//*[@id="address"]/div/div/div[1]/div[1]/div/form/button').click()
    }
    editAddressButton() {
        cy.get(':nth-child(1) > .edit-del > .open-address-modal > .fa').click()
    }
    editDeliveryTitle(title) {
        cy.get('.mx-sm-3#editDeliveryTitle').first().clear().type(title)
    }
    editLaltitude() {
        cy.get('#editmap_latitude').first().type("27.11111111", {
            force: true
        })
    }
    editLongitude() {
        cy.get('#editmap_longitude').first().type("83.22222222", {
            force: true
        })
    }
    editSubmitBtn() {
        cy.get('#edit-delivery-submit').first().click()
    }

    orderHistory() {
        cy.get(':nth-child(2) > .nav-link').click()
    }

    viewOrderHistory() {
        cy.get('.get-order-detail').first().click();

    }
    closeOrderHistory() {
        cy.get('.show#order-Modal .modal-footer button ').click()

    }




}