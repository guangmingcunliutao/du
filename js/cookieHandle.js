// cookie的操作封装
var cookieHandle = {
	// name：cookie的名字		value：cookie的值	day：cookie有限期
	setCookie: function (name, value, day) {
		var _date = new Date();
		_date.setDate(_date.getDate() + day);
		document.cookie = name + '=' + value + ';expires=' + _date;
	},
	getCookie: function (name) {
		var str = document.cookie;
		var arr = str.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var _arr = arr[i].split('=');
			if (_arr[0] == name) {
				return _arr[1];
			}
		}
	},
	removeCookie: function (name) {
		cookieHandle.setCookie(name, 1, -1);
	}
}