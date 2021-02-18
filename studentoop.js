class student{
    constructor(roll,name,course,total){
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.total=total;
    }

    printstudent=()=>{
        console.log("roll",roll)
        console.log("name",name)
        console.log("course",course)
        console.log("total",total)
    }

}
var obj= new student(100,"ajay","bba",150)
var obj1= new student(101,"sajay","bcom",140)
var obj2= new student(102,"vijay","bba",177)
var obj3= new student(103,"sujay","bcs",123)
var obj4= new student(104,"jay","blis",162)

var students=[]
students.push(obj)
students.push(obj1)
students.push(obj2)
students.push(obj3)
students.push(obj4)

students.forEach(obj=>console.log(obj.name))

students.filter(obj=>obj.course=="bba").forEach(obj=>console.log(obj.name))

students.filter(obj=>obj.total>143).forEach(obj=>console.log(obj.name,obj.course,obj.total))

var tot=students.map(obj=>obj.total).reduce((total1,total2)=>total1>total2?total1:total2)
console.log(tot)

var srtd=students.sort((o1,o2)=>o1.total>o2.total?1:-1)
console.log(students)