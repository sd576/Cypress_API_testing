describe('Update an existing product and verify the changes are applied', () => {
  it('Test updating cart details using PUT request', () => {
    // Make a GET request to fetch the existing cart details
    cy.request('https://fakestoreapi.com/carts/7').then((getResponse) => {
      // Ensure the GET request is successful
      expect(getResponse.status).to.eq(200);

      // Store the current cart details
      const existingCart = getResponse.body;

      cy.request({
        method: 'PUT',
        url: 'https://fakestoreapi.com/carts/7',
        body: {
          id: existingCart.id,
          userId: existingCart.userId,
          date: existingCart.date,
          products: [
            {
              productId: 19,
              quantity: 4,
            },
          ],
          __v: existingCart.__v,
        },
      }).then((putResponse) => {
        // Ensure the PUT request is successful
        expect(putResponse.status).to.eq(200);

        // Verify that the cart details have been updated
        expect(putResponse.body.products).to.have.lengthOf(1);
        expect(putResponse.body.products[0].productId).to.eq(19);
        expect(putResponse.body.products[0].quantity).to.eq(4);
      });
    });
  });

  it('Test updating product price using PATCH request', () => {
    // Make a PATCH request to update the product price
    cy.request({
      method: 'PATCH',
      url: 'https://fakestoreapi.com/products/18',
      body: {
        price: 10.85, // New price
      },
    }).then((patchResponse) => {
      // Ensure the PATCH request is successful
      expect(patchResponse.status).to.eq(200);

      // Verify that the product price has been updated
      expect(patchResponse.body.price).to.eq(10.85);
    });
  });
});
