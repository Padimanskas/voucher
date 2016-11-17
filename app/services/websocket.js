import Ember from 'ember';

export default Ember.Service.extend({

  websockets: Ember.inject.service(),

  init() {
    this._super(...arguments);

    const socket = this.get('websockets').socketFor('ws://localhost:7000/');

    socket.on('open', this.myOpenHandler, this);
    socket.on('message', this.myMessageHandler, this);
    socket.on('close', this.myCloseHandler, this);

    this.set('items', []);
  },

  myOpenHandler(){
    console.log('asdfasdfasf');
  },

  myMessageHandler(){
    console.log('asdfasdfasf');

  },

  myCloseHandler(){
    console.log('asdfasdfasf');
  }


});
