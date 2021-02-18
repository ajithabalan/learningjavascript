ucl=[
    {name:"mumbai city",mp:7,win:5,lost:1,draw:1,gf:11,ga:3},
    {name:"barcelona",mp:7,win:7,lost:0,draw:0,gf:22,ga:1},
    {name:"real madrid",mp:7,win:5,lost:2,draw:0,gf:15,ga:4},
    {name:"athletico madrid",mp:7,win:2,lost:2,draw:3,gf:10,ga:5},
    {name:"juventus",mp:7,win:1,lost:5,draw:1,gf:9,ga:8},
]
ucl.forEach(data=>console.log(data.name))

var names=ucl.map(team=>team.name.toUpperCase())
console.log(names)

var na=ucl.filter(team=>team.win>6).forEach(team=>console.log(team.name))

var data=ucl.map(team=>team.mp).reduce((t1,t2)=>t1>t2?t1:t2)
console.log(data)

ucl.map(team=>team.points=(team.win*3)+(team.draw*1))
console.log(ucl)