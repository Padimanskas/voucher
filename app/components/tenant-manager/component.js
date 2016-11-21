import Ember from 'ember';

export default Ember.Component.extend({

  newVoucher: false,

  commonProperty: {
    abserved: null
  },


  websockets: Ember.inject.service(),

  socketRef: null,

  didInsertElement() {

    const socket = this.get('websockets').socketFor('ws://localhost:7000/');

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
  },

  myCloseHandler(event) {
    console.log(`On close event has been called: ${event}`);
  },

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

    getDataFromWebsocket(){
      const socket = this.get('socketRef');
      socket.send('Hello Websocket World');
    },


  }



});
