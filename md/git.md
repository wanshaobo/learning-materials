#### git 撤销commit

回退到上一次commit:不删除工作空间改动代码，撤销commit，并且撤销git add .
git reset HEAD^
git reset --mixed HEAD^;//--mixed 默认参数，可有可有

^表示回退一次commit，^^表示回退两次commit，也可以有多次，同时可以用~n表示
git reset HEAD^
git reset HEAD~1
git reset HEAD^^
git reset HEAD~2
git reset HEAD^^^
git reset HEAD~3

--soft 不删除工作空间改动代码，撤销commit，不撤销git add .
git reset --soft HEAD^

--hard 删除工作空间改动代码，撤销commit，撤销git add .
git reset --hard HEAD^

#### 修改commit注释

commit注释写错了，只是想改一下注释
git commit --amend;此时会进入默认vim编辑器，修改注释完毕后保存就好了

#### 命令行报错More?
git reset --hard HEAD^ 显示More?
因为cmd控制台中换行符默认是^，而不是\ ，所以它的More？的意思是问你下一行是否需要再输入，而^ 符号就被当做换行符而被git命令忽略掉了。
建议使用git命令窗口，不要使用cmd命令窗口
或者使用 ~1 替代 ^

#### git 撤销 add
git reset HEAD;撤销add操作
git reset HEAD;撤销add a.js 操作
