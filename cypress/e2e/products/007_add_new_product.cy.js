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
    // Add your assertions here to verify the response
    expect(response.status).to.eq(200); // Assuming a successful status code is 200
    expect(response.body.id).to.be.a('number'); // Assuming the response includes an ID
  });
});
