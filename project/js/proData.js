var proData = (function () {
    return {
        init: function () {
            this.product_list = $('.product_list');
            this.event();
        },
        event: function () {
            var _this = this;
            $(document).ready(function () {
                $.get('http://localhost:1101/php/du/php/product.php', _this.proDataHandl);
            });
            // 效果，滑过产品的时候产品图片放大
            this.product_list.on('mouseenter', '.pro_item', function () {
                $(this).find('img').removeClass('img_scaleX');
                $(this).find('img').addClass('img_scaleD');
            });
            // 效果，滑过产品的时候产品图片回到原来大小
            this.product_list.on('mouseleave', '.pro_item', function () {
                $(this).find('img').removeClass('img_scaleD');
                $(this).find('img').addClass('img_scaleX');
            });
        },
        // 获取数据库的产品数据，并渲染到页面
        proDataHandl: function (data) {
            data = JSON.parse(data);
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push(`<a class="pro_item" pro_id="${data[i].id}">
                            <div class="pro_wrap">
                                <img src="${data[i].pro_img}" alt="" class="pro_img">
                                <div class="pro_name">
                                    <p class="name">${data[i].pro_name}</p>
                                    <span class="pro_tag">${data[i].pro_tag}</span>
                                </div>
                                <p class="pro_desc">${data[i].pro_desc}</p>
                                <div class="pro_price">
                                    <div class="sale_price">${data[i].pro_sale}</div>
                                    <div class="cost_price">${data[i].pro_cost}</div>
                                </div>
                            </div>
                        </a>`);
            }
            arr = arr.join('');
            $('.product_list').append(arr);
            // 处理数据为空时，页面显示效果
            proData.blankHandl();
            $('.pro_item').on('click',proData.aClick);
        },
        // 处理数据为空时的函数
        blankHandl:function(){
            for(var i=0; i<$('.pro_tag').length; i++){
                if($('.pro_tag')[i].innerHTML == '' || $('.pro_tag')[i].innerHTML == 'null'){
                    $('.pro_tag')[i].style.display = "none";
                }
                if($('.sale_price')[i].innerHTML == '' || $('.sale_price')[i].innerHTML == 'null'){
                    $('.cost_price')[i].className = "cost_price cost_price2";
                    $('.sale_price')[i].style.display = "none";
                }
            }
        },
        // 点击产品，保存产品id到cookie，并跳转页面
        aClick:function(){
            var pro_id = this.getAttribute('pro_id');
            cookieHandle.setCookie('pro_id',pro_id,1);
            window.location.assign('pro_details.html');
        }
    }
}());