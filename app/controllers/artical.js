import Ember from 'ember';

export default Ember.Controller.extend({
    artical:{},
    articalGet:function(){
        let ctrl = this;
        let articalId = ctrl.model.artical_id;
        $.get(`https://cnodejs.org/api/v1/topic/${articalId}`).then(function(res){
            res.data.create_at = String(res.data.create_at).match(/.{10}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
            res.data.replies.forEach(function(item,index){
                item.create_at = String(item.create_at).match(/.{10}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
                item.index = index + 1;
            })
            ctrl.set("artical",res.data);
        });
    }
})