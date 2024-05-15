describe('Fake Store API Users with Limit Test', () => {
  it('should retrieve users with a limit of 5 from the Fake Store API', () => {
    cy.request('GET', 'https://fakestoreapi.com/users?limit=5').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.lengthOf(5);

      const firstUser = response.body[0];
      expect(firstUser).to.have.property('id');
      expect(firstUser).to.have.property('email');
      expect(firstUser).to.have.property('username');
      expect(firstUser).to.have.property('password');
      expect(firstUser).to.have.property('name');
      expect(firstUser).to.have.property('phone');
      expect(firstUser).to.have.property('__v');
    });
  });
});
