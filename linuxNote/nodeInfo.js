使用NVM安装多版本。
NVM（Node Version Manager）是Node.js的版本管理软件，使您可以轻松在Node.js各个版本间进行切换。适用于长期做node开发的人员或有快速更新node版本、快速切换node版本的场景。

完成以下操作，使用NVM安装多个Node.js版本：
使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。
yum install git
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
激活NVM。
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
列出Node.js的所有版本。
nvm list-remote
安装多个Node.js版本。
nvm install v6.9.5
nvm install v7.4.0
运行nvm ls查看已安装的Node.js版本。
本示例使用的版本为v7.4.0。返回结果如下所示。

[root@iZXXXXZ .nvm]# nvm ls
         v6.9.5
->       v7.4.0
         system
stable -> 7.4 (-> v7.4.0) (default)
unstable -> 6.9 (-> v6.9.5) (default)
运行nvm use <版本号>可以切换Node.js版本。
例如，切换Node.js版本至v7.4.0。返回结果如下所示。

[root@iZXXXXZ .nvm]# nvm use v7.4.0
Now using node v7.4.0

nvm提示nvm: command not found
解决方法:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
将以上代码加入到~/.bash_profile 文件中去，并且重启终端

nvm 设置默认 node 版本:
nvm alias default v5.0.0