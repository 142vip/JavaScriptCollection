module.exports = function add() {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments)
    console.log(args)

    var _add = function () {
        console.log('add', arguments)
        args.push(...arguments);

        // 返回函数
        return _add;
    }
    
    console.log(args)

    // 对参数数组做求和处理

    _add.toString = function () {
        // 设置sum的起始值为0
        return args.reduce((sum, item) => {
            console.log(sum, item)
            return sum + item;
        })
    }
    // 返回函数
    return _add
}

let str = add(1, 6)(2)(3)
console.log(str)
// console.log(String(add(1,6)(2)(3)) )
// console.log(add(1)(2)(3))
// console.log(add(1)(2,3,4))

