/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import productsPage from '../pages/productsPage';

describe('add products to cart test suite', () => {

    it('add a product to cart test', () => {
        cy.get('.post-21 > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').should('be.visible');
        productsPage.getFirstAddToCartBtn().click();
        cy.get('.post-25 > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').should('be.visible');
        productsPage.getSecondAddToCartBtn().click();
        cy.contains('2 items').should('be.visible');
        productsPage.getViewShoppingCart().click();
        cy.contains('Cart').should('be.visible');
        productsPage.getCheckoutBtn().click();
        cy.contains('Checkout').should('be.visible');
        productsPage.getFirstName().type(faker.person.firstName(), {delay: 0});
        productsPage.getLastName().type(faker.person.lastName(), {delay: 0});
        productsPage.getBillingCompany().type(faker.company.name(), {delay: 0});  //faker.company.bs()
        productsPage.getBillingCountry().click();
        productsPage.getTypeBillingCountry().type('Romania', {delay: 0}).type('{enter}');
        productsPage.getBillingAddress1().type(faker.location.streetAddress(), {delay: 0});
        productsPage.getBillingAddress2().type(faker.location.buildingNumber(), {delay: 0});
        productsPage.getBillingCity().type(faker.location.city(), {delay: 0});
        productsPage.getBillingState().click();
        productsPage.getTypeBillingState().type('Iasi', {delay: 0}).type('{enter}');
        productsPage.getBillingPostalCode().type(faker.location.zipCode(), {delay: 0});
        productsPage.getBillingPhone().type(faker.phone.number('501-###-####'), {delay: 0});
        productsPage.getBillingEmail().type(faker.internet.exampleEmail(), {delay: 0});
        productsPage.getCheckboxClick().click();
        productsPage.getOrderComments().type(faker.string.alphanumeric(), {delay: 0});
        //cy.wait(6000);
        productsPage.getPlaceOrderBtn().click();



       // cy.intercept({
         // method: "POST",
         // url: "http://ecommerce.test.k6.io/?wc-ajax=checkout"
       // }).as('getCompleteOrderAPI');
  
      //  cy.get('h1[class="entry-title"]').should('be.visible');
  
       // cy.wait('@getCompleteOrderAPI').its("response.statusCode").should("eq", 200);
        
        cy.contains('Order received Thank you. Your order has been received.').should('be.visible');
    });
  });
