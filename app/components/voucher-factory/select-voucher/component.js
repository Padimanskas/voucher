import Ember from 'ember';


export default Ember.Component.extend({

  count: 0,



  didUpdate() {
    console.log('did update');
  },

  actions: {
    createVoucher(){

/*      const count = this.get('count') + 1;

      this.set('count', count);*/

      this.sendAction('hideVoucherTable');

    },

    changeCommonProp() {
      this.didUpdate();
      this.set('commonProperty.abserved', '123123');
    }

  }

});
