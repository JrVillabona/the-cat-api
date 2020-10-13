/// <reference types="Cypress" />

describe('Rest API Test - The Cat API', () => {
	it('GET - List the Cat Breeds - Validate Headers', () => {
		cy.request({
			method: 'GET',
			url: '/breeds',
		}).as('breeds')
		cy.get('@breeds')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})

	it('POST - Create a vote - Validate Content', () => {
		cy.request({
			method: 'POST',
			url: '/votes',
			body: {
				image_id: 'asf2',
				sub_id: 'my-user-1234',
				value: 1,
			},
		}).as('votes')
		cy.get('@votes').its('body').should('include', { message: 'SUCCESS' })
	})

	it('GET - List the Categories - Validate Status Code', () => {
		cy.request('/categories').as('categories')
		cy.get('@categories').its('status').should('equal', 200)
	})

	it('GET - List the Cat Breeds - Validate Negative Status Code', () => {
		cy.request({
			method: 'GET',
			url: '/breedsy',
			failOnStatusCode: false,
		}).as('breeds')
		cy.get('@breeds').its('status').should('equal', 404)
	})

	it('DELETE - Delete a Vote - Validate Unauthorized Status Code', () => {
		cy.request({
			method: 'DELETE',
			url: 'votes/3422',
			failOnStatusCode: false,
		}).as('votes')
		cy.get('@votes').its('status').should('equal', 401)
	})
})
