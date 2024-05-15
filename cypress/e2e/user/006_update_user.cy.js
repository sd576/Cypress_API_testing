describe('Fake Store API Update User Test', () => {
  it('should update an existing user in the Fake Store API', () => {
    const updatedUserData = {
      email: 'John@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      name: {
        firstname: 'John',
        lastname: 'Doe',
      },
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
      phone: '1-570-236-7033',
    };

    cy.request('PUT', 'https://fakestoreapi.com/users/7', updatedUserData).then(
      (response) => {
        expect(response.status).to.eq(200);

        const updatedUser = response.body;
        expect(updatedUser).to.deep.equal(updatedUserData);
      }
    );
  });

  it('should update the email of a user in the Fake Store API', () => {
    const updatedEmail = {
      email: 'miriammargoyles@gmail.com',
    };

    cy.request('PATCH', 'https://fakestoreapi.com/users/7', updatedEmail).then(
      (response) => {
        expect(response.status).to.eq(200);

        const updatedUser = response.body;
        expect(updatedUser.email).to.equal(updatedEmail.email);
      }
    );
  });
});
