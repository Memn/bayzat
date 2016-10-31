import {Factory} from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    return 'Room ' + i;
  },
  lights     : true,
  temperature: 22,
  curtains   : false
});
