class registerPage {
    getMyAccountBtn() {
        return cy.get('.nav-menu > .page-item-9 > a');
    }
    
    getEmail(){
        return cy.get('#reg_email');
    }

    getRegisterBtn(){
        return cy.get('.woocommerce-Button');
    }

    getUpdateAndEditLinkBtn(){
        return cy.get(':nth-child(3) > [href="http://ecommerce.test.k6.io/my-account/edit-account/"]');
    }

    getFirstName(){
        return cy.get('#account_first_name');
    }

    getLastName(){
        return cy.get('#account_last_name');
    }

    getAccountDisplayName(){
        return cy.get('#account_display_name');
    }

    getSaveChangesBtn(){
        return cy.get('.woocommerce-Button');
    }

}

export default new registerPage();
