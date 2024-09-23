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
            headers: {"Authorization": "Bearer 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J0"
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
         
            headers: {"Authorization": "Bearer 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"
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
          
        });
    });

    it('Get user bio with token', () => {
       
        cy.request({
            method: 'PATCH',
            url: 'https://api.github.com/user',
         
            headers: {"Authorization": "Bearer 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"
            },
            body: {
                "bio": "I love coding"
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
          
        });
    });
});
