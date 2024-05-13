it('GET All Products http response', () => {
  cy.request('GET', 'https://fakestoreapi.com/products').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
  });
});

it('GET Product 6', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/6').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Solid Gold Petite Micropave');
    expect(response.body.price).to.eq(168);
    expect(response.body.description).to.eq(
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.'
    );
    expect(response.body.category).to.eq('jewelery');
  });
});

it('POST API testing using Cypress API Plugin', () => {
  cy.request('POST', 'https://reqres.in/api/users', {
    name: 'morpheus',
    job: 'leader',
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});

it('DELETE API testing Using Cypress API Plugin', () => {
  cy.request('DELETE', 'https://reqres.in/api/users/2').should((response) => {
    expect(response.status).to.eq(204);
  });
});
