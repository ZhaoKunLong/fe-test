<!--
 * @Author: HS
 * @Email: Xiao.hxj@qq.com
 * @Date: 2023-02-14 10:57:24
 * @LastEditTime: 2023-02-16 20:30:00
 * @FilePath: \demo-hs\readme\commitizen.md
 * @Description: 文件说明
 * Copyright (c) 2023 by HS, All Rights Reserved. 
-->

<div align="center">
	<h1>Angular Commit 提交规范</h1>
</div>
  目前，用得最多的是 Angular 规范，同样遵循着 conventional commit，可以说是它的一个衍生版本，angular 规范的 message 格式是这样子的。

  ```javascript
  <type>(<scope>): <subject>
  <BLANK LINE>
  <body>
  <BLANK LINE>
  <footer>
  ```

####由以下部分构成
  ##### type(必选)

  | 类型   | 说明   |
  | ------ | ------ |
  | feat | 新增特性 |
  | fix | 修复问题 |
  | docs | 修改文档 |
  | style | 修改代码格式(非 CSS 样式修改) |
  | refactor | 重构代码 |
  | perf | 修改提高性能的代码 |
  | test | 新增、修改测试用例 |
  | chore | 修改构建流程,、依赖管理 |

#### scope
  本次 commit 的修改影响范围
#### subject
  本次 commit 的描述信息
#### body
  本次 commit 具体的修改内容  
#### footer
  页脚注释 通常用于放 issues

---

### 安装
  项目级安装 commitlint 和 husky，commlint 用于对 commit message 进行格式校验，husky 则用于 git hook
 
  ```
    pnpm add -D @commitlint/config-conventional @commitlint/cli husky

  ```
  commitlint 是规范 commit message 信息，不能约束其内容


#### 配置commitlint
  根目录中新建一个 commitlint.config.js 文件，配置 commitlint

  ```javascript
    module.exports = {
      extends: ['@commitlint/config-conventional'],
      rules: [], // 可选，自定义 rules，覆盖@commitlint/config-conventional 的配置
    };
  ```

#### 激活 hooks
  根目录  pnpm add husky -D -S
  // 添加一个脚本 并执行一次  

  ```json
  "scripts": {
    ...
    "prepare": "husky install",
    ...
  },
  ```
  或
  ```
  npm set-script prepare "husky install"
  ```

  ```  
  // 添加 commit hook执行信息校验，你也可以根据项目需要添加其他的 git hook，例如 pre-commit
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
  ```
  或
  ```
  pnpm exec husky install
  //根目录会创建一个.husky 文件夹（husky hook 文件夹）。在这个文件夹中创建一个 commit-msg 文件，用于开发者在执行 commit 命令时进行 commitllint 校验

  // 或命令
  添加 hooks
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit ${1}'

  ```
  
  添加生成的hook文件
  ```
  git add .husky/commit-msg
  ```

  ##### 终端 commit 时执行 cz
  也可以在开发者在终端执行 git commit 命令时调用 cz，在项目根目录中的.husky 目录下创建 prepare-commit-msg 文件，用于用户执行 commit 之前运行 cz。
  ```
  #!/bin/bash
  exec < /dev/tty && git cz --hook || true
  ```

#### 安装commitizen、cz-conventional-changelog(可全局、本地--推荐)
  >commitizen是一个交互式创建提交信息的工具，用于规范化 git commit message
  
  >cz-conventional-changelog是commitizen适配器，使 commitizen 按我们指定的规范生成 commit message
  >>cz-git也是适配器之一，搭配czg使用

  ```
  pnpm add commitizen cz-conventional-changelog -D
  ```
##### 全局安装插件报错
  pnpm(Run “pnpm setup“ to create it automatically, or set the global-bin-dir setting, or the PNP

  命令行执行以下代码(二选一, 重启生效)
  ```
  pnpm setup #自动设置环境变量
  pnpm config set global-bin-dir "D:\nodejs" # pnpm 全局 bin 路径
  ```
  #### 配置commitizen
  在 package.json 中添加配置
  ```json
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
  ```
  添加一个脚本
  ```json
  "scripts": {
    ...
    "commit": "git add . && cz",
    ...
  },

  ```
  或
  ```
  npm set-script commit "git add . && cz"
  ```

  到此配置完成，commit时就会出现交互式提交信息的创建


### 其他
  因为 commitizen 只支持英文，如果我想要支持中文指令和 emoji，那么就必须安装可自定义的 cz 适配器了
  
  #### 安装
  ```
    pnpm add cz-customizable -D
  ```
  
  #### 配置
  将根目录下commitlint.config配置修改为
  ```javascript
  module.exports = {
    extends: ['git-commit-emoji', 'cz'],  
    rules: [], // 可选，自定义 rules，覆盖@commitlint/config-conventional 的配置
  };
  ```
  根目录下添加.cz-config.js 配置文件
  [cz-customizable配置](//https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)
  ```javascript

  // 注意 gitmoji 配置不对是无法提交的 https://www.npmjs.com/package/commitlint-config-gitmoji
  // 图标对照 https://gitmoji.dev/
  module.exports = {
    types: [
      { value: ':sparkles: feat', name: '✨ feat: 新的功能' },
      { value: ':bug: fix', name: '🐛 fix: 修复 bug' },
      { value: ':memo: docs', name: '✏️ docs: 文档变更' },
      { value: ':lipstick: style', name: '💄 style: 代码格式(不影响功能，例如空格、分号等格式修正)' },
      { value: ':recycle: refactor', name: '♻️ refactor: 代码重构(不包括 bug 修复、功能新增) ' },
      { value: ':zap: perf', name: '⚡️ perf: 性能优化' },
      { value: ':white_check_mark: test', name: '✅ test: 添加、修改测试用例' },
      { value: ':package: build', name: '📦️ build: 构建流程、外部依赖变更(如升级 npm 包、修改 脚手架 配置等)' },
      { value: ':construction_worker: ci', name: '👷 ci: 修改 CI 配置、脚本' },
      { value: ':rocket: chore', name: '🚀 chore: 对构建过程或辅助工具和库的更改(不影响源文件、测试用例)' },
      { value: ':rewind: revert', name: '⏪️ revert: 回滚 commit' }
    ],

    //  未添加 ommitlint-config-gitmoji 的配置
    types: [
      { value: 'feat', name: 'feat: 新的功能' },
      { value: 'fix', name: 'fix: 修复 bug' },
      { value: 'docs', name: 'docs: 文档变更' },
      { value: 'style', name: 'style: 代码格式(不影响功能，例如空格、分号等格式修正)' },
      { value: 'refactor', name: 'refactor: 代码重构(不包括 bug 修复、功能新增) ' },
      { value: 'perf', name: 'perf: 性能优化' },
      { value: 'test', name: 'test: 添加、修改测试用例' },
      { value: 'build', name: 'build: 构建流程、外部依赖变更(如升级 npm 包、修改 脚手架 配置等)' },
      { value: 'ci', name: 'ci: 修改 CI 配置、脚本' },
      { value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改(不影响源文件、测试用例)' },
      { value: 'revert', name: 'revert: 回滚 commit' }
    ],
    messages: {
      type: '请选择提交类型(必填)',
      customScope: '请输入文件修改范围(可选)',
      subject: '请简要描述提交(必填)',
      body: '请输入详细描述(可选)',
      breaking: '列出任何 BREAKING CHANGES(可选)',
      footer: '请输入要关闭的 issue(可选)',
      confirmCommit: '确定提交此说明吗？'
    },

    // allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    allowCustomScopes: true,
    // 跳过问题
    skipQuestions: ['body', 'footer'],
    subjectLimit: 72
  }
  
  ```


  #### 成果
  commit 也要优雅
  <img decoding="async" src="./img/git-commit.png
" width="50%">


  #### 其他配置
  [gitmoji-commit-workflow 配置](https://github.com/arvinxx/gitmoji-commit-workflow)







  
    

