import Ember from 'ember';
import DS from 'ember-data';

/*const {
  get,
  run: {
    debounce
  }
} = Ember;*/

export default DS.RESTAdapter.extend({

  findRecord: function (/*store, type, id, snapshot*/) {

  },

  createRecord(/*store, type, snapshot*/) {

  },

  updateRecord(/*store, type, snapshot*/) {
  },

  deleteRecord(/*store, type, snapshot*/) {
  },

  findAll: function (/*store, type, sinceToken*/) {

  },

  findMany: function (/*store, type, ids, snapshots*/) {

  },

  query(/*store, type, query = {}*/) {

  }



});
