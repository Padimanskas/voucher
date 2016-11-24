import Ember from 'ember';

export default Ember.Route.extend({

  redirect() {
    this._super.apply(this, arguments);
    this.transitionTo('voucher-factory');
  }
});
