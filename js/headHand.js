var headHand = (function () {
    return {
        init: function () {
            // 加载公共头部
            $('header').load('common.html .header_wrap', headHand.handData);
            $('footer').load('common.html .foot_wrap');
            this.header = $('header');
            this.event();
        },
        event: function (data) {
            var _this = this;
        },
        // 获取头部之后处理事件,暂时只发现了在load方法的回调函数中回去加载的节点
        handData: function (data) {
            menu_wrap = $('.menu-wrap');
            _username = $('.username');
            head_menu = $('.head-menu');
            // 隐藏菜单，滑过显示
            head_menu.on('mouseenter', function () {
                menu_wrap.stop().slideDown();
                headHand.header.addClass("bg-white");
            });
            // 隐藏菜单，移除隐藏
            headHand.header.on('mouseleave', function () {
                menu_wrap.stop().slideUp(10);
                headHand.header.removeClass("bg-white");
            });
            // 将登陆之后保存的用户名渲染到页面
            $('.username').text(cookieHandle.getCookie('username'));
        }
    }
}());