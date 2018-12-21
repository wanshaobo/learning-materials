/*
Linux 200多个命令
Ubuntu-terminal
ctrl shift + 窗口变大
ctrl - 窗口变小
ls 查看当前路径的文件和文件夹
ls ../  查看上一级目录的文件和文件夹
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
rm B -r recursion-递归删除 B文件夹下面有文件 B是文件夹
rm B -rf force-强制删除
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
tar -cvf python.tar *.py 打包
tar -xvf python.tar 解包
tar -zcvf python.tar.gz *.py 压缩打包
tar -zxvf python.tar.gz 解压缩包
ll === ll -la
tar -jcvf xx.tar.bz2 *.py 压缩打包（比gz大一点）
tar -jxvf python.tar.bz2 解压缩包
zip zzz.zip *py
unzip zzz.zip
压缩率：gz > bz2 > zip
tar -zxvf python.tar.gz -C wan/ 解压缩包到指定目录
unzip -d wan/ zzz.zip 解压缩包到指定目录
which ls 查看命令所在路径
linux的所有命令都是 /bin 目录下的一个可执行文件
cal 查看日历calendar
cal -y 2018 查看2018年所有日历
date 查看当前日期
date > date.txt 控制台打印的日期存储到date.txt
cal -y 2018 > date.txt 控制台打印的日历存储到date.txt
date "+%Y===%m===%d"
date "+%y===%m===%d"
date "+%y年%m月%d日"
ps 任务管理器
ps -aux 所有运行程序显示出来
top 查看进程 cpu使用率
q 退出
htop
kill -9 pid 强制结束进程
reboot
shutdown -h now
shutdown -h +10 10分钟后关机
shutdown -h 20:20 定时20:20关机
init0 关机
init 6 重启
sudo snap install tree
sudo apt install tree
df
df -h 查看硬盘的使用情况
du
du -h 查看当前路径文件夹的容量
ifconfig 每个网卡信息
sudo apt install net-tools
ifconfig ens33 172.16.7.138 修改网卡ip
ping 172.16.7.138
ifconfig | grep 172
liunx是多用户多任务操作系统
sudo useradd wan -m 创建账户，-m并在home目录下创建wan家目录(文件夹)
ls /home/ 查看账户文件夹，但并不是所有文件夹都是账户
cat /etc/passwd 查看账户
su wan01 切换账户
su - wan01 切换账户同时切换到家目录
sudo passwd wan01 设置账户密码
whoami 查看当前是哪个用户
who 查看当前登录的用户，多个计算机登录了这台计算机
exit 退出当前账户到主用户
ssh wanshaobo@172.16.7.13 远程登录某个电脑
ctrl + shift + t 终端下打开新的标签，利于切换用户
alt +1 | alt + 2 切换账户标签
windows系统没有ssh命令 需要安装xmanager xshell
sudo userdel wan 删除用户
sudo userdel -r wan 删除用户同时删除家目录
sudo -s 切换到超级管理员root
sudo root 无法切换，不知道密码
$ 普通用户
# 超级管理员
cat /etc/group 查看组
sudo groupadd wan03 创建组
sudo groupdel wan03 删除组
groupmod tab键多次，可以查看所有组
cat /etc/group | grep sudo 查找组中带sudo的关键字
cat /etc/group | grep adm 查找组中带adm的关键字
sudo usermod -a -G adm wan01把一个用户加入到一个组中(-a add 添加)(-G adm 指定一个组)
sudo usermod -a -G sudo wan01把一个用户加入到一个组中(-a add 添加)(-G adm 指定一个组)
chown 修改文件的拥有者
chgrp wan01 1.py 修改文件所属的组
dre-re-r-- 文件权限 第一位 d文件及 - 文件 第二三四位 文件拥有者的权限 第五六七位 同组者的权限 第八九十位 其他人的权限
-re-re-r-- rwx可读可写可执行
修改权限：字母法ugo(user group other) 数字法(421 rwx 可取1 2 3 4 5 6 7)
chmod u=rwx 2.py
chmod u=x 2.py
chmod g=x 2.py
chmod r=x 2.py
chmod u=r,g=r,o=r 2.py
chmod u=,g=,o= 2.py
chmod 137 2.py 拥有者只有执行权限，同组者有可写可执行权限，其他人拥有可读可写可执行权限
vi 编辑器之神vim
杀掉进程:ps -aux && kill pid

编辑器模式：
命令模式
:末行模式
shift+zz 保存并退出
i前插入
a后插入
o换行插入
I行首插入
A行末插入
O上一行插入
yy复制行
p粘贴到下一行
dd剪切行
u撤销
ctrl+r 取消撤销
D从当前光标开始剪切到行末
d0从当前光标开始剪切到行首
dw删一个单词
x删除当前的光标字符
X删除当前光标前面的字符
4yy复制4行
2dd剪切2行
h向左移动光标
j向下移动光标
k向上移动光标
l向右移动光标
M光标移动到当前屏幕的中间
L光标移动到当前屏幕的末行
H光标移动到当前屏幕的首行
ctrl+f向下翻一页
ctrl+b向上翻一页
ctrl+d向下翻半页
ctrl+u向上翻半页
20G快速回到第20行
G快速回到整个代码的最后一行
gg快速回到整个代码的第一行
:set number :set nu 显示行号
:set nonumber :set nonu 隐藏行号
打开vim的时候自动设置行号呢，这个时候就需要我们设置配置文件，两种配置方式
/etc/vimrc 系统范围的初始化配置
～/.vimrc 个人的vim初始化配置
vim ~/.vimrc && set number || set nu
w向后跳到一个单词的长度，即跳到下一个单词的开始处
b向前跳到一个单词的长度，即跳到上一个单词的开始处
ctrl+n 自动补全

选中一片代码，向左向右移动代码
v 上下左右 > < .
V 上下左右 > < .

{跳到一片代码的首部
}跳到一片代码的末尾
>> 文本行右移
<< 文本行左移

.重复上一次的命令

r替换一个字符 m M
R替换光标以及后边的字符
:%s/hello/world/g 全局替换
:11,16s/hello/world/g 替换11-16行

/wan 搜索wan
n向下找搜索到的结果 N向上找搜索到的结果
搜索一个不存在的，可以取消高亮显示效果

:set nohlsearch
:set hlsearch 搜索结果高亮显示

vim里执行shell下命令：末行模式输入!，后面跟命令

编辑(插入)模式
esc退出到命令模式

末行模式
esc退出到命令模式
w保存
q退出
wq保存并退出
q!强制退出(没有未保存提示)
x保存并退出

windows连Ubuntu系统 win+r \\175.**.*.**

ssh服务器两个电脑都需要安装才能登陆成功

就业班 进程 线程 协成 网络编程
*/

/*
shell脚本 运维人员
vi test.sh

ls
pwd
ls /

chmod u+x test.sh
./test.sh 执行这个文件

*/

/*
vim的这些优势主要体现在以下几个方面：
1、多级撤消
我们知道在vi里，按 u只能撤消上次命令，而在vim里可以无限制的撤消。
2、易用性
vi只能运行于unix中，而vim不仅可以运行于unix,windows ,mac等多操作平台。
3、语法加亮
vim可以用不同的颜色来加亮你的代码。
4、可视化操作
就是说vim不仅可以在终端运行，也可以运行于x window、 mac os、 windows。
5、对vi的完全兼容
某些情况下，你可以把vim当成vi来使用。

vi和vim都是Linux中的编辑器，不同的是vim比较高级，可以视为vi的升级版本。vi使用于文本编辑，但是vim更适用于coding。

vi有3个模式：插入模式、命令模式、低行模式。
插入模式：在此模式下可以输入字符，按ESC将回到命令模式。
命令模式：可以移动光标、删除字符等。
低行模式：可以保存文件、退出vi、设置vi、查找等功能(低行模式也可以看作是命令模式里的)。
*/

/*
vi 1.py +11 直接编辑第11行
vi 1.py 打开当前文件夹中的文件
vi ../1.py 打开上级目录中的文件
*/

/*
vim
shift ^ 回到行首
shift $ 回到行尾
shift # 查找下一个该单词
*/

