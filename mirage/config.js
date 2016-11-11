export default function() {
  this.namespace = '/api';

  this.get('/houses', function(schema, request) {
    var houses = schema.houses.all();
    if (request.queryParams.address !== undefined) {
      let filteredHouses = houses.models.filter(function(i) {
        return i.address.toLowerCase().indexOf(request.queryParams.address.toLowerCase()) !== -1;
      });
      houses.models = filteredHouses;
    }
    return houses;
  });

  // Find and return the provided house from our house list above
  this.get('/houses/:id', function(schema, request) {
    return {data: schema.houses.find((house) => request.params.id === house.id)};
  });
  this.get('/rooms', function(schema, request) {
    return schema.rooms.all();
  });
  this.get('/rooms/:id', function(schema, request) {
    return {data: schema.rooms.find((room) => request.params.id === room.id)};
  });
}
