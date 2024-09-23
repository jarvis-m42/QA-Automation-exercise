describe('Git API Tests', () => {

    it('Get user info without token', () => {
       
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user',
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.eq('Requires authentication')
        });
    });

    it('Get user info with invalid token', () => {
       
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user',
            failOnStatusCode: false,
            headers: {"Authorization": "Bearer aaa"
            }
        }).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.eq('Bad credentials')
        });
    });

    it('Get user info with token', () => {
       
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user',
         
            headers: {"Authorization":  `Bearer ${Cypress.env('access_token')}`
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
          
        });
    });

    it('Update user bio with token', () => {
       
        cy.request({
            method: 'PATCH',
            url: 'https://api.github.com/user',
         
            headers: {"Authorization": `Bearer ${Cypress.env('access_token')}`,
            },
            body: {
                "bio": "I love coding"
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
          
        });
    });
});
