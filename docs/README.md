---
home: true
title: 首页
heroImage: /images/hero.png
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /zh/guide/
    type: secondary
features:
  - title: 代码生成
    details: 从数据库表结构或DDL来进行项目生成和代码生成，并支持生成结果的在线预览。
  - title: 模块管理
    details: 以项目维度在线维护代码模板，大佬们可以根据喜好制作不同的项目模板。    
  - title: 插件
    details: 提供IntelliJ IDEA插件，方便大佬们愉快的摸鱼🐟。
footer: MIT Licensed | Copyright © 2018-present Xiao Yu
---

### 像数 1, 2, 3 一样容易
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
