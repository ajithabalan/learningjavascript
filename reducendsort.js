var arr=[10,8,2,5,11,22,7]


var gre=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(gre)

var min=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(min)

var sum=arr.reduce((no1,no2)=>no1+no2)
console.log(sum)

var srtd=arr.sort((no1,no2)=>no2-no1)
console.log(srtd)