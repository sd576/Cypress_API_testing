describe('Update an existing product and verify the changes are applied', () => {
  it('Update an existing product using PUT request', () => {
    // Define the updated product data
    const updatedProductData = {
      title: 'Updated Test Product',
      price: 13.5,
      description: 'Updated lorem ipsum set',
      image: 'https://updated-image-url.com',
      category: 'electronics', // Assuming you want to change the category to electronics
    };

    // Make a PUT request to update the product
    cy.request({
      method: 'PUT',
      url: 'https://fakestoreapi.com/products/7',
      body: updatedProductData,
    }).then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);
      // Add additional assertions if needed to verify the changes
      expect(response.body.id).to.eq(7);
      expect(response.body.title).to.eq('Updated Test Product');
      expect(response.body.price).to.eq(13.5);
      expect(response.body.description).to.eq('Updated lorem ipsum set');
      expect(response.body.category).to.eq('electronics');
    });
  });

  it('Update an existing product using PATCH request', () => {
    // Define the updated product data
    const updatedProductData = {
      price: 10.99,
    };

    // Make a PATCH request to update specific fields of the product
    cy.request({
      method: 'PATCH',
      url: 'https://fakestoreapi.com/products/7',
      body: updatedProductData,
    }).then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);

      // Assert the response body matches the expected updated data
      expect(response.body.price).to.eq(10.99);
    });
  });
});
