/*
Linux 200多个命令
Ubuntu-terminal
ctrl shift + 窗口变大
ctrl - 窗口变小
ls 查看当前路径的文件和文件夹
pwd
tree /
ls / 根目录的内容
cd /c/Users/wanshaobo/Desktop/
ls -a 多了.和..，称为相对路径，同时显示隐藏文件
touch 1.txt 创建可见文件
touch .1.txt 创建隐藏文件
mkdir abc 创建文件夹
ls -l 以列表方式显示（容量单位BYTE）
ls -l -h 以列表方式显示（容量单位KB MB GB TB）
ls -a -l -h 参数的先后顺序无所谓
ls -alh 混合参数
ls /c/Users/wanshaobo/Desktop/ -alh 选项+参数
/home/wanshaobo linux系统主用户目录，也就是终端打开的默认路径
cd change directory
ls --help 查看命令的帮助信息
man ls 查看命令的帮助信息 q退出 f下一屏 b上一屏
manual 手册
man 1 open
man 2 open
...
man 8 open
自动补全 tab
cat 1.txt 查看文件内容
gedit 1.txt 编辑文件
history 查看历史命令
!history数字 执行那个编号的命令
rm 1.txt 删除这个文件
ls 1* 查看1开头的文件和文件夹 通配符 *匹配0个或多个
ls *txt
ls 2? 以2开头的跟一个字符 ?匹配一个
ls 2?? 以2开头的跟两个字符
ls 1[12345]3.txt
ls > print.txt 重定向：把原本显示在终端的内容存储到一个文件中，原文件原来的文件全部被删除 如果没有print.txt会创建
ls >> print.txt 追加：把原本显示在终端的内容存储到一个文件的末尾 如果没有print.txt会创建
more print.txt 以分屏方式查看文件内容 q退出 f下一屏 b上一屏
la -alh /bin | more
ls;ls -alh 多个命令一起执行
cd / 两次tab键，查看这个目录下所有内容
cd ~ 切换到当前用户的主目录/home/wanshaobo
cd - 进入上次所在目录
ctrl+c 取消命令 不执行命令
tree 以目录树的方式显示文件夹中的内容
mkdir A/B/C/test.txt -p 自动创建test.txt文件依赖的文件目录
rmdir B 删除文件夹
rmdir B 无法删除Directory not empty
rm B -r 递归删除 B文件夹下面有文件 B是文件夹
ln 源文件 链接文件 建立硬链接文件
ln -s 源文件 链接文件 建立软链接文件
mv 1.txt 2.txt 重命名1为2
mv 1.txt wan/ 将1.txt文件剪切并粘贴到wan文件夹中
mv wan/ wanshaobo 将wan文件夹重命名为wanshaobo
cat 1.txt 2.txt > print.txt 将1和2文件的内容合并到print.txt中
grep 文本搜索工具
ls /bin/ > print.txt
grep '^ntfs' print.txt 显示查找到的内容 以ntfs开头
grep 'ntfs$' print.txt 显示查找到的内容 以ntfs结尾
grep 'ntfs' print.txt 显示查找到的内容
grep -n 'ntfs' print.txt 带上行号
grep -v 'ntfs' print.txt 不包含ntfs
cp 1.txt A 将1.txt文件复制到A文件夹下
cp A B -r 如果是文件夹复制，需要递归操作
find / -name '*s' 在根目录下按照文件名找文件
todo 学习节点 人工智能+py高级\第1章 python基础\第1节 linux操作系统基础\02.linux命令以及vim编辑器 02-tar压缩和解压缩、which命令
*/