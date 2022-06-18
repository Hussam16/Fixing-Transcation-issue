/// <reference types="cypress" />

context('SQL SERVER', () => {
    
    it('SELECT', () => {
  
      const sql = 'select count(id) from invoice';
      
  
      cy.sqlServer(sql).should(res=>{console.log(res)})
  
  
    })
  
    })