var indexHand = (function(){
    return {
        init:function(){
            this.head_menu = $('.head-menu');
            this.menu_wrap = $('.menu-wrap');
            this.event();
        },
        event:function(){
            var _this = this;
            _this.head_menu.on('mouseenter',function(){
                indexHand.menu_wrap.show();
            });
        }
    }
}());