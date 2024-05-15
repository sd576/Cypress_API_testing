describe('Fake Store API Create User Test', () => {
  it('should create a new user in the Fake Store API', () => {
    const newUser = {
      email: 'test@example.com',
      username: 'test_user',
      password: 'password123',
      name: {
        firstname: 'Test',
        lastname: 'User',
      },
      phone: '1-234-567-8901',
    };

    cy.request('POST', 'https://fakestoreapi.com/users', newUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.be.a('number');
    });
  });
});
