# du
跟远程仓库建立连接后，第一次提交出现问题：non-fast-forward
    提交被拒绝，提交冲突
    解决：先把远程仓库pull下来，再push，但是还是同样的问题，最后执行git pull --allow-unrelated-histories(允许合并不相关内容)，问题解决。另一种是push -f强推(不推荐)

提取公共部分问题：每一个公共部分模块，用一个盒子包着，暂时只发现了在load方法的回调函数里面获取加载的节点，并处理节点

<!-- 

写详情页从数据库拿数据，返回了重复的结果，修改sql语句解决
php处理数据，返回json数据


使用gulp处理文件，connect开启服务，但是node没有php解析器，所有请求php的路径要绝对路径到Apache服务器去

 -->