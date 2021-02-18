var arr=[10,8,2,5,11,22,7]


var squ=arr.map(num=>num**2)
console.log(squ)

var cube=arr.map(num=>num**3)
console.log(cube)

var even=arr.filter(num=>num%2==0)
console.log(even)


var names=["joseph","nidhin","sarath","basil"]


var name=names.map(na=>na.toUpperCase())
console.log(name)

var sname=names.filter(na=>na[0]=='s').map(na=>na.toUpperCase())
console.log(sname)


