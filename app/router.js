import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('home',{path: '/home'});
    this.route('user',{path: 'user/:user_id'});
    this.route('artical',{path: 'topic/:artical_id'}); 
});

export default Router;
