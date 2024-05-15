it('Ensure that all product categories are returned', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/categories').then((response) => {
    expect(response.status).to.eq(200);
    const expectedCategories = [
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ];
    expect(response.body).to.deep.equal(expectedCategories);
  });
});
