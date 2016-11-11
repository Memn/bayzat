import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterChanged(param) {
      var houses;
      if (param !== '') {
        houses = this.get('store').query('house', {address: param});
      } else {
        houses = this.get('store').findAll('house');
      }
      this.set('model', houses);
    }
  }
});
