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
  this.route('clubs', function(){
    this.route('club', {
      path: ':club_id'
  });
});

});
export default Router;
