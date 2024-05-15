it('Test adding a new product and verify it is successfully added', () => {
  cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/auth/login',
    body: {
      username: 'mor_2314',
      password: '83r5^_',
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('token').and.to.be.a('string');
  });
});
