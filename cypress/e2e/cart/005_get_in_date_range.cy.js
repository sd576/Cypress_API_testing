describe('Verify the functionality of retrieving carts within a specific date range from the API', () => {
  it('Should return carts within the specified date range', () => {
    const startDate = '2019-12-10';
    const endDate = '2020-10-10';

    cy.request(
      `https://fakestoreapi.com/carts?startdate=${startDate}&enddate=${endDate}`
    ).then((response) => {
      expect(response.status).to.eq(200);

      response.body.forEach((cart) => {
        const cartDate = new Date(cart.date);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        expect(cartDate).to.be.gte(startDateObj);
        expect(cartDate).to.be.lte(endDateObj);

        expect(cart).to.have.property('id');
        expect(cart).to.have.property('userId');
        expect(cart).to.have.property('products');
        expect(cart).to.have.property('__v');
      });
    });
  });
});
