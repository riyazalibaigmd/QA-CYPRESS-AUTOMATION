describe('template spec', () => {
    it('passes', () => {
        cy.request('GET', 'https://www.bstackdemo.com/').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})