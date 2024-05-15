describe('Update an existing product and verify the changes are applied', () => {
  it('Test updating cart details using PUT request', () => {
    cy.request('https://fakestoreapi.com/carts/7').then((getResponse) => {
      expect(getResponse.status).to.eq(200);

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
        expect(putResponse.status).to.eq(200);
        expect(putResponse.body.products).to.have.lengthOf(1);
        expect(putResponse.body.products[0].productId).to.eq(19);
        expect(putResponse.body.products[0].quantity).to.eq(4);
      });
    });
  });

  it('Test updating product price using PATCH request', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://fakestoreapi.com/products/18',
      body: {
        price: 10.85, // new price
      },
    }).then((patchResponse) => {
      expect(patchResponse.status).to.eq(200);
      expect(patchResponse.body.price).to.eq(10.85);
    });
  });
});
