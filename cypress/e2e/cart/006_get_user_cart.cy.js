describe('Verify the functionality of retrieving cart details for a specific user', () => {
  it('Should retrieve cart details for user with ID 2', () => {
    // Make a request to fetch carts for user with ID 2
    cy.request('https://fakestoreapi.com/carts/user/2').then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);

      // Ensure that the response body is an array
      expect(response.body).to.be.an('array');

      // Ensure that the array contains at least one cart
      expect(response.body).to.have.lengthOf.at.least(1);

      // Loop through each cart in the response array and make assertions
      response.body.forEach((cart) => {
        // Ensure that each cart contains the expected properties
        expect(cart).to.have.property('id');
        expect(cart).to.have.property('userId').that.equals(2);
        expect(cart).to.have.property('date');
        expect(cart).to.have.property('products').that.is.an('array');
        expect(cart).to.have.property('__v');

        // Validate each product in the cart's products array
        cart.products.forEach((product) => {
          // Assert on productId and quantity of each product
          expect(product).to.have.property('productId').that.is.a('number');
          expect(product).to.have.property('quantity').that.is.a('number');
        });
      });
    });
  });
});
