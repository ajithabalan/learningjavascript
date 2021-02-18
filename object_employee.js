var employee={
    id:1002,
    name:"Ajay",
    designation:"Developer",
    salary:25000
}

console.log(employee["name"])
console.log("gender" in employee)
employee ["gender"]="male"
console.log(employee)

employee["salary"]+=5000
console.log(employee)

for(let key in employee){
    console.log(key +" , " + employee[key])
}