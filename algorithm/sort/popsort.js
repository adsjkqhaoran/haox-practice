var popsort = function(arr){
    if(arr.length==1){
        return arr;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1 ; j++) {
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(popsort([8, 5, 7, 6,9, 3, 4, 2, 1]));