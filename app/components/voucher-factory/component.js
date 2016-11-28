import Ember from 'ember';

const {
  $,
  on,
  get,
  set,
  computed,
  observer,
} = Ember;

export default Ember.Component.extend({

  newVoucher: false,

  commonProperty: {
    abserved: null
  },

  some: 'ddddddddd',


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
/*      const socket = this.get('webSocket');

      console.log(voucherName);
      socket.getAllVouchers(voucherName);*/

      this.set('some', get(this, 'store').findAll('voucher'));

    }

  }



});
