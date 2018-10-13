var pro_details = (function(){
    return {
        init:function(){
            this.pro_id = cookieHandle.getCookie('pro_id');
            $.get('php/pro_details.php',{pro_id:this.pro_id},this.handImg);
            this.num_sub = $('.num_sub');
            this.num_add = $('.num_add');
            this.countInp = $('.countInp');
            this.sub_tip = $('.sub_tip');
            this.add_tip = $('.add_tip');
            this.img_list = $('.img_list');
            this.img_con = $('.img_con');
            this.event();
        },
        event:function(){
            var _this = this;
            this.num_sub.on('click',this.num_subClickHand);
            this.num_add.on('click',this.num_addClickHand);
            this.img_list.on('mouseenter','img',this.toggelImgsrc);
        },
        num_subClickHand:function(){
            var count = pro_details.countInp.val();
            // 数量最小为1
            if(count<=1){
                this.disabled = 'disabled';
                pro_details.sub_tip.finish().fadeIn().delay(1000).fadeOut();
            }else{
                count--;
                pro_details.countInp.val(count);
            }
        },
        // 数量最大为10
        num_addClickHand:function(){
            var count = pro_details.countInp.val();
            if(count>=10){
                this.disabled = 'disabled';
                pro_details.add_tip.finish().fadeIn().delay(1000).fadeOut();
            }else{
                count++;
                pro_details.countInp.val(count);
            }
        },
        handImg:function(data){
            data = JSON.parse(data);
            pro_details.img_con.find('img').attr('src',data.img_list[0].replace('@w_100,h_100',''));
            var arr = [];
            // 循环获取到的图片地址集合
            for(var i=0; i<data.img_list.length; i++){
                // 字符串拼接标签
                arr.push(`<li><img src="${data.img_list[i]}" alt=""></li>`);
            }
            arr = arr.join('');
            pro_details.img_list.find('ul').append(arr);
        },
        toggelImgsrc:function(){
            pro_details.img_con.find('img').attr('src',this.src.replace('@w_100,h_100',''));
        }
    }
}());