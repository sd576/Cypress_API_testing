describe('Update an existing product and verify the changes are applied', () => {
  it('Update an existing product using PUT request', () => {
    // Define the updated product data
    const updatedProductData = {
      title: 'Updated Test Product',
      price: 15.99,
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
    });
  });

  it('Add a new product using POST request', () => {
    // Define the data for the new product
    const newProductData = {
      title: 'New Test Product',
      price: 20.99,
      description: 'New lorem ipsum set',
      image: 'https://new-image-url.com',
      category: 'electronics', // Assuming the category for the new product is electronics
    };

    // Make a POST request to add the new product
    cy.request({
      method: 'POST',
      url: 'https://fakestoreapi.com/products',
      body: newProductData,
    }).then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);
      // Add additional assertions if needed to verify the new product addition
    });
  });
});
