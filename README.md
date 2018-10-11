# du
跟远程仓库建立连接后，第一次提交出现问题：non-fast-forward
    提交被拒绝，提交冲突
    解决：先把远程仓库pull下来，再push，但是还是同样的问题，最后执行git pull --allow-unrelated-histories(允许合并不相关内容)，问题解决。另一种是push -f强推(不推荐)