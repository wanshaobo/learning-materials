
class A{
    constructor(){
        this.test = 'constructor'
    }
    print(){
        console.log('A');
    }
}
class B extends A{
    constructor(){
        super();
    }
}
var b = new B();
A.prototype.name = 'A';
A.prototype.test = 'prototype';
console.log(b.name);//A
console.log(b.test);//constructor
B.prototype.print = function(){
    new A().print()
    console.log('B');
}
b.print();
//A
//B