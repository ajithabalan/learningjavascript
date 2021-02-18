var pattern="ABABBC"

var words=pattern.split("")

obj={}

for(let char of pattern){

    if(char in obj){

        console.log(char)
        break;
    }
    else{
        obj[char]=1;
    }
}