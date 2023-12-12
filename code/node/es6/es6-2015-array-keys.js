// 定义数组
const students = ['Lisa', 'Tom']
const keys = students.keys()

// 遍历keys对象
let text = ''
for (const x of keys) {
  text += x + '---'
}
console.log(text)
