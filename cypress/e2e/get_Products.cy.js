describe('Get All Product details', () => {
  it('GET All Products http response', () => {
    cy.request('GET', 'https://fakestoreapi.com/products').then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);
    });
  });

  it('GET Product 1', () => {
    cy.request('GET', 'https://fakestoreapi.com/products/1').then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);
      // Additional assertions
      expect(response.body.title.trim()).to.eq(
        'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
      );
      expect(response.body.price).to.eq(109.95);
      expect(response.body.description).to.eq(
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
      );
      expect(response.body.category).to.eq(`men's clothing`);
    });
  });
});

it('GET Product 2', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/2').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Mens Casual Premium Slim Fit T-Shirts');
    expect(response.body.price).to.eq(22.3);
    expect(response.body.description).to.eq(
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.'
    );
    expect(response.body.category).to.eq(`men's clothing`);
  });
});

it('GET Product 3', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/3').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Mens Cotton Jacket');
    expect(response.body.price).to.eq(55.99);
    expect(response.body.description).to.eq(
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.'
    );
    expect(response.body.category).to.eq(`men's clothing`);
  });
});

it('GET Product 4', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/4').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Mens Casual Slim Fit');
    expect(response.body.price).to.eq(15.99);
    expect(response.body.description).to.eq(
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.'
    );
    expect(response.body.category).to.eq(`men's clothing`);
  });
});

it('GET Product 5', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/5').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Mens Casual Slim Fit');
    expect(response.body.price).to.eq(15.99);
    expect(response.body.description).to.eq(
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.'
    );
    expect(response.body.category).to.eq(`men's clothing`);
  });
});

it('GET Product 6', () => {
  cy.request('GET', 'https://fakestoreapi.com/products/6').then((response) => {
    // Ensure the response status is 200
    expect(response.status).to.eq(200);
    // Additional assertions
    expect(response.body.title.trim()).to.eq('Solid Gold Petite Micropave');
    expect(response.body.price).to.eq(168);
    expect(response.body.description).to.eq(
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.'
    );
    expect(response.body.category).to.eq('jewelery');
  });
});
