import Ember from 'ember';


export default Ember.Component.extend({

  count: 0,

  actions: {
    createVoucher(){
      const count = this.get('count') + 1;
      this.set('count', count);

    }
  }

});
