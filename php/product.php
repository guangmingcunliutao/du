<?php
// 设置字符集
header("Content-Type:text/html;charset=utf-8");
// 允许所有域名跨域
header("Access-Control-Allow-Origin:*");
$link = new mysqli('localhost','root','9511','du_db','3306');
// 设置数据库字符集
$link->query("set names 'utf8'");
$link->query("set charactor set 'utf8'");
$select = "SELECT * from product";
$result = $link -> query($select);
$num = mysqli_num_rows($result);
$arr = array();
for($i=0;$i<$num;$i++){
    $rows = $result -> fetch_assoc();
    array_push($arr,$rows);
}
echo json_encode($arr);
mysqli_close($link);
?>