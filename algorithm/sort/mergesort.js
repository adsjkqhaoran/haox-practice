var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),//slice 是截取[需要注意的是slice,两个参数分别是开始,个数  splice 为删除并返回
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

//这个和冒泡法比较 该方法存在最理想情况 而冒泡则不存在
//假设4个数进行排序 冒泡法铁定要比较3+2+1=6次 而组合归并排序最快是4次 最慢是5次