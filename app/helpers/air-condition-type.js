import Ember from 'ember';

export function airConditionType([temperatureCurrent]/*, hash*/) {
  if (temperatureCurrent > 15) {
    if (temperatureCurrent < 30) {
      return 'label-success';
    }
    else {
      return 'label-danger';
    }
  } else {
    return 'label-info';
  }

}

export default Ember.Helper.helper(airConditionType);
