// Pure implementation of https://en.wikipedia.org/wiki/Merge_sort "Top-down implementation using lists" pseudocode.

function mergeSort(m) {

    if (m.length <= 1) {
        return m;
    }
    var left = [];
    var right = [];

    for (i = 0; i != m.length; i++) {

        if (i < (m.length) / 2) {
            left.push(m[i]);
        } else {
            right.push(m[i]);
        }
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

function merge(left, right) {
    var result = [];

    while (left.length != 0 && right.length != 0) {
        if (left[0] <= right[0]) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    while (left.length != 0) {
        result.push(left[0]);
        left.shift();
    }
    while (right.length != 0) {
        result.push(right[0]);
        right.shift();
    }

    return result;
}

if (require.main === module) {
    console.log(mergeSort([2, 6, 4, 9, 1]));
}