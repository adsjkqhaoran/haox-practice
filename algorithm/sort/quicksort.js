var quickSort = function(arr){
    if (arr.length <= 1) { 
        return arr;
     }
    var middle = Math.floor((arr.length)/2);
    var pivot = arr.splice(middle, 1)[0];//该操作把中值取出 不然死循环 因为最终目的是拆成唯一的一个值
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    
    return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort([8, 5, 7, 6, 3, 9, 4, 2, 1]));