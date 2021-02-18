var student=[
    [100,"ajay","computer",150],
    [101,"vishnu","commerce",120],
    [102,"sanju","maths",130],
    [103,"abhijith","humanities",130],
    [104,"kiran","maths",160],
    [105,"rahul","maths",110]
]

for (let stud of student){
    console.log(stud);
}


for(let stud of student){
    console.log(stud[1].toUpperCase());
}


for(let stud of student){

    if(stud[2]=="maths"){
        console.log(stud[1])
    }
}

var total=0;
for(let stud of student){
    if(stud[2]=="maths"){
        total=total+stud[3];
        console.log(total)
    }
}