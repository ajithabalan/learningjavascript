class Person{

    setPerson=(name,age,gender)=>{
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPerson=()=>{
        console.log(this.name,this.age,this.gender)
    }
}
var obj=new Person()
obj.setPerson("ajay",25,"male")
obj.printPerson()

var obj1=new Person()
obj1.setPerson("anjali",22,"female")
obj1.printPerson()
console.log(obj.name)
console.log(obj1.age)
console.log(obj.gender)
obj1.age=24
console.log(obj1.age)