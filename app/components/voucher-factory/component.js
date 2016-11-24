import Ember from 'ember';

export default Ember.Component.extend({

  newVoucher: false,

  commonProperty: {
    abserved: null
  },


  webSocket: Ember.inject.service(),

  actions: {
    hideVoucherTable () {
      this.set('newVoucher', true);
    },

    showVoucherTable () {
      this.set('newVoucher', false);
    },

    changeCommonProp() {
      this.set('commonProperty.abserved', '777');
    },

    getDataFromWebsocket(voucherName){
      const socket = this.get('webSocket');

      console.log(voucherName);
      socket.getAllVouchers(voucherName);
    },


  }



});
