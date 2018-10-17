<?php
// 设置字符集
header("Content-Type:text/html;charset=utf-8");
// 允许所有域名跨域
header("Access-Control-Allow-Origin:*");
// 获取post请求发送过来的数据
// 从对象中抽取数据
$username = $_POST['username'];
$password = $_POST['password'];
// 建立数据库连接
$link = new mysqli('localhost', 'root', '9511', 'du_db', '3306');
// 设置数据库字符集
$link->query("set names 'utf8'");
$link->query("set charactor set 'utf8'");
if ($password == '') {
    echo '200';
} else if ($password != '') {
    $select_sql = "SELECT username,password from user where username = '$username' && password = '$password'";
    $result = $link->query($select_sql);
    $row = $result->fetch_assoc();
    // $row = json_encode($row);
    if ($row == null) {
        $arr = array("code" => "1000", "msg" => "登录失败，用户名或密码错误");
    } else {
        $arr = array("code" => "200", "msg" => "登录成功","data" =>array("username"=>"$username"));
    }
    echo json_encode($arr);
}
mysqli_close($link);
?>