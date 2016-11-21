import Ember from 'ember';

export default Ember.Component.extend({

  newVoucher: false,

  actions: {

    closeNewVoucher () {
      this.sendAction('showVoucherTable');
    }

  }



});
