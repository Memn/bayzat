import {Factory, faker, trait} from 'ember-cli-mirage';

let images = ['https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'];

export default Factory.extend({
  title(i){
    return 'House ' + i;
  },
  owner    : faker.name.firstName,
  address  : faker.address.city,
  withRooms: trait({
    afterCreate(house, server) {
      server.createList('room', faker.random.number({'min': 1, 'max': 5}), {house});
    }
  }),
  image (i){
    return images[i % 3];
  }
});
