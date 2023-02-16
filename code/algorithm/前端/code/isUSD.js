function isUSD(str) {
    if (!str.startsWith('$')) {
        return false;
    }
    if (str.indexOf('.')) {
        // 小数
        let arr = str.split('.');

        if (arr[1].length !== 2) {
            return false;
        }


        let strArr = arr[0].split(',');

        for (let index = 0; index < strArr.length; index++) {
            if (strArr[index].length !== 3) {
                return false;
            }
        }
        return true;
    }

    let strArr = str.split(',');

    for (let index = 0; index < strArr.length; index++) {
        if (strArr[index].length !== 3) {
            return false;
        }
    }

    return true;
}

console.log(isUSD('$20,933,209.93'))