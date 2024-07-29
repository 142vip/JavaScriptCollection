const fs = require('node:fs')
const path = require('node:path')

// 快速生成目录
(() => {
  function getCurrentDirectoryFiles() {
    const currentPath = process.cwd()
    const files = fs.readdirSync(currentPath)

    return files
  }

  // 用法示例：
  const files = getCurrentDirectoryFiles()
  console.log(
    files.filter(file => file.includes('.md'))
      .map(file => ({
        text: file.split('.md')[0],
        link: file,
      })),
  )
})()

/**
 * 批量生成URL链接
 */
function processMarkdownFiles() {
  const currentPath = process.cwd()
  const files = fs.readdirSync(currentPath)

  files
    // .filter(file => file.includes('test命令.md'))
    .forEach((file) => {
      if (path.extname(file) === '.md') {
        const filePath = path.join(currentPath, file)
        const content = fs.readFileSync(filePath, 'utf8')
        const updatedContent = addContentToMarkdownHeader(content, file)

        fs.writeFileSync(filePath, updatedContent)
      }
    })
}

function addContentToMarkdownHeader(markdownContent, file) {
  const urlName = file.split('命令.md')[0]
  const title = file.split('.md')[0]
  const newContent = `---
title: ${title}
permalink: /server-end/linux/base-install/${urlName}.html
---
  `
  // 将新内容添加到 Markdown 内容最上方
  return `${newContent}\n\n${markdownContent}`
}

// 用法示例：
processMarkdownFiles()
