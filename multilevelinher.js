class Parent{
    m1=()=>{
    console.log("inside parent");
    }
}

class child extends Parent{
    m2=()=>{
    console.log("inside child");
    }
}

class subchild extends child{
    m3=()=>{
    console.log("inside sub child");
    }
}

var sb=new subchild();
sb.m3()
sb.m2()

var ch=new child();
ch.m1()
ch.m2()