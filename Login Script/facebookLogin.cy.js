describe('Login Test', () => {
    it('should login successfully', () => {
      cy.visit('https://www.facebook.com/login/') 
      
     cy.get('#email').type('atul443512gmail.com') 
      cy.get('#pass').type('yrd') 
      cy.get('#loginbutton').click()


     

     //cy.visit('https://test-flexc.azurewebsites.net/auth/signin');
     //cy.viewport(1366, 768);

//cy.get('.needs-validation').click();

//cy.get('.btn-link').click( { multiple: true });



      
    })
  })
  