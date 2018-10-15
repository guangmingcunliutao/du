var shop_car = (function(){
    return {
        init:function(){
            this.event();
        },
        event:function(){
            var _this = this;
        },
    }
}());
/* // 获取localstorage里面的商品列表
this.carListData = localStorage.shop_list || '[]';
// 如果为空，显示空购物车
if(this.carListData == '[]'){
    $('.car_list_wrap').remove();
}else{
    $('.no_shop_wrap').remove();
}
// 将获取到的json字符串转换为对象
this.carListData = JSON.parse(this.carListData);
console.log(this.carListData); */