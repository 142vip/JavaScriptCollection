const stu = ['Tom', 'Lisa', '142vip']

// 输出 2，数组中角标为2对应的就是142vip
console.log(stu.lastIndexOf('142vip'))

// 支持指定起始索引
console.log(stu.lastIndexOf('142vip', 2))
