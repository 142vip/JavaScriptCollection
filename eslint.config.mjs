import antFu from '@antfu/eslint-config'

// 参考：https://github.com/antfu/eslint-config

export default antFu({
  ignores: [
    '**/node_modules/**',
    'dist',
    '**/dist/**',
    '.nuxt',
    '**/.nuxt/**',
    'typings/',
    '**/typings/**/',
    '.output',
    '**/.output/**',
    '**/*/CHANGELOG.md',
  ],
  typescript: true,
  vue: true,
  jsonc: false,
  yaml: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  rules: {
    'no-console': 'warn',
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
    // 用于在模块构建后基于dist导出时找不到文件，忽略校验
    'antfu/no-import-dist': 1,
  },
})
