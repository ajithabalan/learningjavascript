var arr=[4,5,7,8,2,0,1,6];

arr.sort()
console.log(arr);

for (let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){

        if(arr[i]>arr[j]){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        }

    }
}
console.log(arr);