// 找出数组 arr 中重复出现过的元素
function duplicates(arr) {
    const sortArr = arr.sort();
    let result = []

    const len = sortArr.length;

    for (let index = 0; index < len - 1; index++) {

        if (sortArr[index] === sortArr[index++]) {
            result.push(sortArr[index])
        }
    }
    // 去重
    return [...new Set(result)];
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))
