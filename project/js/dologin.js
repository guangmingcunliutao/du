var dologin = (function () {
    return {
        init: function () {
            this._loginBtn = $('.login');
            this._nameInp = $("input[name=username]");
            this._pwdInp = $("input[name=password]");
            this.event();
        },
        event: function () {
            var _this = this;
            // 登录点击事件
            this._loginBtn.on('click', this.loginClickHand);
        },
        // 登录点击事件处理程序
        loginClickHand: function () {
            var username = dologin._nameInp.val();
            var password = dologin._pwdInp.val();
            if (username == '' || password == '') {
                alert('用户名或密码不能为空');
            } else {
                // 发送请求
                var url = '../php/dologin.php';
                var data = {
                    username: username,
                    password: password || ''
                };
                $.post(url, data, dologin.handlDate);
            }
        },
        // 回调函数处理返回数据
        handlDate: function (data) {
            // 将接收到的json字符串数据转换为对象
            data = JSON.parse(data);
            if (data.code == 1000) {
                alert(data.msg);
            } else if (data.code == 200) {
                // alert(data.msg);
                cookieHandle.setCookie('username',data.data.username,1);
                window.location.assign('index.html');
            }
        }
    }
}());