var employee=[
    [1000,"emp1","joseph","devop",1981,1989],
    [1001,"emp2","ashik","devop",1980,1985],
    [1002,"emp3","vishnu","qa",1986,1999],
    [1003,"emp4","rahul","ba",1980,1988],
    [1004,"emp5","karthik","web",1998,2004],
    [1005,"emp6","albin","qa",1983,2010],
    [1006,"emp7","rohan","ba",1982,1990],
    [1007,"emp8","akhil","qa",1973,1993],
    [1008,"emp9","tony","qa",1999,2012]
]


for(let emp of employee){
    emp[2]=(emp[2].toUpperCase());
    console.log(emp)
}

for (let emp of employee){
    if(emp[3]=="devop"){
        console.log(emp[2])
        console.log(emp)
    }
}

console.log("The Employees working in 1980's are:")
for(let emp of employee){
    
    if(emp[4]>=1980 & emp[5]<1990){
        console.log(emp)
    }
}

console.log("Employees with more than 9 years experience are:")
var exp;
for(let emp of employee){
    exp=(emp[5]-emp[4]);
    if(exp>9){
        console.log(emp)
    }
}