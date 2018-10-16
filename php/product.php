<?php
// 设置字符集
header("Content-Type:text/html;charset=utf-8");
// 允许所有域名跨域
header("Access-Control-Allow-Origin:*");
$link = new mysqli('localhost','root','9511','du_db','3306');
// 设置数据库字符集
$link->query("set names 'utf8'");
$link->query("set charactor set 'utf8'");
$select_sql = "SELECT * from product";
$result = $link -> query($select_sql);
// 返回数据库结果集行数
$num = mysqli_num_rows($result);
$arr = array();
for($i=0;$i<$num;$i++){
    // 利用fetch_assoc方法查找数据只返回一条，并且往后查找的特行，将数据push到数组
    $rows = $result -> fetch_assoc();
    array_push($arr,$rows);
}
echo json_encode($arr);
mysqli_close($link);
?>