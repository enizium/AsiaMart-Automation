import {
    Home
} from "../../page/web/home"
import {
    Profile
} from "../../page/web/profile"

//defining faker from 'faker'
const faker = require('faker')

const homepage = new Home()
const profilepage = new Profile()

function getFakeData() {
    var title = faker.address.streetName()
    cy.log(title)
    return title
}

export function profileUpdate() {
    homepage.myAccount()
    profilepage.accountDetails()
    profilepage.firstName()
    profilepage.lastName()
    profilepage.phone()
    profilepage.profileSaveButton()

}

export function viewOrderHistory() {
    homepage.myAccount()
    profilepage.orderHistory()
    profilepage.viewOrderHistory()
    profilepage.closeOrderHistory()
}

export function addMyAddress() {
    var title = getFakeData();

    checkAddress()
    cy.get('div[class="deleivery-address"]').then((data) => {
        var length = data[0].children.length
        cy.log("Number of Address = " + length)

        if (length == 3) {
            deleteAddress()
            profilepage.addAddressButton()
            cy.wait(2000)
            profilepage.addressTitle(title)
            profilepage.longitude()
            profilepage.latitude()
            profilepage.addressSaveBtn()
            cy.get('.alert > p').then(($data) => {
                var message = $data.text()
                cy.log(message)
            });

        } else {
            profilepage.addAddressButton()
            profilepage.addressTitle(title)
            profilepage.longitude()
            profilepage.latitude()
            profilepage.addressSaveBtn()
            cy.get('.alert > p').then(($data) => {
                var message = $data.text()
                cy.log(message)
            });
        }
    });

}

export function checkAddress() {
    homepage.myAccount()
    profilepage.myAddress()
}

export function deleteAddress() {
    profilepage.deleteAddressButton()
}
export function editAddress() {
    let title = getFakeData();

    checkAddress()
    cy.get('div[class="deleivery-address"]').then((data) => {
        var length
        length = data[0].children.length
        cy.log("There is no Delivery Address")
        if (length > 0) {
            profilepage.editAddressButton()
            profilepage.editDeliveryTitle(title)
            //profilepage.editLaltitude()
            // profilepage.editLongitude()
            profilepage.editSubmitBtn()
        }
    });
}