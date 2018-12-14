/*
爬虫 服务器 AI
不需要编译直接执行，因为有Python解释器
gcc test.c
./a.out

sudo apt install python3
sudo apt install python
sudo apt install python-minimal

ipython ipython3 进入python交互模式
exit() 退出

python3

ipython 支持命令ls ll等
exit

ipython3 支持命令ls ll等
exit

#表示注释
'''
多行注释
'''
"""
多行注释
"""

python无法执行带有中文字符的程序
#coding=utf-8
#-*- coding:utf-8 -*-

height = input("请输入你的身高");

height = 18
print("height:%d"%height)

name = 'wan'
print("name:%s"%name)

python2中input采集并执行，python3中input采集并存储

python2
a = raw_input("请输入：")

age = 18;
if age>18:
	print('')

a = 100
b = 3.14
c = 'wan'
type(a)
int
type(b)
float
type(c)
str

数据类型：6种
数字：4种
int有符号整型
long长整型 也可以代表八进制和十六进制
float浮点型
complex复数
布尔类型：true false
string字符串
List列表 [1,2,3] 增删改查
Tuple元祖 (value,value) 只能查
Dictionary字典 {"name":"wan","age":18}

age = input("输入：")
age_num = int(age)
if age_num>18:
	print('')

函数
int()
long()
float()
complex()
str()
repr()
eval()
tuple()
list()
chr()
unichr()
crd()
hex()
oct()

cp 1.py 2.py

if age>18:
	print()
else:
	print()

标识符规则：
由字母、下划线和数字组成，且数字不能开头
区分大小写
推荐下划线命名english_score
小驼峰enghishiScore
大驼峰EnghishiScore

import keyword
keyword,kwlist
关键字：
and as assert
break
class
continue
def del
elif else except exec
finally False
for from
globle
if in import is
lambda
not or None
pass print
raise return True
try
while with
yield

变量名不能和关键字冲突

运算符：+ - * / // % **
9//2 4 取整除 返回商的整数部分
2**4 幂 2的4次方
2**10 1024
2**16 65536
'H'*10 "HHHHHHHHH"

name = 'wan'
age = 18
add = 'shan'
print('姓名%s，年龄%d，住址%s,'%(name,age,add))

常用的格式符号
%c 字符
%s 通脱str()字符串转换来格式化
%i 有符号十进制整数
%d 有符号十进制整数
%u 无符号十进制整数
%o 十进制整数
%x 十六进制整数
%X 十六进制整数
%e 索引符号
%E 索引符号
%f 浮点实数
%G %f和%E的简写

!= <> 都是不等于 python3没有<>
逻辑运算符：and or not
if true or false
	print()

if true and false
	print()

if not (a>0 and <=50):
	print()

if a == 1:
	print()
elif a == 2:
	print()
elif a == 3:
	print()

if a == 1:
	print()
elif a == 2:
	print()
else:
	print()

while num<=10:
	num = num+1
	print(num)

i = 1
whille i<=5:
	j=1
	while j<=5:
		print('*',end='')#打印不换行
		j=j+1
	print('')#换行
	i=i+1
whille i<=5:
	j=1
	while j<=i:
		print('*',end='')#打印不换行
		j=j+1
	print('')#换行
	i=i+1
复合运算符：+= -+ *= /= %= **= //=
a*=1+2+3 a = a*(1+2+3)

九九乘法表
row = 1
while row<=9:
    line=1
    while line<=row:
        #print('%d*%d=%d '%(row,line,row*line)),
        #print('%d*%d=%d '%(row,line,row*line),end='')
        print('%d*%d=%d\t'%(line,row,row*line),end='')
        line+=1
    print('')
    print('')
    row+=1
1*1=1

1*2=2 2*2=4

1*3=3 2*3=6 3*3=9

1*4=4 2*4=8 3*4=12 4*4=16

1*5=5 2*5=10 3*5=15 4*5=20 5*5=25

1*6=6 2*6=12 3*6=18 4*6=24 5*6=30 6*6=36

1*7=7 2*7=14 3*7=21 4*7=28 5*7=35 6*7=42 7*7=49

1*8=8 2*8=16 3*8=24 4*8=32 5*8=40 6*8=48 7*8=56 8*8=64

1*9=9 2*9=18 3*9=27 4*9=36 5*9=45 6*9=54 7*9=63 8*9=72 9*9=81

import random
random.randint(0,2) 0,1,2

name = 'wan'
for i in name:
	print(i)

break 跳出整个循环
continue 跳出本次循环

数字占一个字节
字符串每个字符占一个字符，并且末尾占一个字节
'100' 1 0 0 \0

name='wan'
len(name) 3

a='wan'
b='shao'
a+b
'===%s===='%(a+b)

name='wanshaobo'
name[2] n 下标
name[len(name)-1] name[-1]

切片
name='wanshaobo'
name[2:3] n 默认步长1可以省略
name[1:-1] anshaob
name[2:0] ''
name[2:] wanshaobo
name[1:-1:2] asab 步长2，默认步长1
name[0:]
name[-1:0:-1] oboahsna
name[-1::-1] 逆序 oboahsnaw
name[::-1] 逆序 oboahsnaw

str = 'wan shao bo'
str. tab键 查看字符串api
str.find('shao') 4从左边开始找
str.rfind('shao') 4 从右边开始找
str.index('s') find找不到返回-1 index找不到发生异常
str.rindex('s')
str.count('b') 返回出现的个数
str.replace('a','b') 'wbn shbo bo' 全局替换 原字符串不会改变
str.replace('a','b'，1) 从左到右只替换一次
str.split(' ') ['wan','shao','bo']
''.join(str.split()) 去除空白字符  按照\t \n ' '切割，并拼接为字符串
str.capotalize() Wan shao bo
str.title() Wan Shao Bo
str.startswith('hello') True/False
str.endswith('hello')
str.lower()
str.upper()
str = 'wan'
str.ljuse(5) 'wan  '
str.rjuse(5) '  wan'
str.center(5) ' wan '
str.lstrip() 删除左边空白字符
str.rstrip() 删除右边空白字符
str.strip() 删除两边空白字符
str = '123456347'
str.partition('34') '12','34','56347'
str.rpartition('34') '123456','34','7'
str = 'wan\nhehe'
str.splitlines() ['wan','hehe']
str = 'wan'
str.isalpha() True
str = 'wan123'
str.isalpha() False
str = '123'
str.isdigit() True
str = 'wan123'
str.isdigit() False
str = '123' 'abc' 'abc123' '12,,3'
str.isalnum() True True True False 所有字符都是字母或数字
str.isspace()
a = ['aaa','bbb','ccc'] 列表
b = ''
b.join(a) 'aaabbbccc'

arr = ['a',1,2,'b']
列表的增删改查
arr.append('c')
arr.insert(0,'d')
arr.exetend([5,6,7])#相当于concat
arr = [1,2] + [3,4]
arr.pop() 删除末尾，并返回
arr.remove('a') 删除第一个出现的
arr = [4,2,5,7,8]
arr[2:5] [5,7,8]
del arr[0]
arr[1] = 'haha'
if 'haha' in arr
	print()
if 'haha' not in arr
	print()

if num==1:
	pass
elif num==2:
	pass
else:
	print()

字典
infor = {key:value,key:value}
infor = {'name:'wan','QQ':345'tel':136,'age':18}
print("name\tQQ\tweichat\taddr")
print("%s\t%d\t%d\t%d"%(inofr["name"],inofr["QQ"],inofr["weichat"],inofr["addr"]))
del infor["QQ"]
inofr["QQ"] infor.get("QQ") 后者不报异常
len(infor)
infor.keys()#["name","age"] python2
infor.keys()#dict_keys(["name","age"]) python3
if "QQ" in infor.keys():
	print()
infor.values()#["wan",18] python2
infor.values()#dict_keys(["wan",18]) python3
infor.items#dict_items([("name","wan"),("age",18)])

nums = [1,2,3]
for temp in nums:
	print(temp)
else:#for循环完之后执行else
	print("=====")

for temp in nums:
	print(temp)
	break#下面的else不会执行
else:
	print("=====")

元祖
a = (11,22)
a[0],a[1]#11 22
b = a#a (11,22)
c,d = a#c 11 d 22
for A,B in a:
	print(A,B)

nums = [1,2,3]
type(nums)#list
numss = [1,2,3]
type(numss)#tuple

def func():
	a = 1
	b = 2
	return a,b#相当于返回一个元祖(a,b)

wendu = 0
def get_wendu():
	global wendu#使用全局变量，但是如果没有修改这个全局变量(列表 字典 除外)，可以不用这个关键字
	wendu = 33
def print_wendu():
	print('%d'%wendu)
get_wendu()
print_wendu()

函数调用之前的全局变量都可以拿到
g_wendu 定义一个全局变量

函数文档说明
ipython3 htlp(print) 查看帮助信息 q退出
def test():
	"函数文档说明"
def test():
	"""函数文档说明"""#推荐使用这种形式
def test():
	'函数文档说明'
htlp(test) 查看自定义函数的帮助信息

函数缺省参数，所有缺省参数必须放在形参最后
def add(a,b=2):
	print(a+b)

def add(a,b=22,c=33)
	print(a+b+c)
add(11,c=44)#跳过了b的实参 c=44 命名参数

def add(a,d,b=22,c=33):
	print()
add(d=11,a=22,c=44)

不定长参数
def add(a,*args):
	print(a)#1
	print(args)#(2,3,4) 元祖
add(1,2,3,4)

(1,)#如果一个元祖只有一个元素，末尾必须写一个,

def add(a,b,c=33,*args):
	print()#1 2 3 (4,5)
add(1,2,3,4,5)

def add(a,b,c=33,*args,**kwargs):
	print()#1 2 3 (4,5) {}
add(1,2,3,4,5)

def add(a,b,c=33,*args,**kwargs):
	print()#1 2 3 () {'x':4,'y':5}
add(1,2,3,x=4,y=5)

def add(a,b,c=33,*args,**kwargs):
	print()#1 2 3 (6,7,8) {'x':4,'y':5}
add(1,2,3,6,7,8,x=4,y=5)

def add(a,b,*args):
	res = a + b
	for num in args:
		res += num
	print('res=%d'%res)

拆包
def add(a,b,c=3,*args,**kwargs):
	print()#1 2 3 (4,5,6) {'name':'wan','age':18}
A = (4,5,6)
B = {'name':'wan','age':18}
add(1,2,3,*A,**B)#传递元祖和字典 *A和**B称为拆包

引用#所有类型都是引用
a = 100#a-栈地址指针 100-堆空间 c和c++是独立存储的
b = a#b-栈地址指针
id(a)#内存空间地址
id(b)

不可变类型：数字(int long float complex) str tuple
可变类型：list dict

字典的key类型只能是不可变类型
{'name':'wan',100:'hehe',(1,2,3):123}

拖库

todo C:\Users\wanshaobo\Desktop\人工智能+py高级\第1章 python基础\第2节 python语法基础\06.匿名函数、文件操作
*/