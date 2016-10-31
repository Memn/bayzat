import DS from 'ember-data';

export default DS.Model.extend({
  house      : DS.belongsTo('house', {async: true}),
  title      : DS.attr('string'),
  lights     : DS.attr('boolean'),
  temperature: DS.attr('number'),
  curtains   : DS.attr('boolean'),
});
