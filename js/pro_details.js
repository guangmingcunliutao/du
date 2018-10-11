var pro_details = (function(){
    return {
        init:function(){
            this.num_sub = $('.num_sub');
            this.countInp = $('.countInp');
            this.event();
        },
        event:function(){
            var _this = this;
            this.num_sub.on('click',this.num_subClickHand);
        },
        num_subClickHand:function(){
            var count = pro_details.countInp.val();
            if(count<=1){
            }
            count--;
            pro_details.countInp.val(count);
        }
    }
}());