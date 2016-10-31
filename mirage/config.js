export default function () {
  this.namespace = '/api';

  let houses = [{
    type      : 'houses',
    id        : '1',
    attributes: {
      title  : 'House 1',
      owner  : 'John Doe',
      address: 'Warsaw',
      rooms  : ['r11', 'r12', 'r13'],
      image  : 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }
  }, {
    type      : 'houses',
    id        : '2',
    attributes: {
      title  : 'House 2',
      owner  : 'John Doe',
      address: 'Ankara',
      rooms  : ['r21', 'r22'],
      image  : 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
    }
  }, {
    type      : 'houses',
    id        : '3',
    attributes: {
      title  : 'House 3',
      owner  : 'Jane Doe',
      address: 'Dubai',
      rooms  : ['r31', 'r32', 'r33'],
      image  : 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
    }
  }];

  let rooms = [
    {
      type      : 'rooms',
      id        : 'r11',
      attributes: {
        house      : '1',
        title      : 'House 1 Room 1',
        lights     : true,
        temperature: 22,
        curtains   : false
      }
    },
    {
      type      : 'rooms',
      id        : 'r12',
      attributes: {
        house      : '1',
        title      : 'House 1 Room 2',
        lights     : true,
        temperature: 22,
        curtains   : false
      }
    }, {
      type      : 'rooms',
      id        : 'r13',
      attributes: {
        house      : '1',
        title      : 'House 1 Room 3',
        lights     : true,
        temperature: 22,
        curtains   : false
      }
    }, {
      type      : 'rooms',
      id        : 'r21',
      attributes: {
        house      : '2',
        title      : 'House 2 Room 1',
        lights     : true,
        temperature: 22,
        curtains   : false
      }
    }, {
      type      : 'rooms',
      id        : 'r22',
      attributes: {
        house      : '2',
        title      : 'House 2 Room 2',
        lights     : true,
        temperature: 22,
        curtains   : false
      }
    },
    {
      type      : 'rooms',
      id        : 'r31',
      attributes: {
        house      : '3',
        title      : 'House 3 Room 1',
        lights     : true,
        temperature: 34,
        curtains   : false
      }
    },
    {
      type      : 'rooms',
      id        : 'r32',
      attributes: {
        house      : '3',
        title      : 'House 3 Room 2',
        lights     : true,
        temperature: 33,
        curtains   : false
      }
    }, {
      type      : 'rooms',
      id        : 'r33',
      attributes: {
        house      : '3',
        title      : 'House 3 Room 3',
        lights     : true,
        temperature: 35,
        curtains   : false
      }
    }
  ];
this.get('/houses', function(schema,request){
  return schema.houses.all();
});
  // this.get('/houses', function (db, request) {
  //   if (request.queryParams.address !== undefined) {
  //     let filteredHouses = houses.filter(function (i) {
  //       return i.attributes.address.toLowerCase().indexOf(request.queryParams.address.toLowerCase()) !== -1;
  //     });
  //     return {data: filteredHouses};
  //   } else {
  //     return {data: houses};
  //   }
  // });

  // Find and return the provided house from our house list above
  this.get('/houses/:id', function (schema, request) {
    return {data: schema.houses.find((house) => request.params.id === house.id)};
  });
  this.get('/rooms', function (schema, request) {
    return schema.rooms.all();
  });
  this.get('/rooms/:id', function (schema, request) {
    return {data: schema.rooms.find((room) => request.params.id === room.id)};
  });
}
