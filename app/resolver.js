import Ember from 'ember';
import Resolver from 'ember-resolver';

const {
  computed
} = Ember;

export default Resolver.extend({

  projectNamePodBasedModuleName(parsedName) {
    return this.podBasedLookupWithPrefix(`${this.namespace.modulePrefix}/pods`, parsedName);
  },

  moduleNameLookupPatterns: computed(function () {
    return this._super().unshiftObjects([this.projectNamePodBasedModuleName]);
  })

});
