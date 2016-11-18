import Ember from 'ember';

export default Ember.Component.extend({

  newVoucher: false,

  actions: {
    hideVoucherTable () {
      this.set('newVoucher', true);
    },

    showVoucherTable () {
      this.set('newVoucher', false);
    }

  }



});
