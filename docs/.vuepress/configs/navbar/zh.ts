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
      '/template/project.md',
      '/template/file.md',
    ]
  },
  {
    text: '插件',
    children: [
      '/plugin/idea.md',
      '/plugin/vscode.md',
    ],
  },
]
