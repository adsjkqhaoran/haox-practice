var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),//slice 是截取[需要注意的是slice,两个参数分别是开始,结束!!!但是不包含结束 很坑]  splice 为删除并返回 
        right = array.slice(mid +1 , length - 1);
    return merge(mergeSortRec(left), mergeSortRec(right));
}
var merge = function (left, right) {
    var result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}
console.log(mergeSortRec([8, 5, 7, 6, 9, 3, 4, 2, 1]));
//85769      3421
//85   769    34    21
//8    5     76   9   3  4   2   1 
//8    5    7    6    9   3   4   2   1
//8    5    67   9    3    4    2     1
//58   679  34   12
//56789  1234
//123456789  