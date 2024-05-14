describe('Test Cart API', () => {
  it('Verify cart details are returned correctly', () => {
    cy.request('GET', 'https://fakestoreapi.com/carts/5').then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);

      // Assert the cart details
      expect(response.body.id).to.eq(5);
      expect(response.body.userId).to.eq(3);
      expect(response.body.date).to.eq('2020-03-01T00:00:00.000Z');
      expect(response.body.products).to.have.length(2); // Asserting the number of products in the cart

      // Asserting each product in the cart
      expect(response.body.products[0]).to.deep.eq({
        productId: 7,
        quantity: 1,
      });

      expect(response.body.products[1]).to.deep.eq({
        productId: 8,
        quantity: 1,
      });

      expect(response.body.__v).to.eq(0);
    });
  });
});
