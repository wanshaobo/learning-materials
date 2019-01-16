#### 1、git tag
> 作用：给当前版本做一个标记，tagName和commitID一一对应，因为commitID不容易记忆，因此标签可以当做是版本库的一个快照。
使用tag标签来管理项目的版本号

>标签和commitID挂钩，如果commitID出现在多个分支，那么在每个分支上都可以看到这个标签

###### 切换到需要打标签的分支
git checkout feature

###### 添加标签，标签默认打在最新的commit
git tag v1.0

###### 给指定commitID添加标签，七位字符的ID号
git tag v1.0 f52c633

###### 带有名称和说明的标签，commitID号可有可无
git tag -a v1.0 -m '这个版本的一些说明' f52c633

###### 查看当前本地的所有tag，标签列表按照字母排序的，而非时间顺序
git tag
git tag -l 'v0.1.*' # 查看0.1.0 0.1.1等0.1下面的所有tag

###### 查看标签信息
git show tagName

###### 删除本地tag
git tag -d v1.0

###### 将指定tag推送到远程代码仓库
git push origin v1.0

###### 将全部tag推送到远程代码仓库
git push origin --tags

#### 删除远程仓库的tag，方案一
git tag -d v1.0
git push origin :refs/tags/v1.0

#### 删除远程仓库的tag，方案二
git tag -d v1.0
git push origin --delete tag v1.5.3 # 有待验证


#### 2、撤销commit

###### 撤销git add . 撤销commit 不删除工作空间改动代码
git reset HEAD^
git reset --mixed HEAD^;//--mixed 默认参数，可有可有

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

