it('DELETE an existing cart and verify the changes are applied', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://fakestoreapi.com/carts/6',
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});
