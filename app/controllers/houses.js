import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterChanged(param) {
      if (param !== '') {
        return this.get('store').query('house', { address: param });
      } else {
        return this.get('store').findAll('house');
      }
    }
  }
});
