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
top
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
ctrl + shift + t 终端下打开两个标签，利于切换用户
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

就业班 进程 线程 协成 网络编程

todo 学习节点
*/