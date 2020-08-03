// here I keep my note about git 
// git有图形化界面方便使用，sourcetree
// git comands:
// git add filename 提交工作区已经修改的文件到暂存区
// git commit -m "some describes" 将暂存区的文件或修改记录更新到git仓库，同时创建log id 用来标注回滚位置
// git rm filename 和 rm filename 前者直接提交到暂存区，后者只是在工作区删除此文件
// git checkout 清空未add到暂存区的工作区内容
// git status 查看 git 仓库状态
// git init 初始化git仓库
// echo " # demo_git" >> filename 从行程仓库获取文件
// git remote add origin git@github.com:idxiao9/demo_git.git 创建远程连接
// git push -u origin master 提交本地git仓库内容到远程仓库 第一次
// 提交需要-u origin master 指向一下分支。 以后可以只用git push
// ll 查看现在目录下的文件 ls -a 列出文件夹下所有文件，包括隐藏文件
// cat filename 显示文件内容 vim filename 编辑文件，如果文件不存在，则会先新建。
// vim 编辑时，i 写入内容，esc 退出写入 ：wq 退出编辑
// git clone git@github.com:idxiao9/demo_git 克隆远程仓库，用来克隆的文件夹必须没有
// 被 git init 过。
// pwd 查看当前文件位置，git log 查看commit记录 git reset --hard id 回滚
// echo "something" >> filename echo 输出的意思，将something 写入到文件中 >>追加的意思


// 标签管理
// git tag 查看所有标签 git tag filename 创建标签
// git tag -a filename -m "some info" 指定提交时的信息 git tag -d filename 删除标签
// git push origin filename 标签发布

// 分支管理
// git branch branchName 创建分支  git branch 查看所有分支
// git checkout branchName 切换到branchName分支上
// git merge branchName 要先切换到master分支，然后运行此命令合并分支
// git branch -d branchName 删除此分支
 