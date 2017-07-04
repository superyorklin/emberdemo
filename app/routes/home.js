import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(ctrl){
        ctrl.itemsGet();
    }
})