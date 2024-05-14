it('Test adding a new product and verify it is successfully added', () => {
  cy.request({
    method: 'POST',
    url: 'https://fakestoreapi.com/carts',
    body: {
      userId: 5,
      date: '2020-02-03',
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
    },
  }).then((response) => {
    expect(response.status).to.eq(200);

    expect(response.body.id).to.be.a('number');
    expect(response.body.userId).to.be.a('number');
    expect(response.body.date).to.be.a('string');
    expect(response.body.products).to.be.an('array');

    expect(response.body.products).to.have.lengthOf.at.least(1);

    expect(response.body.products[0].productId).to.equal(5);
    expect(response.body.products[0].quantity).to.equal(1);
    expect(response.body.products[1].productId).to.equal(1);
    expect(response.body.products[1].quantity).to.equal(5);
  });
});
