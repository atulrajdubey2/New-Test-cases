describe('Login Test', () => {
    it('should login successfully', () => {
      cy.visit('https://uat-flexc.azurewebsites.net/auth/signin') 
      //cy.viewport(1366, 768);
     //cy.visit('https://www.flexc.work/')
     // cy.get('button[aria-label="Toggle navigation"]').click
      //cy.get('a[class="btn btn-link"]' , { hidden: true }).click
      cy.get('#username').type('fake@email.com')
      //cy.get('#username').click
      //cy.get('#username').type('prasoon.gupta@flexc.work') 
      //cy.get('#password').type('Zaq12wsx') 
      //cy.get('button[type="submit"]').click()  
      
      
    })
  })
  