var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
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
//8,5,7,6    9      3,4,2,1
//8,5  7,6   9      3,4 2,1
//5,8  6,7   9      3,4 1,2
//                  1,2 3,4