// 参考： https://www.npmjs.com/package/lint-staged#configuration
module.exports = {
  "*.{js,ts,md}":[
    "./scripts/lint --fix",
    "git add"
  ]
}