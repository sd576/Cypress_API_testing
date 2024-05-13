it('Verify that a specific product is returned when requesting by its ID', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/3').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Mens Cotton Jacket');
    expect(response.body.price).to.eq(55.99);
    expect(response.body.description).to.eq(
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.'
    );
    expect(response.body.category).to.eq(`men's clothing`);
  });
});
