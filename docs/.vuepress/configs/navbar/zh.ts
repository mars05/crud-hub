import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: "模板制作",
    children: [
      {
        text: "项目模板",
        children: []
      }, {
        text: "代码模板",
        children: []
      }
    ]
  },
  {
    text: '插件',
    children: [
      '/plugin/idea.md',
    ],
  },
]
