var headHand = (function () {
    return {
        init: function () {
            // 将登陆之后保存的用户名渲染到页面
            $('.username').text(cookieHandle.getCookie('username'));
            this.head_menu = $('.head-menu');
            this.menu_wrap = $('.menu-wrap');
            this.header = $('header');
            this._username = $('.username');
            this.event();
        },
        event: function () {
            var _this = this;
            // 隐藏菜单，滑过显示
            this.head_menu.on('mouseenter', function () {
                headHand.menu_wrap.slideDown();
                headHand.header.addClass("bg-white");
            });
            // 隐藏菜单，移除隐藏
            this.header.on('mouseleave', function () {
                headHand.menu_wrap.slideUp(10);
                headHand.header.removeClass("bg-white");
            });
        }
    }
}());