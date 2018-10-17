var doregister = (function () {
    return {
        init: function () {
            this._nameInp = $('#username');
            this._phoneInp = $('#phone');
            this._pwdInp = $('#pwd');
            this._regBtn = $('.register');
            this.event();
        },
        event: function () {
            var _this = this;
            // 用户名文本框change事件
            this._nameInp.on('change', doregister.nameChangeHand);
            // 手机号事件
            this._phoneInp.on('change', doregister.phoneChanegeHand);
            // 注册事件
            this._regBtn.on('click', doregister.regClickHand);
        },
        // 用户名文本框change事件处理程序
        nameChangeHand: function () {
            var username = doregister._nameInp.val();
            var regName = /^\w.{0,15}$/;
            if (regName.test(username)) {
                // 发送ajax请求
                var url = 'php/doregister.php';
                var data = {
                    username: doregister._nameInp.val(),
                    sign: 1
                }
                $.post(url, data, doregister.nameDataHand);
            }else{
                alert('用户名只能是6到15位的数字字母下划线');
            }
        },
        // 处理返回的数据
        nameDataHand: function (data) {
            // 将返回的json字符串转换为对象
            data = JSON.parse(data);
            if (data.code == 1000) {
                alert(data.msg);
            } else if (data.code == 201) {
                // alert(data.msg);
            }
        },
        // 手机号事件处理程序
        phoneChanegeHand: function () {
            var phone = doregister._phoneInp.val();
            var regPhone = /^1[35789]\d{9}$/;
            if (regPhone.test(phone) == false) {
                alert('请输入正确的手机号');
            }
        },
        // 注册事件处理程序
        regClickHand: function () {
            var username = doregister._nameInp.val();
            var password = doregister._pwdInp.val();
            var phone = doregister._phoneInp.val();
            var regPwd = /^\w{6,16}$/;
            if(regPwd.test(password)){
                var url = 'php/doregister.php';
                var data = {
                    sign:2,
                    username:username,
                    password:password,
                    phone:phone
                }
                $.post(url,data,doregister.regDataHand);
            }else{
                alert('密码不符合要求');
            }
        },
        regDataHand: function (data) {
            data = JSON.parse(data);
            if (data.code == 200) {
                alert(data.msg);
            } else if (data.code == 1000) {
                alert(data.msg);
            }
        }
    }
}());