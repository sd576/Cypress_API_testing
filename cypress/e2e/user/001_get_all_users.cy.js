it('Get all Users', () => {
  cy.request('GET', 'https://fakestoreapi.com/users').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.length.above(0);

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
