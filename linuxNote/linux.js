// Linux 笔记
// Linux 和 windows的区别
// Linux 严格区分大小写，Linux中所有内容都以文件形式保存，包括硬件
// Linux 中没有扩展名，但是有约定的文件类型，用于方便管理员区分文件类型：
// 压缩包 ： *.gz ,*.bz2 *.tra.bz2 *.tgz 等
// 二进制软件包： .rpm
// 网页文件 ： *.html *.php
// 脚本文件： *.sh
// 配置文件： *.conf
// windows下的程序不能直接在Linux中安装和运行


// 虚拟机 VMware 官网http://www.vmware.com
// 安装虚拟机可以使用 VMware workstation 
// 还要下载 centOS 镜像文件，可以在阿里云下载镜像。整个过程其实和windows重装
// 系统差不多，区别在于要设置挂载点，根节点，home节点，boot节点（用于存放系统
// 文件启动），swap节点（虚拟内存？），boot节点会默认挂载到第一个SATA节点

// Linux 远程控制工具 Xshell；

// Linux 命令格式 ： 命令 [选项] [参数]  按两次tab键可以列出相关命令/文件提示
// ctrl + l 清屏快键 mkdir -p 文件结构 按文件夹结构创建文件树
// rmdir file 删除空文件  rm -rf file 彻底删除文件夹。f是指默认 危险操作！！
// cp 复制命令 -r 复制目录  -p 连带文件属性复制 -d 若源文件是链接文件，则复制
// 链接属性 -a 相当于 -pdr
// ll 即ls -l 命令。 mv [原文件或目录] [目标目录] 剪切命令 可用于改名

// 一级目录:
// bin sbin 目录保存的是系统命令 boot 启动目录 dev 特殊文件保存目录 etc 系统配置文件
// lib 函数库 home 普通用户目录 ,root 超级用户目录 media mnt misc空目录 用于挂载外设
// proc 和 sys 是内存过载点,不能操作 tmp临时目录 usr 系统软件资源目录 var 可变文档目录
// 链接命令 ln -s [原文件] [目标文件] 生成链接文件 -s 生成软链接
// 硬链接拥有相同的I节点和存储block块,可以看做是同一个文件,可通过i节点识别,
// 不能跨分区,不能针对目录使用
// 软链接: 类似windows快捷方式, 软链接有自己的I节点和block块,但是数据块中只保存
// 原文件的文件名和I节点号，并没有实际的文件数据．修改任意文件，另一个都会改变
// 删除原文件，软链接不能使用　


// 文件搜索：
// 搜索命令的命令whereis　which whoami whatis 
// echo $PATH 查看环境变量
// find [搜索范围] [搜索条件] Linux 中的通配符: *匹配任意内容. ?匹配任意一个字符
// [] 匹配任意一下中括号内的字符 find /root -name "*[cd]" 搜索以c或d结尾的文件
// -iname 不区分大小写 -user 按所有者搜索 -nouser 没有所有者的文件 查找垃圾文件
// -exec command {} \ 执行完上一条命令后，继续执行command {} \ 是固有格式
// grep命令： 在文件中搜索符合条件的字符串， -v 不包含的内容 -i 忽略大小写

// 帮助命令manual： man 

// & 后台符 把当前命令放入计算机后台执行，不占用当前操作终端
// runlevel 查看系统运行等级
// w 查看系统中的登际用户 tty1 系统本机终端。pts/0 第一个连接的远程终端
// who 只能看到用户的少量信息
// last 查询当前登陆和过去登陆的信息

// shell 作用转译输入的Ascii字符成2进制到linux内核

// echo 命令，输出后面的内容，不能包含!号.如果内容中有空格 ，则应当加“”，-e 后可加控制字符 \a b n r t v....
// \e[1;31m    \e[1; 表示开启颜色选项 31m 指颜色代码 一定要在结束时加上 \e[0m 关闭颜色选项
// # 为注释符号 但是#!/bin/bash 这个不是注释，这个是标准脚本开始头标记

// 脚本执行： 1 赋予执行权限，直接运行 chmod 755 fileName ./fileName
// 2 通过Bash调用执行脚本 bash fileName
// alias 查看系统中已经生效的别名 临时设置别名： alias ls=‘ls --color=never’
// 永久生效不需要写入环境变量文件 /.bashrc 中  unalias 删除别名

// 命令生效顺序：
// 1.用绝对路径/相对路径执行的命令。
// 2.执行别名
// 3：执行Bash的内部命令
// 4.执行按照$PATH环境变量定义目录查找到的第一个命令

// 快捷键： ctrl +a 行首 +e行尾 +u删除到行首 +z 命令放入后台 +r 在历史命令中搜索
// history -c 清空历史命令 -w 实时写入历史命令 
// ！n 重复执行第n条命令， ！！ 重复执行上一条命令 ！字符串 重复执行上一条以此字符开始的命令
// > 覆盖 >> 追加 错误输出重定向 2>>fileName 不能有空格
// command >> fileName 2>&1  和这个效果一样 command &>>fileName  
// command >> fileName1 2>>fileName2
// command &>/dev/null 放入系统黑洞，回收站
// wc < fileName 统计输入

// 多命令顺序执行：
// ; 顺序执行 && 逻辑与 只有前面的执行正确后面的才执行 || 逻辑或 只有前面的执行错误后面的才执行
// 管道符：｜命令1的正确输出作为命令2的操作对像
// more 分屏显示文件 netstat -an | grep ESTABLISHED

// 特殊符号：
// '' 严格字符内容 
// “” 中含$ ` \ 时，会有作用。
// ··反引号，括起来的是系统命令 ，bash会先执行它，和$()作用一样  如aa=`ls`
// $调用变量的值
// \ 转义符。跟在\这后的特殊符号 将失去特殊含义。变为普通字符

// rpm命令是RPM软件包的管理工具
// rpm -ivh your-package                # 直接安装
// rpmrpm --force -ivh your-package.rpm # 忽略报错，强制安装

// [root@localhost ~]# rpm -ql tree        # 查询
// [root@localhost ~]# rpm -e tree          # 卸载
// [root@localhost ~]# rpm -qa  			#列出所有安装过的包

// mysql 安装教程 https://www.runoob.com/mysql/mysql-install.html

// yum（ Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE中的Shell前端软件包管理器。
// yum常用命令
// 1.列出所有可更新的软件清单命令：yum check-update
// 2.更新所有软件命令：yum update
// 3.仅安装指定的软件命令：yum install <package_name>
// 4.仅更新指定的软件命令：yum update <package_name>
// 5.列出所有可安裝的软件清单命令：yum list
// 6.删除软件包命令：yum remove <package_name>
// 7.查找软件包 命令：yum search <keyword>
// 8.清除缓存命令:
// yum clean packages: 清除缓存目录下的软件包
// yum clean headers: 清除缓存目录下的 headers
// yum clean oldheaders: 清除缓存目录下旧的 headers
// yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的headers

// 语法
// chown [-cfhvR] [--help] [--version] user[:group] file...
// 参数 :

// user : 新的文件拥有者的使用者 ID
// group : 新的文件拥有者的使用者组(group)
// -c : 显示更改的部分的信息
// -f : 忽略错误信息
// -h :修复符号链接
// -v : 显示详细的处理信息
// -R : 处理指定目录以及其子目录下的所有文件
// --help : 显示辅助说明
// --version : 显示版本

// 阿里云ESC服务器布署mysql服务器  Zxk*845120 dms
// 教程链接：https://help.aliyun.com/document_detail/116727.html?spm=a2c4g.11186623.6.1204.13fb2022ivGz4e
// 运行以下命令更新YUM源。
// rpm -Uvh  http://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
// 运行以下命令安装MySQL。
// yum -y install mysql-community-server
// 运行以下命令查看MySQL版本号。
// mysql -V
// 返回结果如下，表示MySQL安装成功。
// mysql  Ver 14.14 Distrib 5.7.26, for Linux (x86_64) using  EditLine wrapper

// 运行以下命令启动MySQL服务。
// systemctl start mysqld
// 运行以下命令设置MySQL服务开机自启动。
// systemctl enable mysqld
// 运行以下命令查看/var/log/mysqld.log文件，获取并记录root用户的初始密码。
// grep 'temporary password' /var/log/mysqld.log 
// 执行​命令结果示例如下。
// 2020-04-08T08:12:07.893939Z 1 [Note] A temporary password is generated for root@localhost: xv
// 运行下列命令对MySQL进行安全性配置。
// mysql_secure_installation
// 一通yes同意
// 远程访问MySQL数据库
// 依次运行以下命令创建远程登录MySQL的账号。示例账号为dms、密码为123456。
// mysql> grant all on *.* to 'dms'@'%' IDENTIFIED BY '123456'; #使用root替换dms，可设置为允许root账号远程登录。
// mysql> flush privileges;
// 建议您使用非root账号远程登录MySQL数据库。
// 实际创建账号时，需将123456更换为符合要求的密码： 长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号。可以使用以下特殊符号：
// ()` ~!@#$%^&*-+=|{}[]:;‘<>,.?/
// 已经布署了Node环境的服务，再安装mysql会出错，原因未知，重置后的实例可以按以上部骤安装成功。
// 在本地cmd中用以下命令可以连接到此服务器：
// mysql -h47.115.136.23 -P3306 -umds -pZxk*845120 奇怪的是，这里的主机名就是实例公网IP，而不是阿里数据管理控制台中所显示的
// 172.18.140.180

// 将几个文件合并为一个文件:cat file1 file2 > file

// Linux 查看命令：
// 查看哪些端口被打开netstat -anp
// env # 查看环境变量资源
// uptime # 查看系统运行时间、用户数、负载
// iptables -L # 查看防火墙设置
// route -n # 查看路由表
// netstat -lntp # 查看所有监听端口
// netstat -antp # 查看所有已经建立的连接
// ps -ef # 查看所有进程
// top # 实时显示进程状态用户
// w # 查看活动用户
// last # 查看用户登录日志
// id # 查看指定用户信息
// chkconfig # 列出所有系统服务
// rpm -qa # 查看所有安装的软件包

// ps(process status)，用来查看当前运行的进程状态，一次性查看，如果需要动态连续结果使用top
// ​ linux上进程有5种状态:
// ​ \1. 运行(正在运行或在运行队列中等待)
// ​ \2. 中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号)
// ​ \3. 不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)
// ​ \4. 僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)
// ​ \5. 停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)
// ​ ps工具标识进程的5种状态码:
// ​ D 不可中断 uninterruptible sleep (usually IO)
// ​ R 运行 runnable (on run queue)
// ​ S 中断 sleeping
// ​ T 停止 traced or stopped
// ​ Z 僵死 a defunct (”zombie”) process
// ​ 命令参数：
// ​ -A 显示所有进程
// ​ a 显示所有进程
// ​ -a 显示同一终端下所有进程
// ​ c 显示进程真实名称
// ​ e 显示环境变量
// ​ f 显示进程间的关系
// ​ r 显示当前终端运行的进程
// ​ -aux 显示所有包含其它使用的进程
// ​ 实例：
// ​ （1）显示当前所有进程环境变量及进程间关系
// ​ ps -ef
// ​ （2）显示当前所有进程
// ​ ps -A
// ​ （3）与grep联用查找某进程
// ​ ps -aux | grep apache
// ​ （4）找出与 cron 与 syslog 这两个服务有关的 PID 号码
// ​ ps aux | grep '(cron|syslog)'

// ​ 显示当前系统正在执行的进程的相关信息，包括进程ID、内存占用率、CPU占用率等

// ​ 常用参数：

// ​ -c 显示完整的进程命令

// ​ -s 保密模式

// ​ -p <进程号> 指定进程显示

// ​ -n <次数>循环显示次数

// ​ 实例：

// ​ （1）

// ​ top - 14:06:23 up 70 days, 16:44, 2 users, load average: 1.25, 1.32, 1.35

// ​ Tasks: 206 total, 1 running, 205 sleeping, 0 stopped, 0 zombie

// ​ Cpu(s): 5.9%us, 3.4%sy, 0.0%ni, 90.4%id, 0.0%wa, 0.0%hi, 0.2%si, 0.0%st

// ​ Mem: 32949016k total, 14411180k used, 18537836k free, 169884k buffers

// ​ Swap: 32764556k total, 0k used, 32764556k free, 3612636k cached

// ​ PID USER PR NI VIRT RES SHR S %CPU %MEM TIME+ COMMAND

// ​ 28894 root 22 0 1501m 405m 10m S 52.2 1.3 2534:16 java

// ​ 前五行是当前系统情况整体的统计信息区，

// ​ 第一行，任务队列信息，同 uptime 命令的执行结果，具体参数说明情况如下：

// ​ 14:06:23 — 当前系统时间

// ​ up 70 days, 16:44 — 系统已经运行了70天16小时44分钟（在这期间系统没有重启过的吆！）

// ​ 2 users — 当前有2个用户登录系统

// ​ load average: 1.15, 1.42, 1.44 — load average后面的三个数分别是1分钟、5分钟、15分钟的负载情况。

// ​ load average数据是每隔5秒钟检查一次活跃的进程数，然后按特定算法计算出的数值。如果这个数除以逻辑CPU的数量，结果高于5的时候就表明系统在超负荷运转了。

// ​ 第二行，Tasks — 任务（进程），具体信息说明如下：

// ​ 系统现在共有206个进程，其中处于运行中的有1个，205个在休眠（sleep），stoped状态的有0个，zombie状态（僵尸）的有0个。

// ​ 第三行，cpu状态信息，具体属性说明如下：

// ​ 5.9%us — 用户空间占用CPU的百分比。

// ​ 3.4% sy — 内核空间占用CPU的百分比。

// ​ 0.0% ni — 改变过优先级的进程占用CPU的百分比

// ​ 90.4% id — 空闲CPU百分比

// ​ 0.0% wa — IO等待占用CPU的百分比

// ​ 0.0% hi — 硬中断（Hardware IRQ）占用CPU的百分比

// ​ 0.2% si — 软中断（Software Interrupts）占用CPU的百分比

// ​ 备注：在这里CPU的使用比率和windows概念不同，需要理解linux系统用户空间和内核空间的相关知识！

// ​ 第四行,内存状态，具体信息如下：

// ​ 32949016k total — 物理内存总量（32GB）

// ​ 14411180k used — 使用中的内存总量（14GB）

// ​ 18537836k free — 空闲内存总量（18GB）

// ​ 169884k buffers — 缓存的内存量 （169M）

// ​ 第五行，swap交换分区信息，具体信息说明如下：

// ​ 32764556k total — 交换区总量（32GB）

// ​ 0k used — 使用的交换区总量（0K）

// ​ 32764556k free — 空闲交换区总量（32GB）

// ​ 3612636k cached — 缓冲的交换区总量（3.6GB）

// ​ 第六行，空行。

// ​ 第七行以下：各进程（任务）的状态监控，项目列信息说明如下：

// ​ PID — 进程id

// ​ USER — 进程所有者

// ​ PR — 进程优先级

// ​ NI — nice值。负值表示高优先级，正值表示低优先级

// ​ VIRT — 进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES

// ​ RES — 进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA

// ​ SHR — 共享内存大小，单位kb

// ​ S — 进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程

// ​ %CPU — 上次更新到现在的CPU时间占用百分比

// ​ %MEM — 进程使用的物理内存百分比

// ​ TIME+ — 进程使用的CPU时间总计，单位1/100秒

// ​ COMMAND — 进程名称（命令名/命令行）


show status like 'threads%'; 查看mysql当前连接数
​