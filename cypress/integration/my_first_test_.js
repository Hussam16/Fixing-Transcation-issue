
/// <reference types="cypress" />
require('cypress-xpath')
const testData =[


  {
    "A": "Ø§Ù…ÙŠØ±Ù‡ Ø¹Ø§Ø¯Ù„ Ø¹Ø¨Ø¯Ø§Ù„Ø­Ù„ÙŠÙ… Ù…Ø£Ù…ÙˆÙ†",
    "B": "52051115",
    "C": "1",
    "D": "c6fd0fb3-ef6a-48e9-83d3-1b8029d10312",
    "E": "TX-18094073227",
    "F": "Success",
    "G": "false",
    "H": "44723"
  }
 ]

  
  testData.forEach((credentials) => {

    it('Billing Login ',function(){

        cy.visit('http://172.17.1.2:8086/')
      
        cy.get('#_58_login').clear().type('system.admin@palmhills.com')
      
        cy.get('#_58_password').type('123456')
      
        cy.get('.aui-button-input').click()
      
        cy.visit('http://172.17.1.2:8086/web/guest/payments')
      
        cy.get('#A1404\\:paymentsf1\\:meterserial').type(credentials.B)
      
        cy.get('.ui-button-text').click()
      
        cy.get('.ui-radiobutton-box').click()
      
        cy.get('#A1404\\:prepaymentf2\\:nextbtn > .ui-button-text').click()
      
        cy.get('#A1404\\:paymentsf1\\:j_idt53\\:0\\:PostpaidBillingTable\\:0\\:postPaidPaid').type(credentials.C)
      
        cy.get('#A1404\\:prepaymentf2\\:nextbtn > .ui-button-text').click()
      
         cy.get(':nth-child(1) > .ui-radiobutton > .ui-radiobutton-box').click()
      
        cy.get('.ui-selectonemenu-items > :nth-child(3)').click({ force: true })
      
               
        cy.xpath("//*[@class='ui-button-text' and contains(text(),'Next')]").click()
        cy.xpath("//*[@class='ui-button-text' and contains(text(),'Next')]").click({force: true})
        cy.wait(2000)
      
      
       
      
        
        
      
      
      
      })
  });