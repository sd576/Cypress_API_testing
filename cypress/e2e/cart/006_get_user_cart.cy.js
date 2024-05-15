describe('Verify the functionality of retrieving cart details for a specific user', () => {
  it('Should retrieve cart details for user with ID 2', () => {
    cy.request('https://fakestoreapi.com/carts/user/2').then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.be.an('array');

      expect(response.body).to.have.lengthOf.at.least(1);

      response.body.forEach((cart) => {
        expect(cart).to.have.property('id');
        expect(cart).to.have.property('userId').that.equals(2);
        expect(cart).to.have.property('date');
        expect(cart).to.have.property('products').that.is.an('array');
        expect(cart).to.have.property('__v');

        cart.products.forEach((product) => {
          expect(product).to.have.property('productId').that.is.a('number');
          expect(product).to.have.property('quantity').that.is.a('number');
        });
      });
    });
  });
});
