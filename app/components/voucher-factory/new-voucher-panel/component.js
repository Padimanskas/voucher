import Ember from 'ember';
export default Ember.Component.extend({
  actions: {
    createVoucher(){
      this.sendAction('hideVoucherTable');
    }
  }
});
