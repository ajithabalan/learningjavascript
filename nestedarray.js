var employees=[
    [100,"ajay","developer",35000],
    [101,"vishnu","qa",15000,],
    [102,"arjun","se",25000],
    [103,"laxman","se",25000],
    [104,"ram","qa",15000],
    [105,"karnan","web",10000],
    [106,"napolean","se",25000]
]

for (let emp of employees){
    console.log(emp);
}
for (let emp of employees){
    console.log(emp[1].toUpperCase())
}

for(let emp of employees){
    if(emp[2]=="qa"){
        console.log(emp)
    }
}

var total=0;
for(let emp of employees){
    if(emp[2]=="se"){
        total=total+emp[3];
        console.log(total)
    }
}