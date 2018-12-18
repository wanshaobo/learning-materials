/*
动态类型语言
既支持面向过程，又支持面向对象
面向对象的三个基本要素：封装(类) 继承(子类继承父类) 多态(定义的时候不确定调用谁)
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

列表排序
nums = [22,3,1,666,5,334,68]
nums.sort() 升序
nums.sort(reverse=True) 降序
nums.reverse() 倒序 逆序

python 使用 lambda 来创建匿名函数
存储字典的列表按照age排序
infors = [{'name':'b','age':10},{'name':'a','age':5},{'name':'c','age':15}]
infors.sort(key=lambda x:x['name'])#按照匿名函数进行排序
infors = [{'name':'a','age':5},{'name':'b','age':10},{'name':'c','age':15}]

def test(a,b,func):
	res = func(a,b)
	return res
num = test(11,22,lambda x,y:x+y)#33

python  的 input 当做一个表达式运行#coding=utf-8
python3 的 input 当做一个字符串

func_new = input('请输入一个匿名函数：')#python
func_new = eval(input('请输入一个匿名函数：'))#python3

交换
a = 4
b = 5

#任何语言通用
#c = 0
c = a
a = b
b = c

#任何语言通用
a = a+b
b = a-b
a = a-b

#python 独有
a,b = b,a#等号先执行右边

a = 100
def test(num):
	num+=num#100不可变数据类型
	print(num)
test(a)
print(a)
#200 100

a = [100]
def test(num):
	num+=num#合并列表 []可变数据类型
	print(num)
test(a)
print(a)
#[100,100] [100,100]

a = [100]
def test(num):
	num = num + num#定义了一个新的变量 =是引用
	print(num)
test(a)
print(a)
#[100,100] [100]

linux 一切(设备)皆文件 鼠标 键盘 显示器
文本文件
r-只读-文件必须存在 w-只写-文件不存在则创建-文件存在先删除内容 a-文件末尾追加append-文件可以不存在
b表示二进制-比如打开图片
rb-只读-文件必须存在 wb-只写-文件可以不存在 ab-文件末尾追加append-文件可以不存在
+ 可读可写
r+-只读-文件必须存在 w+-只写-文件可以不存在 a+-文件末尾追加append-文件可以不存在
rb+-只读-文件必须存在 wb+-只写-文件可以不存在 ab+-文件末尾追加append-文件可以不存在
open('1.txt','r')#读
f = open('1.txt','w')#写
f.close()

f = open('test.py','r')#'import a'
f.read()
f.read(1)#读一个字节 i
f.read(1)#m
f.read(1)#p
f.read(1)#o
f.read(2)#rt
f.close()
f.readline()#读取一行 返回字符串
f.readlines()#读取全部返回一个列表，每个元素为每一行

f = open('test.py','w')
f.write('hehe')
f.write('\nhehe')
f.close()

open('test.py') 等价于 open('test.py','r')

a.b.c.py a.b.c[复件].py
filename = 'a.b.c.py'
position = filename.rfind('.')
newname = filename[:position] + '[复件]' + filename[position:]

读5G文件，操作系统内存只有2G
5G --> 100M --> 5G
读取大文件:
while True:
	content = file.read(1024)
	if len(content) == 0:
		break
	new_file.write(content)

文件的定位读写，改变读取指针
'1234
5678
9123'
f = open('test.py')
seek(offset,index)#index 0-文件开头 1-当前位置 2-文件末尾 #offset 正数向右偏移 负数向左偏移 python3不支持负数
f.seek(2,0)#2 从0开始指向第二个字符
f.readline()#34
f.read()#5678\n 9123
f.seek(0,0)#0 从0开始指向第零个字符
f.tell()#获取当前读取指针索引

touch mkdir rm mv
import os
os.rename('old_file.py','new_file.py')
of.remove('old_file.py')
os.mkdir('abc')
os.rmdir('abc')
os.getcwd()#返回当前绝对路径
os.chdir('/home/wsb')#change 之后的所有操作都是在这个路径下执行
os.chdir('../')
os.listdir('./')#当前路径下所有文件名放入列表中

批量重命名
[wanshaob]-1.py
[wanshaob]-2.py
[wanshaob]-3.py
[wanshaob]-4.py
import os
file_names = os.listdir('movie')
os.chdir('movie')
for name in file_names:
	os.rename(name,'[wan]-'+name)

import os
file_names = os.listdir('movie')
for name in file_names:
	old_file_name = 'movie' + '/' + name
	new_file_name = 'movie' + '/' + '[wan]-' + name
	os.rename(old_file_name,new_file_name)

OOP-Object Oriented Programming
类和对象
类的三个组成部分：类名 一组数据 允许对进行操作的方法(行为)

#创建类
class Cat:
	'''定义一个Cat类'''
	#属性
	#方法
	def eat(self):
		print()
	def introduce(self):#第一个参数是self，也可以是其他名字，表示实例
		print('%s age : %d'%(self.name,self.age))
#创建对象
tom = Cat('tom',10)
tom.eat()
tom.name = 'tom'#对象添加属性
tom.age = 13#对象添加属性
tom.introduce()

#创建类
class Cat:
	'''定义一个Cat类'''
	#初始化对象
	def __init_(self,new_name,new_age):
		print('每实例化一次执行一次')
		self.name = new_name
		self.age = new_age
	#方法
	def eat(self):
		print()
	def introduce(self):#第一个参数是self，也可以是其他名字，表示实例
		print('%s age : %d'%(self.name,self.age))
#创建对象
tom = Cat('tom',10)
tom.eat()
tom.introduce()

#创建类
class Cat:
	'''定义一个Cat类'''
	#初始化对象
	def __init_(self,new_name,new_age):
		print('每实例化一次执行一次')
		self.name = new_name
		self.age = new_age
	#def __str__(self):
		#pass
	#方法
	def eat(self):
		print()
	def introduce(self):#第一个参数是self，也可以是其他名字，表示实例
		print('%s age : %d'%(self.name,self.age))
#创建对象
tom = Cat('tom',10)
tom1 = Cat('tom1',11)
print(tom)#没有重写__str__，可以看到对象在内存中的位置 <__main__.Cat object at 0x7f19be25ac50>

#创建类
class Cat:
	'''定义一个Cat类'''
	#初始化对象
	def __init_(self,new_name,new_age):
		print('每实例化一次执行一次')
		self.name = new_name
		self.age = new_age
	def __str__(self):
		return 'haha'
	#方法
	def eat(self):
		print()
	def introduce(self):#第一个参数是self，也可以是其他名字，表示实例
		print('%s age : %d'%(self.name,self.age))
#创建对象
tom = Cat('tom',10)
tom1 = Cat('tom1',11)
print(tom)#重写__str__ haha

#创建类
class Cat:
	'''定义一个Cat类'''
	#初始化对象
	def __init_(self,new_name,new_age):
		print('每实例化一次执行一次')
		self.name = new_name
		self.age = new_age
	def __str__(self):#获取对象描述信息，可以重写__str__
		return '$s age:%d'%(self.name,self.age)
	#方法
	def eat(self):
		print()
	def introduce(self):#第一个参数是self，也可以是其他名字，表示实例
		print('%s age : %d'%(self.name,self.age))
#创建对象
tom = Cat('tom',10)
tom1 = Cat('tom1',11)
print(tom)#重写__str__ haha

infor = ['a','b','c']
str(infor)#'abc'

#创建类
class Cat:
	#初始化对象
	def __init_(self,new_name,new_age):
		self.name = new_name
		self.age = new_age
	def __str__(self):#获取对象描述信息，可以重写__str__
		return '$s age:%d'%(self.name,self.age)
	#方法
	def get_name(self):用方法对外暴露 cat.get_name() 比直接用属性获取 cat.name 安全
		return self.name
	def get_age(self):
		return self.age

隐藏属性-私有属性
class Dog:
	def set_age(self,new_age):
		if new_age>0 and new_age<=100:
			self.age = new_age
		else:
			self.age = 0
	def get_age(self):
		return self.age

私有方法
class Dog:
	#私有方法
	def __send_msg(self):
		print('---正在发送短信---')
	#公有方法
	def send_msg(self,money):
		if money>1000:
			self.__send_msg()
		else:
			print('余额不足')

class Dog:
	def __del__(self):#程序退出时调用 || 对象销毁前调用(引用计数为0调用)
		print('del me')

dog1 = Dog()#引用计数 1
dog2 = Dog()#引用计数 2
del dog1
del dog2

import sys
sys.getrefcount(Dog)#获取类的引用计数 比实际个数大于1

继承 重写
class Animal:#基类
	def eat(self):
		print('eat')
class Dog(Animal):#子类
	def bark(self):
		print('wang')
class Xiaotianquan(Dog):#孙子类
	def fly(self):
		print('fly')
	def bark(self):#重写
		print('da jiao')
		Dog.bark(self)#调用被重写的父类的方法
		#super().bark()#调用被重写的父类的方法
class Cat(Animal):#子类
	def catch(self):
		print('抓老鼠')

私有属性和方法不会被继承
class A:
	def __nint__(self):
		self.num1 = 100
		self.__num2 = 200
	def test1(self):
		print('1')
	def __test2(self):
		print('2')
	def test3(self):
		self.__test2()
		self.__num2
class B:
	def test4(self):
		#self.__test2() 禁止调用
		#self.__num 禁止调用
b = B()
b.__test2()#Error
b.__num2#Error

多继承
#def Base: 经典类 python
#def Base(object): 新式类 python3
def Base:#默认继承object --> def Base(object) object是最顶层基类 python3
	def test(self):
		print('base')
class A(Base):
	def test1(self):
	print('test1')
class B(Base):
	def test2(self):
	print('test2')
class C(A,B):
	pass
c = C()
c.test1()
c.test2()
c.test()

def Base(object):
	def test(self):
		print('base')
class A(Base):
	def test(self):
		print('A')
class B(Base):
	def test(self):
		print('B')
class C(A,B):
	def test(self):
		print('C')
c = C()
c.test()#C

def Base(object):
	def test(self):
		print('base')
class A(Base):
	def test(self):
		print('A')
class B(Base):
	def test(self):
		print('B')
class C(A,B):
	pass
c = C()
c.test()#A

def Base(object):
	def test(self):
		print('base')
class A(Base):
	pass
class B(Base):
	def test(self):
		print('B')
class C(A,B):
	pass
c = C()
c.test()
print(C.__mor__)#调用C3算法 查找的优先顺序根据C3算法得出的，而非看到的AB先后顺序 元祖 (<class '__main__.c'>,<class '__main__.A'>,<class '__main__.B'>,<class '__main__.Base'>,<class 'object'>)

多态 定义时的类型和运行时的类型不一样
方法-类中的函数
函数-def定义的格式
class Dog(object):
	def print_self(self):
		print('1')
class Xiaotianquan(Dog):
	def print_self(self):
		print('2')
def introduce(temp):
	temp.print_self()#这个是多态，定义的时候不知道调用的谁，但执行的时候知道调用谁
dog1 = Dog()
dog2 = Xiaotianquan()
introduce(dog1)
introduce(dog2)

理解多态，手机的不同主题

类属性 实例属性
class Tool(object):
	#类属性 定义类的时候只创建一次，定义实例的时候不再创建 多个实例共享
	num = 0
	def __init__(self,new_name):
		#实例属性 定义实例的时候创建 每个实例单独私有
		self.name = new_name
		#操作类属性
		Tool.num += 1
tool1 = Tool('1')
tool1 = Tool('2')
tool1 = Tool('3')
print(Tool.num)#3

实例方法 类方法 静态方法
class Game(object):
	#类属性
	num = 0
	#实例方法-操作实例属性
	def __init__(self):#self不是关键字 self用来接收对象
		#实例属性
		self.name = 'hehe'
	#类方法-操作类属性
	@classmethod#装饰器@classmethod
	def add_num(cls):#cls不是关键字 cls用来接收类的引用
		cls.num = 100
	#静态方法-完成基本功能，与类和实例没有关系
	@staticmethod
	def print_menu():#可以不需要任何参数，与类和实例没有关系
		print('123')
game = Game()
Game.add_num()#类名可以调用类方法
#game.add_num() 类创建的对象同样可以调用类方法
print(Game.num)#100
Game.print_menu()#通过类名调用静态方法
game.print_menu()#通过实例对象调用静态方法

设计模式：简单工厂模式 工厂方法模式
《python的设计模式》

class CarStore(object):
	def __init__(self):
		self.factory = Factory()
	def order(self,car_type):
		return self.factory.select_car_by_type(car_type)
class Factory(object):#简单工厂模式-额外添加一个类Factory，让CarStore和Car解耦
	def select_car_by_type(car_type):#使用函数完成解耦 对类CarStore不产生影响
		'''返回一个汽车的引用'''
		if car_type == 'sonata':
			return Suonata()
		elif car_type == 'mingtu':
			return Mingtu()
		elif car_type == 'ix35':
			return Ix35()
class Car(object):
	def move(self):
		print('car move')
	def music(self):
		print('listen music')
	def stop(self):
		print('car stop')
class Suonata(Car):
	pass
class Mingtu(Car):
	pass
class Ix35(Car):
	pass

class Dog(object):
	def __init__(self):
		print('---init---')
	def __del__(self):
		print('---del---')
	def __str__(self):
		print('---str---')
	def __new__(cls):#重写了父类object的__new__ cls此时是Dog指向的那个类对象
		print('---new---')
		print(id(cls))
print(id(Dog))#类的内存地址等于上面一句话
xtq = Dog()#'---new---'
#Dog()干的三件事情：创建一个对象 调用__nint__方法 返回对象的引用

class Dog(object):
	def __init__(self):
		print('---init---')
	def __del__(self):
		print('---del---')
	def __str__(self):
		print('---str---')
	def __new__(cls):#重写了父类object的__new__ cls此时是Dog指向的那个类对象
		print('---new---')
		return object.__new__(cls)
xtq = Dog()#new init del
#Dog()干的三件事情：
调用__new__方法创建一个对象，然后找了一个变量来接收__new__的返回值，这个返回值表示创建出来的对象的引用
调用__nint__方法，传入上一步创建出来的引用
返回对象的引用
#构造方法：创建对象并初始化
#__new__创建对象 __init__初始化

单例-单例模式
class Dog(object):
	__instance = None#类的私有属性
	__init_flag = False
	def __new__(cls,name):
		if cls.__instance == None:
			cls.__instance = object.__new__(cls)
			return cls.__instance
		else:
			return cls.__instance
	def __init__(self,name):
		if Dog.__init_flag == False:
			self.name = name
			Dog.__init_flag == True
a = Dog('wangcai');
print(a.name)#wangcai
b = Dog('xtq');
print(b.name)#wangcai
#id(a) == id(b)# True 单例

异常
try:
	open('aaaa.txt')#异常语句
	print(num)#异常语句
	print(1)#不执行
except (NameError,FileNotFoundError):#python3用一个except捕获多个异常用元祖
	print('------')#捕获到异常
except Exception as res:#捕获其他异常，上面没有捕获到全部异常
	print('------')#捕获到异常
	print(res)#异常名称
else:
	print('没有异常才执行')
finally:
	print('finally')#是否有异常，都会执行
print(2)#2 不受异常影响

import time
try:
	f = open('a.txt')
except:#python2中的写法，可以捕获到所有异常
	print('没有这个文件')
except Exception:#python3中的写法，可以捕获到所有异常
	print('没有这个文件')

import time
try:
	f = open('test.txt')
	try:
		while True:
			content = f.readline()
			if len(content) = 0:
				break
			time.sleep(2)#程序暂停2s
			print(content)
	except:
		pass
	finally:
		f.close()#任何情况下都必须关闭文件
		print('close file')
except Exception:
	priont('---')

抛出自定义异常
class ShortInputException(Exception):
	'''自定义异常类'''
	def __init__(self, length, atleast):
		#super().__init__()
		self.length = length
		self.atleast = atleast
def main():
	try:
		s = input('请输入：')
		if len(s) < 3:
			#raise引发一个自定义的异常
			raise ShortInputException(len(s), 3)
	exception ShortInputException as res:#res指向对象的实例
		print('ShortInputException：输入的长度是%d,长度至少应该是%d'%(res.length,res.atleast))
	else:
		print('no except')

异常处理中抛出异常#异常处理中不想处理这个异常了
class Test(object):
	def __init__(self,switch):
		self.switch = switch
	def calc(self,a,b):
		try:
			return a/b
		except Exception as result:
			if self.switch:
				print('catch exception')
				print(result)
			else:
				#重新抛出这个异常，触发默认的异常处理
				raise
a = Test(True)
a.cala(11,0)
a.switch = False
a.calc(11,0)

if为假: '' None [] {} 0 False
if为真: 1 -1 'a'
#0-假 非0-真

模块
import random
import os
os.__file__#'usr/lib/python3.5/os.py'
#查看系统自带的所有模块 cd usr/lib/python3.5/
sudo apt install python3-pip
sudo apt install python-pip
pip -V
pip3 -V
sudo pip install pygame
sudo pip3 install pygame
abc-cpython-3.5.pyc#用c语言写的python解释器的3.5版本的字节码

import mudule1
mudule1.func()

from module1 import func
func()

from module1 import *
from module2 import *#后导入模块的同名方法会覆盖先导入的模块方法
func1()
func2()

import time as t#起个别名叫t
t.sleep(3)
import zhegemokuaidemingzitexiechang as m#长名称的模块起个别名叫m

abc.py
#print(__name__)#别人调用是abc 自己执行该文件是__main__
if __name__ == '__main__':#系统变量
	#自己执行，别人调用不执行，做自己模块测试用
	test1()
	test2()

import xxx
class ClassName(object):
	'''some words'''
	def __init__(self,arg):
		super(ClassName, self).__init__()
		self.arg = arg
def xxxx():
	pass
def main():
	pass
if __name__ == '__namin__':
	main()

abc.py
#此时对外只暴露test1，test2和num通过这种方式（from abc import *）无法访问
__all__ = ['test1']#from abc import *
def test1():
	print(1)
def test2():
	print(2)
num = 100

包-具有很多相似功能模块的集合场所
infordisplay.py TestMsg/recvmsg.py TestMsg/sendmsg.py TestMsg/__init__.py
#有这个文件__init__.py的文件夹TestMsg叫做包
__init__.py
__all__ = ['sendmsg']#这句话表示可以使用from sendmsg import test1
print(1)#import TestMsg会这行这句话
import . import sendmag#python3

模块的发布 安装
TestMsg/ setup.py
#setup.py
from distutils.core import setup
setup(name="wan",version="1.0",description="",author="",py_modules=['TestMsg.sendmsg','TestMsg.recvmsg'])#命名参数传参

python3 setup.py build
python3 setup.py sdist

sudo python setup.py install

cd ~/Desktop




todo C:\Users\wanshaobo\Desktop\人工智能+py高级\第1章 python基础\第2节 python语法基础\10.加强练习\视频 04-给程序传参数.flv
*/