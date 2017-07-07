import Ember from 'ember';

export default Ember.Controller.extend({
    userInfo: {
    },
    userGet: function(){
        let ctrl = this;
        let userId = ctrl.model.user_id;
        $.get(`https://cnodejs.org/api/v1/user/${userId}`).then(function(res){
            res.data.create_at = String(res.data.create_at).match(/.{10}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
            ctrl.set("userInfo",res.data);
        }); 
    }
})