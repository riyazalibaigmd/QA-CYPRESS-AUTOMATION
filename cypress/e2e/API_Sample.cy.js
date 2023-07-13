describe('template spec', () => {
    it('POST request', () => {
        cy.request({
            method: 'POST', url: 'https://reqres.in/api/users', body: {
                "name": "Bingo",
                "job": "Team lead"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("Bingo")
            expect(response.statusText).to.eq("Created")
        })
    })

    it('PUT request', () => {
        cy.request({
            method: 'PUT', url: 'https://reqres.in/api/users/2', body: {
                "name": "Angel",
                "job": "zion resident"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Angel")
        })
    })

    it('PATCH request', () => {
        cy.request({
            method: 'PATCH', url: 'https://reqres.in/api/users/2', body: {
                "name": "Angel",
                "job": "zion resident"
            }
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Angel")
        })
    })

    it('DELETE request', () => {
        cy.request({ method: 'DELETE', url: 'https://reqres.in/api/users/2' }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })
})