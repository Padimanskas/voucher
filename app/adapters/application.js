import Ember from 'ember';
import DS from 'ember-data';


const {
  get,
  run: {
    debounce
  }
} = Ember;

export default DS.JSONAPIAdapter.extend({

  namespace: '',
  host: 'ws://localhost:8001',

  webSocket: Ember.inject.service(),

  findAll: function(store, type, id) {
    const socket = this.get('webSocket');
    return new Ember.RSVP.Promise(function(resolve, reject) {

      socket.getAllVouchers('get data', function(data) {
        resolve(data);
      }, function(error) {
        reject(error);
      });


    });



  },


  findRecord: function (/*store, type, id, snapshot*/) {
    const socket = this.get('webSocket');
    socket.getAllVouchers();
  },

  createRecord(/*store, type, snapshot*/) {

  },

  updateRecord(/*store, type, snapshot*/) {
  },

  deleteRecord(/*store, type, snapshot*/) {
  },


  findMany: function (/*store, type, ids, snapshots*/) {

  },

  query(/*store, type, query = {}*/) {

  }


});



/*import Ember from 'ember';




export default DS.RESTAdapter.extend({



});*/
