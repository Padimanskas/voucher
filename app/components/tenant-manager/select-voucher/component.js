import Ember from 'ember';
import WebSocketService from 'services/websocket';


export default Ember.Component.extend({

  count: 0,

  actions: {
    createVoucher(){
      const count = this.get('count') + 1;
      this.set('count', count);

    }
  }

});
