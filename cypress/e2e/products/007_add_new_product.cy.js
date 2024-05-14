it('Test adding a new product and verify it is successfully added', () => {
  cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/products',
    body: {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.id).to.be.a('number');
  });
});
