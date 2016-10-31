import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('houses', function() {
    this.route('show', { path: '/:id' }, function() {});
  });
  this.route('rooms', function() {
    this.route('show', { path: '/:id' }, function() {});
  });
});

export default Router;
