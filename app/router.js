import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('listings', function(){
    this.route('listing', {
      path: ':listing_id'
    });
  });
});

export default Router;
