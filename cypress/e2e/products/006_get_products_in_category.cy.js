describe('Verify products belonging to a specific category', () => {
  it('Ensure that products belonging to the "jewelery" category are returned', () => {
    // Make a request to fetch products belonging to the "jewelery" category
    cy.request('GET', 'https://fakestoreapi.com/products/category/jewelery').then(
      (response) => {
        // Ensure the response status is 200
        expect(response.status).to.eq(200);
        // Ensure that all returned products belong to the "jewelery" category
        response.body.forEach((product) => {
          expect(product.category).to.eq('jewelery');
          // Ensure that each product has the required properties: title, price, description, and category
          expect(product).to.have.property('title');
          expect(product).to.have.property('price');
          expect(product).to.have.property('description');
          expect(product).to.have.property('category');
        });
      }
    );
  });
});
