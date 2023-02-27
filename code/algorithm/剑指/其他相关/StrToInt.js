/**
 * 【较难】把字符串转换成整数
 * @param str
 * @returns {number|number|number}
 */
function StrToInt(str) {
  if (!str) return 0
  let bool = false; const firstLetter = str[0]
  if (firstLetter === '-') bool = true
  if (firstLetter === '-' || firstLetter === '+') str = str.substring(1)
  const n = Number(str)
  if (n === 0) return 0
  return bool ? -n : n
}
