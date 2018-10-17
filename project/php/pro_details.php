<?php
// 设置字符集
header("Content-Type:text/html;charset=utf-8");
// 允许所有域名跨域
header("Access-Control-Allow-Origin:*");
// 获取传送过来的id
$pro_id = $_GET['pro_id'];
// 建立数据库连接
$link = new mysqli('localhost', 'root', '9511', 'du_db', '3306');
// 设置数据库字符集
$link->query("set names 'utf8'");
$link->query("set charactor set 'utf8'");
// 准备sql语句
$select_sql = "select pro_img.* from pro_img where pro_name= (SELECT product.pro_name from product where product.id = $pro_id)";
$result = $link -> query($select_sql);
$rows = $result -> fetch_object();
$arr = array();
$arr_img = array();
// php循环对象
foreach($rows as $key => $val){
    // 判断对象中的属性(字符串格式)，是否含有某个字段
    if(strstr($key,"pro_img")){
        if($val != '' || $val != null){
            array_push($arr_img,$val);
        }
    }
}
$arr = array("pro_name" => "$rows->pro_name","img_list" => $arr_img);
echo json_encode($arr);
?>