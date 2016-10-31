import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return 'Room ' + i;
  },
  lights            : true,
  temperatureCurrent: faker.random.number({'min': 13, 'max': 35}),
  temperatureDesired: faker.random.number({'min': 13, 'max': 35}),
  curtains          : false
});
