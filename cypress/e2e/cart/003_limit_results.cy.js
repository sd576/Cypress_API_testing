describe('Verify the functionality of retrieving a limited number of carts from the API', () => {
  const expectedCarts = [
    {
      id: 1,
      userId: 1,
      date: '2020-03-02T00:00:00.000Z',
      products: [
        {
          productId: 1,
          quantity: 4,
        },
        {
          productId: 2,
          quantity: 1,
        },
        {
          productId: 3,
          quantity: 6,
        },
      ],
      __v: 0,
    },
    {
      id: 2,
      userId: 1,
      date: '2020-01-02T00:00:00.000Z',
      products: [
        {
          productId: 2,
          quantity: 4,
        },
        {
          productId: 1,
          quantity: 10,
        },
        {
          productId: 5,
          quantity: 2,
        },
      ],
      __v: 0,
    },
    {
      id: 3,
      userId: 2,
      date: '2020-03-01T00:00:00.000Z',
      products: [
        {
          productId: 1,
          quantity: 2,
        },
        {
          productId: 9,
          quantity: 1,
        },
      ],
      __v: 0,
    },
    {
      id: 4,
      userId: 3,
      date: '2020-01-01T00:00:00.000Z',
      products: [
        {
          productId: 1,
          quantity: 4,
        },
      ],
      __v: 0,
    },
    {
      id: 5,
      userId: 3,
      date: '2020-03-01T00:00:00.000Z',
      products: [
        {
          productId: 7,
          quantity: 1,
        },
        {
          productId: 8,
          quantity: 1,
        },
      ],
      __v: 0,
    },
  ];

  it('Should limit the number of Carts and their contents returned', () => {
    cy.request('https://fakestoreapi.com/carts?limit=5').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.lengthOf(5);

      response.body.forEach((cart, index) => {
        const expectedCart = expectedCarts[index];
        expect(cart).to.deep.equal(expectedCart);

        cart.products.forEach((product, productIndex) => {
          const expectedProduct = expectedCart.products[productIndex];
          expect(product).to.deep.equal(expectedProduct);
        });
      });
    });
  });
});
