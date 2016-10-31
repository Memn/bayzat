import DS from 'ember-data';

export default DS.Model.extend({
  title  : DS.attr('string'),
  owner  : DS.attr('string'),
  address: DS.attr('string'),
  rooms  : DS.hasMany('room', {async: true}),
  image  : DS.attr()

});
