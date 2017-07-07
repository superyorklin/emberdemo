import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return params;
    },
    setupController(ctrl,model,transition){
        ctrl.set("model",model);
        ctrl.userGet();
    }
})