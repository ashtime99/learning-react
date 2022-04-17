module.exports = {
    arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    bracketSpacing: true, // 大括号有空格 { name: 'rose' }
    endOfLine: 'auto', // 结尾 \n \r \n\r auto
    htmlWhitespaceSensitivity: 'ignore', //html文件的空格敏感度，控制空格是否影响布局
    insertPragma: false, // 是否在格式化的文件顶部插入Pragma标记，以表明该文件被prettier格式化过了
    jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
    jsxSingleQuote: true, // jsx 语法中使用单引号
    printWidth: 80, // 指定代码长度，超出换行
    proseWrap: 'preserve', // 按照文件原样折行
    quoteProps: 'as-needed', // 要求对象字面量属性是否使用引号包裹,(‘as-needed’: 没有特殊要求，禁止使用，'consistent': 保持一致 , preserve: 不限制，想用就用)
    requirePragma: false, // 是否严格按照文件顶部的特殊注释格式化代码
    semi: false, // 结尾加上分号
    singleQuote: true, // 使用单引号
    tabWidth: 2, // tab 键的宽度
    trailingComma: 'es5', // 确保对象的最后一个属性后有逗号
    useTabs: false, // 不使用tab
}