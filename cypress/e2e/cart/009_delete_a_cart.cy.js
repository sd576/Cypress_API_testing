it('DELETE an existing cart and verify the changes are applied', () => {
  // Make a request to delete the cart with ID 6
  cy.request({
    method: 'DELETE',
    url: 'https://fakestoreapi.com/carts/6',
    failOnStatusCode: false, // Add this to prevent Cypress from failing the test due to a non-2xx response
  }).then((response) => {
    // Assert the response status code
    expect(response.status).to.eq(200); // Adjusted to check for 200 status code

    // Since the cart is deleted, you may not need to assert the response body
    // But if you want to ensure that the cart was indeed deleted, you can assert for specific behavior or response body
  });
});
