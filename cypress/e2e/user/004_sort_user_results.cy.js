describe('Fake Store API Users Sorting Test', () => {
  it('should retrieve users sorted in descending order from the Fake Store API', () => {
    cy.request('GET', 'https://fakestoreapi.com/users?sort=desc').then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.length.above(0);

      const users = response.body;
      for (let i = 0; i < users.length - 1; i++) {
        expect(users[i].id).to.be.above(users[i + 1].id);
      }

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
