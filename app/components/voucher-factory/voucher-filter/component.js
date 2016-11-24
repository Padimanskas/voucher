import Ember from 'ember';

export default Ember.Component.extend({

  currentValue: '',
  voucherName: '',

  items: [
    {item: "Type1", id: 1},
    {item: "Type3", id: 2},
    {item: "Type4", id: 3},
    {item: "Type5", id: 4},
    {item: "Type6", id: 5},
    {item: "Type7", id: 6},
    {item: "Type8", id: 7}
  ],

  actions: {
    getVouchers(){
      this.sendAction('getDataFromWebsocket', this.get('voucherName'));
    }
  }


});
