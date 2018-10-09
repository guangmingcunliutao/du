<?php
// 设置字符集
header("Content-Type:text/html;charset=utf-8");
// 允许所有域名跨域
header("Access-Control-Allow-Origin:*");
// 获取传过来的数据
$username = $_POST['username'];
$sign = $_POST['sign'];
// 建立数据连接
$link = new mysqli('localhost', 'root', '9511', 'du_db', '3306');
$link->query("set names 'utf8'");
$link->query("set charactor set 'utf8'");

$select_sql = "SELECT username from user where username = '$username'";
$result = $link->query($select_sql);
$row = $result->fetch_assoc();
if($row != null){
    $arr = ["code" => "1000", "msg" => "用户名已存在"];
    $arr = json_encode($arr);
    echo $arr;
}else {
    if($sign == 2){
        $password = $_POST['password'];
        $phone = $_POST['phone'];
        $insert_sql = "INSERT into user values (null,'$username','$password','$phone')";
        $result = $link->query($insert_sql);
        if ($result) {
            $arr = ["code" => "200", "msg" => "注册成功"];
        }
        $arr = json_encode($arr);
        echo $arr;
    }else if($sign == 1){
        $arr = ["code" => "201", "msg" => "此用户名可以注册"];
        $arr = json_encode($arr);
        echo $arr;
    }
}
















/* if ($password == '') {
    $select_sql = "SELECT username from user where username = '$username'";
    $result = $link->query($select_sql);
    $row = $result->fetch_assoc();
    if ($row != null) {
        $arr = ["code" => "1000", "msg" => "用户名已存在"];
        $arr = json_encode($arr);
        echo $arr;
    } else if ($row == null) {
        
    }
} else if ($password != '') {
    $select_sql = "SELECT username from user where username = '$username'";
    $result = $link->query($select_sql);
    $row = $result->fetch_assoc();
    if ($row != null) {
        $arr = ["code" => "1000", "msg" => "用户名已存在"];
        $arr = json_encode($arr);
        echo $arr;
    } else if ($row == null) {
        
    }
} */
?>