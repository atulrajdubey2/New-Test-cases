describe('Login Test', () => {
    it('should login successfully', () => {

cy.visit('https://test-flexc.azurewebsites.net/');
cy.viewport(1366, 768);
cy.get('.header-user-roles > img').click();
cy.get('#username').type('hr@atul.work');
cy.get('#password').type('Atul@44351');
cy.get('.mr-2:nth-child(6)').click();
cy.get('.needs-validation').submit();
cy.url().should('contains', 'https://test-flexc.azurewebsites.net/dashboard');
cy.url().should('contains', 'https://wchat.in.freshchat.com/widget/config_iframe.html');
cy.get('.wid-25').click();
cy.get('li:nth-child(3) > .dropdown-item').click();
cy.url().should('contains', 'https://test-flexc.azurewebsites.net/auth/signin');
cy.url().should('contains', 'https://wchat.in.freshchat.com/widget/config_iframe.html');
cy.get('#username').type('hr@atul.work');
cy.get('#password').type('Atul@44351');
})
})
