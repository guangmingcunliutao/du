var pro_details = (function(){
    return {
        init:function(){
            this.pro_id = cookieHandle.getCookie('pro_id');
            $.get('../php/pro_details.php',{pro_id:this.pro_id},this.handImg);
            this.num_sub = $('.num_sub');
            this.num_add = $('.num_add');
            this.countInp = $('.countInp');
            this.sub_tip = $('.sub_tip');
            this.add_tip = $('.add_tip');
            this.img_list = $('.img_list');
            this.img_con = $('.img_con');
            this.btnAddCar = $('.btnAddCar');
            this.event();
        },
        event:function(){
            var _this = this;
            this.num_sub.on('click',this.num_subClickHand);
            this.num_add.on('click',this.num_addClickHand);
            this.img_list.on('mouseenter','img',this.toggelImgsrc);
            this.btnAddCar.on('click',this.addCar);
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
            // 大图的路径要去掉小图路径后面携带的尺寸
            pro_details.img_con.find('img').attr('src',this.src.replace('@w_100,h_100',''));
        },
        addCar:function(){
            var count = pro_details.countInp.val();
            // 将一个商品的信息当做一个对象保存
            // 本地存储都是字符串形式
            // 第一次添加时，localstorage可能没有shop_list这个属性，所以设置默认值
            var shop_list = localStorage.shop_list || '[]';
            // shop_list = [{},{},{}];
            // 将数据转换为对象进行操作
            shop_list = JSON.parse(shop_list);
            // 遍历数组
            for(var i=0; i<shop_list.length; i++){
                // 判断初始数据里面有没有这个商品，如果有，直接累加
                if(shop_list[i].pro_id === pro_details.pro_id){
                    shop_list[i].count = Number(shop_list[i].count) + Number(count);
                    break;
                }
            }
            // 可以全部循环完，正确证明初始数据里面没有这个商品，那么把这个商品添加进去
            if(i == shop_list.length){
                shop_list.push({pro_id:pro_details.pro_id,count:count});
            }
            // 转换为json字符串，保存到本地存储
            localStorage.shop_list = JSON.stringify(shop_list);
            alert('加入购物车成功');
            // window.location.assign('shop_car.html');
        }
    }
}());