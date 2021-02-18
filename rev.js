var n=123;
var res="";

while(n!=0)
{
    let digit=n%10;
    console.log(digit);
    res=res+String(digit);
    n=Math.floor(n/10);
}

console.log(res)