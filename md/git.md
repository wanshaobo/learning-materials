#### 2、撤销commit

###### 撤销git add . 撤销commit 不删除工作空间改动代码
git reset HEAD^
git reset --mixed HEAD^;//--mixed 默认参数，可有可有
git reset fb39ad77;//回滚到指定的commitID

###### ^表示撤销一次commit，^^表示回退两次commit，也可以有多次，同时可以用~n表示
git reset HEAD^
git reset HEAD~1
git reset HEAD^^
git reset HEAD~2
git reset HEAD^^^
git reset HEAD~3

###### 不撤销git add . 撤销commit 不删除工作空间改动代码
git reset --soft HEAD^

###### 撤销git add . 撤销commit 删除工作空间改动代码
git reset --hard HEAD^
git reset --hard fb39ad77;//回滚到指定的commitID

###### 修改commit注释
git commit --amend
> 此时会进入默认vim编辑器，修改注释完毕后保存就好了

#### 命令行报错More?
> git reset --hard HEAD^ 显示More?
因为cmd控制台中换行符默认是^，而不是\ ，所以它的More？的意思是问你下一行是否需要再输入，而^ 符号就被当做换行符而被git命令忽略掉了。
建议使用git命令窗口，不要使用cmd命令窗口
或者使用 ~1 替代 ^

###### 撤销暂存区的修改，也就是 git add . 的操作
git reset HEAD

###### 没有执行git add .的操作，撤销本地某个文件的改动
git checkout -- file

###### 撤销 git add 某个文件
git reset HEAD a.js

#### 将被tracked的文件添加到 暂存区 并 提交
git commit -a -m '本次提交的描述信息' # git add . && git commit -m ''
git commit -am '本次提交的描述信息' # git add . && git commit -m ''

#### 3、push

###### 首次提交
git push -u origin master
git push --set-upstream origin maste

#### 4、配置别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch

#### 5、fetch 从一个代码仓库下载对象和引用
> git pull # git fecht && git merge

#### 6、远程仓库代码回滚
>回滚代码前，先从当前分支切出一个新的分支 $git checkout -b fixhot_repaire
git log -3 查看提交的记录
git reflog -3 ???TODO
git reset --hard HEAD^ 回滚本地代码到上一次提交成功的时候(删除本地代码修改 && add && commit)
git reset --hard HEAD-3
git reset --hard commit_id
git push -f 强制提交本地回滚后的代码到当前分支远程仓库，此时远程仓库代码回滚成功
git push -f origin feature 强制提交本地回滚后的代码到指定分支远程仓库，此时远程仓库代码回滚成功

#### 7、取消文件追踪
https://github.com/github/gitignore/blob/master/Node.gitignore
git rm -r --cached . 对全部文件取消追踪 保留本地文件
git rm -r --f . 对全部文件取消追踪 删除本地文件
git rm --cached readme1.txt 保留本地文件
git rm --f readme1.txt 删除本地文件

如果创建.gitignore文件之前就已经push项目了，那么即时你在.gitignore文件中写入新的规则，这些规则也不会起作用，此时需要先把本地缓存删除（改变成未track状态），然后再提交
如果文件曾经被 Git 记录过，那么.gitignore 就对它们完全无效。

