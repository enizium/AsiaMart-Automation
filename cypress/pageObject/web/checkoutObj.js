import {
    Checkout
} from "../../page/web/checkout"
const checkoutPage = new Checkout()
export function checkout() {
    checkoutPage.checkout()
    checkoutPage.placeOrderBtn()

}