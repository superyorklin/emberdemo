import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return params;
    },
    setupController: function(ctrl,model,transition){
        ctrl.set("model",model);
        ctrl.articalGet();
    }
})