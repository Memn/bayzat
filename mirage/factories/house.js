import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){return 'House '+i;},
  owner: faker.name.firstName,
  address: faker.address.city,
  withRooms: trait({
    afterCreate(house, server) {
      server.createList('room', faker.random.number({'min': 1,'max': 5}), { house });
    }
  }),
  // rooms  : ['r31', 'r32', 'r33'],
  image  : 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
});
