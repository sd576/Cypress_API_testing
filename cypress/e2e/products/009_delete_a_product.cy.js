it('DELETE an existing product and verify the changes are applied', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://fakestoreapi.com/products/6',
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.deep.equal({
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    });
  });
});
