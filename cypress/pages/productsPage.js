class productsPage {
    getFirstAddToCartBtn() {
        return cy.get('.post-21 > .button');
    }
    
    getSecondAddToCartBtn(){
        return cy.get('.post-25 > .button');
    }

    getViewShoppingCart(){
        return cy.get('.cart-contents');
    }

    getCheckoutBtn(){
        return cy.get('.checkout-button');
    }

    getFirstName(){
        return cy.get('#billing_first_name');
    }

    getLastName(){
        return cy.get('#billing_last_name');
    }

    getBillingCompany(){
        return cy.get('#billing_company');
    }

    getBillingCountry(){
        return cy.get('#select2-billing_country-container');
    }

    getTypeBillingCountry(){
        return  cy.get('.select2-search__field');
    }

    getBillingAddress1(){
        return cy.get('#billing_address_1');
    }

    getBillingAddress2(){
        return cy.get('#billing_address_2');
    }

    getBillingCity(){
        return cy.get('#billing_city');
    }

    getBillingState(){
        return cy.get('#select2-billing_state-container');
    }

    getTypeBillingState(){
        return cy.get('.select2-search__field');
    }

    getBillingPostalCode(){
        return cy.get('#billing_postcode');
    }

    getBillingPhone(){
        return cy.get('#billing_phone_field > label');
    }

    getBillingEmail(){
        return cy.get('#billing_email');
    }

    getCheckboxClick(){
        return cy.get('#createaccount');
    }

    getOrderComments(){
        return cy.get('#order_comments');
    }

    getPlaceOrderBtn(){
        return cy.get('#place_order');
    }

}

export default new productsPage();