describe('Fake Store API Single User Test', () => {
  it('should retrieve a single user from the Fake Store API', () => {
    const userId = 1;

    cy.request(`GET`, `https://fakestoreapi.com/users/${userId}`).then((response) => {
      expect(response.status).to.eq(200);

      const user = response.body;
      expect(user).to.have.property('id', userId);
      expect(user).to.have.property('email', 'john@gmail.com');
      expect(user).to.have.property('username', 'johnd');
      expect(user).to.have.property('password', 'm38rmF$');
      expect(user).to.have.nested.property('name.firstname', 'john');
      expect(user).to.have.nested.property('name.lastname', 'doe');
      expect(user).to.have.property('phone', '1-570-236-7033');
      expect(user).to.have.property('__v', 0);
    });
  });
});
