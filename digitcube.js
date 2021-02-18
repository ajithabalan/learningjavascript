var n=246;
var cube;
var sum;
var i;


while(n!=0)
{
    
    var digit=n%10;
    i=cube;
    cube=digit*digit*digit;
    n=Math.floor(n/10);
    console.log(cube+i)
    
}

