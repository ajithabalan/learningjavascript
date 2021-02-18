//overloading
class maths{
    add=()=>{
        console.log("no arg method")
    }
    add=(no1)=>{
        console.log("inside one arg method")
    }
    add=(no1,no2)=>{
        console.log("inside two arg method")
    }
}
var math=new maths()
math.add(1)

//overriding
class parent{
    phone=()=>{
        console.log("have nokia 2700")
    }
}
class child extends parent{
    phone=()=>
    console.log("have iphone6")
}
class subchild extends parent{
}
var ch=new child()
ch.phone()
var sc=new subchild()
sc.phone()