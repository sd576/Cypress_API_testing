describe('Verify the functionality of retrieving carts within a specific date range from the API', () => {
  it('Should return carts within the specified date range', () => {
    const startDate = '2019-12-10';
    const endDate = '2020-10-10';

    // Make a request to fetch carts with specified start and end dates
    cy.request(
      `https://fakestoreapi.com/carts?startdate=${startDate}&enddate=${endDate}`
    ).then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);

      // Loop through each cart in the response array and verify the date is within the range
      response.body.forEach((cart) => {
        const cartDate = new Date(cart.date);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        // Verify that the cart date is within the specified range
        expect(cartDate).to.be.gte(startDateObj);
        expect(cartDate).to.be.lte(endDateObj);

        // Additional assertions on other properties of the cart if needed
        expect(cart).to.have.property('id');
        expect(cart).to.have.property('userId');
        expect(cart).to.have.property('products');
        expect(cart).to.have.property('__v');
      });
    });
  });
});
