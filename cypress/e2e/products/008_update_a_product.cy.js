describe('Update an existing product and verify the changes are applied', () => {
  it('Update an existing product using PUT request', () => {
    const updatedProductData = {
      title: 'Updated Test Product',
      price: 13.5,
      description: 'Updated lorem ipsum set',
      image: 'https://updated-image-url.com',
      category: 'electronics',
    };

    cy.request({
      method: 'PUT',
      url: 'https://fakestoreapi.com/products/7',
      body: updatedProductData,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(7);
      expect(response.body.title).to.eq('Updated Test Product');
      expect(response.body.price).to.eq(13.5);
      expect(response.body.description).to.eq('Updated lorem ipsum set');
      expect(response.body.category).to.eq('electronics');
    });
  });

  it('Update an existing product using PATCH request', () => {
    const updatedProductData = {
      price: 10.99,
    };

    cy.request({
      method: 'PATCH',
      url: 'https://fakestoreapi.com/products/7',
      body: updatedProductData,
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.price).to.eq(10.99);
    });
  });
});
