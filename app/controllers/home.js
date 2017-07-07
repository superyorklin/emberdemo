import Ember from 'ember';

export default Ember.Controller.extend({
    itemsGet: function(){
        var ctrl = this;
        $.get("https://cnodejs.org/api/v1/topics",{
            page: 1,
            limit: 20,
            mdrender: 'false'
        }).then(function(res){
            res.data.forEach(function(val){
                val.create_at =  String(val.create_at).match(/.{10}/)[0];
                val.user_id = val.author.loginname;
            })
            ctrl.set("model",Ember.A(res.data));
        })
    },
})