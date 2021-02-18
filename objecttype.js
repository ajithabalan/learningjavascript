var student={
    roll:100,
    name:"Akhil",
    course:"computer",
    total:50
}


console.log(student.name);
for(let key in student){
console.log(key)
console.log(student[key])
}
console.log("course" in student)
console.log("gender" in student)

student["gender"]="male"
console.log(student)

if(student["course"]=="computer"){
    console.log(true)
}
else{
    console.log(false)
}