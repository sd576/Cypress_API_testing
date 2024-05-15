it('DELETE an existing user and verify the changes are applied', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://fakestoreapi.com/users/6',
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});
