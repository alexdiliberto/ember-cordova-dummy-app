import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend({
  splashscreenService: service('ember-cordova/splash'),

  beforeModel() {
    this.get('splashscreenService').show();
  },

  model() {
    return new Ember.RSVP.Promise((resolve,) => {
      setTimeout(() => {
        return resolve("Success!"); // Yay! Everything went well!
      }, 1000);
    });
  },

  afterModel() {
    this.get('splashscreenService').hide();
  }
});
