describe('Verify products belonging to a specific category', () => {
  it('Ensure that products belonging to the "jewelery" category are returned', () => {
    cy.request('GET', 'https://fakestoreapi.com/products/category/jewelery').then(
      (response) => {
        expect(response.status).to.eq(200);
        response.body.forEach((product) => {
          expect(product.category).to.eq('jewelery');
          expect(product).to.have.property('title');
          expect(product).to.have.property('price');
          expect(product).to.have.property('description');
          expect(product).to.have.property('category');
        });
      }
    );
  });
});
