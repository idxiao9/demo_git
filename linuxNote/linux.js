Linux 笔记
Linux 和 windows的区别
Linux 严格区分大小写，Linux中所有内容都以文件形式保存，包括硬件
Linux 中没有扩展名，但是有约定的文件类型，用于方便管理员区分文件类型：
压缩包 ： *.gz ,*.bz2 *.tra.bz2 *.tgz 等
二进制软件包： .rpm
网页文件 ： *.html *.php
脚本文件： *.sh
配置文件： *.conf
windows下的程序不能直接在Linux中安装和运行


虚拟机 VMware 官网http://www.vmware.com
安装虚拟机可以使用 VMware workstation 
还要下载 centOS 镜像文件，可以在阿里云下载镜像。整个过程其实和windows重装
系统差不多，区别在于要设置挂载点，根节点，home节点，boot节点（用于存放系统
文件启动），swap节点（虚拟内存？），boot节点会默认挂载到第一个SATA节点

Linux 远程控制工具 Xshell；

Linux 命令格式 ： 命令 [选项] [参数]  按两次tab键可以列出相关命令/文件提示
ctrl + l 清屏快键 mkdir -p 文件结构 按文件夹结构创建文件树
rmdir file 删除空文件  rm -rf file 彻底删除文件夹。f是指默认 危险操作！！
cp 复制命令 -r 复制目录  -p 连带文件属性复制 -d 若源文件是链接文件，则复制
链接属性 -a 相当于 -pdr
ll 即ls -l 命令。 mv [原文件或目录] [目标目录] 剪切命令 可用于改名

一级目录:
bin sbin 目录保存的是系统命令 boot 启动目录 dev 特殊文件保存目录 etc 系统配置文件
lib 函数库 home 普通用户目录 ,root 超级用户目录 media mnt misc空目录 用于挂载外设
proc 和 sys 是内存过载点,不能操作 tmp临时目录 usr 系统软件资源目录 var 可变文档目录
链接命令 ln -s [原文件] [目标文件] 生成链接文件 -s 生成软链接
硬链接拥有相同的I节点和存储block块,可以看做是同一个文件,可通过i节点识别,
不能跨分区,不能针对目录使用
软链接: 类似windows快捷方式, 软链接有自己的I节点和block块,但是数据块中只保存
原文件的文件名和I节点号，并没有实际的文件数据．修改任意文件，另一个都会改变
删除原文件，软链接不能使用　


文件搜索：
搜索命令的命令whereis　which whoami whatis 
echo $PATH 查看环境变量
find [搜索范围] [搜索条件] Linux 中的通配符: *匹配任意内容. ?匹配任意一个字符
[] 匹配任意一下中括号内的字符 find /root -name "*[cd]" 搜索以c或d结尾的文件
-iname 不区分大小写 -user 按所有者搜索 -nouser 没有所有者的文件 查找垃圾文件
-exec command {} \ 执行完上一条命令后，继续执行command {} \ 是固有格式
grep命令： 在文件中搜索符合条件的字符串， -v 不包含的内容 -i 忽略大小写

帮助命令manual： man 

& 后台符 把当前命令放入计算机后台执行，不占用当前操作终端
runlevel 查看系统运行等级