/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { beforeEach } from 'mocha';
import registerPage from '../pages/registerPage';

describe('register new user test suite', () => {
    beforeEach('register the user', () => {
        registerPage.getMyAccountBtn().click();
        cy.contains('Register').should('be.visible');
    })

    it('register new user test', () => {
        registerPage.getEmail().type(faker.internet.email({firstName: 'Jane'}));
        registerPage.getRegisterBtn().click();
        cy.contains('Hello').should('be.visible');
    })

    it('try register new user using existing email test', () => {
        const emailAdress = "jane_ruecker85@hotmail.com";
        registerPage.getEmail().type(emailAdress);
        registerPage.getRegisterBtn().click();
        cy.contains('Error: An account is already registered with your email address. Please log in.').should('be.visible');
    })

    it.only('register new user, edit password and account details test', () => {
        registerPage.getEmail().type(faker.internet.email({firstName: 'Jane'}));
        registerPage.getRegisterBtn().click();
        cy.get('.entry-title').should('be.visible');
        registerPage.getUpdateAndEditLinkBtn().click();
        registerPage.getFirstName().type(faker.person.firstName());
        registerPage.getLastName().type(faker.person.firstName());
        registerPage.getAccountDisplayName().clear().type(faker.person.firstName());
        registerPage.getSaveChangesBtn().click();
        cy.contains('Account details changed successfully.').should('be.visible');
    })
  })