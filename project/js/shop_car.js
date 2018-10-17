var shop_car = (function () {
    return {
        init: function () {
            this.event();
            this.pro_item_wrap = $('.pro_item_wrap');
            this.getCarList();
        },
        event: function () {
            var _this = this;
            $.get('../php/product.php', _this.allShopData);
        },
        getCarList: function () {
            // 获取localstorage里面的商品列表
            shop_car.carListData = localStorage.shop_list || '[]';
            // 如果为空，显示空购物车
            if (shop_car.carListData == '[]') {
                $('.car_list_wrap').remove();
            } else {
                $('.no_shop_wrap').remove();
            }
            // 将获取到的json字符串转换为对象
            shop_car.carListData = JSON.parse(shop_car.carListData);
        },
        // 获取数据库里面所有产品的数据
        allShopData: function (data) {
            data = JSON.parse(data);
            var arr = [];
            for (var i = 0; i < shop_car.carListData.length; i++) {
                var shop_data;
                var price;
                for (var j = 0; j < data.length; j++) {
                    // 只使用localstorage里面保存的id相同的数据
                    if (shop_car.carListData[i].pro_id == data[j].id) {
                        if(data[j].pro_sale == '' || data[j].pro_sale == null){
                            data[j].pro_sale = '';
                            price = data[j].pro_cost;
                        }else{
                            price = data[j].pro_sale;
                        }
                        shop_data = data[j];
                    }
                }
                arr.push(`<div class="pro_item">
                            <div class="checkWarp">
                                <span class="check"></span>
                            </div>
                        <div class="item_content">
                            <div class="pro_img">
                                <img src="${shop_data.pro_img}" alt="">
                            </div>
                            <div class="name_desc_wrap">
                                <div class="pro_name">
                                    ${shop_data.pro_name}
                                    ${shop_data.pro_desc}
                                </div>
                            </div>
                            <div class="pro_price">
                                <div class="pro_sale">${shop_data.pro_sale}</div>
                                <div class="pro_cost">￥${shop_data.pro_cost}</div>
                            </div>
                            <div class="count_wrap">
                                <div class="inp_num">
                                    <div class="num_sub"></div>
                                    <div class="sub_tip">不能再少了</div>
                                    <input type="number" max="10" min="1" value="${shop_car.carListData[i].count}" class="countInp">
                                    <div class="num_add"></div>
                                    <div class="add_tip">不能再多了</div>
                                </div>
                            </div>
                            <div class="sum">
                                ￥${price*shop_car.carListData[i].count}
                            </div>
                            <div class="action">
                                <span>删除</span>
                            </div>
                        </div>
                    </div>`);
            }
            shop_car.pro_item_wrap.append(arr);
        }
    }
}());