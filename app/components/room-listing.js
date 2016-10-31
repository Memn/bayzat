import Ember from 'ember';

export default Ember.Component.extend({
  isHot: true,

  actions: {
    toggleLights(){
      this.toggleProperty('lights');
    },
    toggleCurtains(){
      this.toggleProperty('curtains');
    },
    decrementTemperature(room){
      room.decrementProperty('temperatureDesired', 0.5);
      room.set('temperatureCurrent', room.get('temperatureDesired'));
    },
    incrementTemperature(room){
      room.incrementProperty('temperatureDesired', 0.5);
      room.set('temperatureCurrent', room.get('temperatureDesired'));
    }
  }
})
;
