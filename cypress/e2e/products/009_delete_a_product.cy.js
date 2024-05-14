it('DELETE an existing product and verify the changes are applied', () => {
  // Make a request to delete the product with ID 6
  cy.request({
    method: 'DELETE',
    url: 'https://fakestoreapi.com/products/6',
    failOnStatusCode: false, // Add this to prevent Cypress from failing the test due to a non-2xx response
  }).then((response) => {
    // Assert the response status code
    expect(response.status).to.eq(200); // Adjusted to check for 200 status code

    // Additional assertions
    expect(response.body).to.deep.equal({
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    });
  });
});
