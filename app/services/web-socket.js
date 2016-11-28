import Ember from 'ember';

export default Ember.Service.extend({

  websockets: Ember.inject.service(),
  wsData: null,

  init() {
    this._super(...arguments);

    const socket = this.get('websockets').socketFor('ws://localhost:8001/');

    socket.on('open', this.myOpenHandler, this);
    socket.on('message', this.myMessageHandler, this);
    socket.on('close', this.myCloseHandler, this);

    this.set('socketRef', socket);
  },

  willDestroyElement() {
    const socket = this.get('socketRef');

    socket.off('open', this.myOpenHandler);
    socket.off('message', this.myMessageHandler);
    socket.off('close', this.myCloseHandler);
  },

  myOpenHandler(event) {
    console.log(`On open event has been called: ${event}`);
  },

  myMessageHandler(event) {
    console.log(`Message: ${event.data}`);
    this.set('wsData', event.data);
    //this.set('commonProperty.abserved', event.data);
    return event.data;
  },

  myCloseHandler(event) {
    console.log(`On close event has been called: ${event}`);
  },

  getAllVouchers(voucherName, resolve, reject) {
    const socket = this.get('socketRef');
    const readyState = this.get('socketRef').readyState();



    if(readyState){
      socket.send('searchVoucher:' + voucherName);
    }

    return this.get('wsData');



  }

});
