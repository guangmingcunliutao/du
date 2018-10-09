var indexHand = (function(){
    return {
        init:function(){
            this.head_menu = $('.head-menu');
            this.menu_wrap = $('.menu-wrap');
            this.header = $('header');
            this.pro_item = $('.pro_item');
            this.event();
        },
        event:function(){
            var _this = this;
            this.head_menu.on('mouseenter',function(){
                indexHand.header.addClass("bg-white");
                indexHand.menu_wrap.show();
            });
            this.header.on('mouseleave',function(){
                indexHand.header.removeClass("bg-white");
                indexHand.menu_wrap.hide();
            });
            this.pro_item.on('mouseenter',function(){
                $(this).find('img').removeClass('img_scaleX');
                $(this).find('img').addClass('img_scaleD');
            });
            this.pro_item.on('mouseleave',function(){
                $(this).find('img').removeClass('img_scaleD');
                $(this).find('img').addClass('img_scaleX');
            });
        }
    }
}());