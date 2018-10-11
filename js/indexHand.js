var indexHand = (function () {
    return {
        init: function () {
            this.head_menu = $('.head-menu');
            this.menu_wrap = $('.menu-wrap');
            this.header = $('header');
            this.product_list = $('.product_list');
            this._username = $('.username');
            this.event();
        },
        event: function () {
            var _this = this;
            $(document).ready(function () {
                $.get('http://localhost:1101/php/du/php/product.php', _this.proDataHandl);
            });
            this.head_menu.on('mouseenter', function () {
                indexHand.header.addClass("bg-white");
                indexHand.menu_wrap.show();
            });
            this.header.on('mouseleave', function () {
                indexHand.header.removeClass("bg-white");
                indexHand.menu_wrap.hide();
            });
            this.product_list.on('mouseenter', '.pro_item', function () {
                $(this).find('img').removeClass('img_scaleX');
                $(this).find('img').addClass('img_scaleD');
            });
            this.product_list.on('mouseleave', '.pro_item', function () {
                $(this).find('img').removeClass('img_scaleD');
                $(this).find('img').addClass('img_scaleX');
            });
        },
        proDataHandl: function (data) {
            data = JSON.parse(data);
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push(`<a href="#" class="pro_item">
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
            indexHand.blankHandl();
        },
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
        }
    }
}());