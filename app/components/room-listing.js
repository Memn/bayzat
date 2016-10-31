import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleLights(){
      this.toggleProperty('lights');
    },
    toggleCurtains(){
      this.toggleProperty('curtains');
    },
    decrementTemperature(room){
      room.decrementProperty('temperature', 0.5);
    },
    incrementTemperature(room){
      room.incrementProperty('temperature', 0.5);
    }
  }
})
;
