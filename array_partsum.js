var arr=[1,2,3,4,5,6,7,8,9];
var total=4;

for (let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){

        if(total==arr[i]+arr[j]){

            console.log(arr[i],arr[j]);
        }
    }
}