it('Ensure that all product categories are returned', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/categories').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Define the expected categories
    const expectedCategories = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];
    // Check if all expected categories are present in the response body
    expect(response.body).to.deep.equal(expectedCategories);
  });
});
