describe('Yumi E2E Checkout Test', () => {
  it('Follows Checkout Process', () => {

// Visit Yumi Homepage
  	//cy.visit('https://helloyumi.com')
  	//cy.wait(1000)
// Visit Checkout Page
    cy.visit('https://helloyumi.com/checkout')
    //cy.wait(500)

//Complete Step 1
    cy.get('#email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

    cy.get('#birthday_month')
      .type('01')
      .should('have.value', '01')

  	cy.get('#birthday_day')
  	  .type('01')
  	  .should('have.value', '01')

  	cy.get('#birthday_year')
  	  .type('21')
  	  .should('have.value', '2021')

  	cy.get('#zip')
  	  .type('90291')
  	  .should('have.value', '90291')

  	cy.get('div:nth-child(2) div.sc-iwsKbI.sc-gZMcBi.sc-1__StyledRow-sc-1b7m8kj-0.lncVDA:nth-child(4) form.sc-hMqMXs.hDONQd div.sc-bdVaJa.ButtonContainer-sc-4fvoyn-0.iEIOrU:nth-child(5) > button.sc-jKJlTe.sc-eNQAEJ.bycQZf').click()


// Compelete Step 2
  	cy.get('div:nth-child(2) div.sc-iwsKbI.sc-gZMcBi.sc-2__StyledRow-sc-1okcyqb-2.iIZpTN:nth-child(4) div.sc-bdVaJa.cUqBcR div.sc-bdVaJa.ButtonContainer-sc-4fvoyn-0.iEIOrU:nth-child(4) > button.sc-jKJlTe.sc-eNQAEJ.gRqZvc').click()
  	
// Complete Step 3 
	cy.get(('div.sc-iwsKbI.sc-gZMcBi.sc-3__StyledRow-sc-1w08tfn-2.hZcHyJ:nth-child(4) div.sc-bdVaJa.exljSW:nth-child(2) div:nth-child(2) div.sc-iwsKbI.sc-gZMcBi.kWOHtc div.sc-bdVaJa.juPgpI:nth-child(2) div.sc-bdVaJa.ButtonContainer-sc-4fvoyn-0.iEIOrU > button.sc-jKJlTe.sc-eNQAEJ.bWgulz')).click()

//Fill out fields of Step 4
	cy.get('#address_line1') 
	  .type('1234 Fake St.')
      .should('have.value', '1234 Fake St.')

	cy.get('#address_line2') 
	  .type('Apt. 123')
      .should('have.value', 'Apt. 123')

   	cy.get('#address_city') 
	  .type('Santa Monica')	
      .should('have.value', 'Santa Monica')

    cy.get('.sc-dVhcbM').select('CA')

    cy.get('#address_zip')
      .type('90291')
      .should('have.value', '90291')

    cy.get('#phone')
      .type('413555555')
      .should('have.value', '413555555')

    cy.get('[name="cardnumber"]').type('4242424242424242')
    cy.get('[name="exp-date"]').type('1232')
    cy.get('[name="cvc"]').type('987')

//Final Event For Clicking Place Order
	cy.get('div:nth-child(2) form.sc-hMqMXs.sc-kEYyzF.hHaAVl.sc-4__Container-sc-5dg293-0.ilheHz:nth-child(5) div.sc-bdVaJa.sc-4__Section-sc-5dg293-1.sc-4__PaymentContainer-sc-5dg293-2.sc-4__ButtonContainer-sc-5dg293-3.eMOkkA:nth-child(9) div.sc-bdVaJa.hPHQBc > button.sc-jKJlTe.sc-eNQAEJ.gnbHHx').click()




  })
})