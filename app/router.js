import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('player-manager');
  this.route('question-manager');
  this.route('tv-support');
  this.route('advertisemend-factory');
  this.route('voucher-factory');
  this.route('tenant-manager');
  this.route('vouchers');
  this.route('voucher-providers');
});

export default Router;
