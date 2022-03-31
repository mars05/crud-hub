import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
      ],
    },
  ],
  '/template/': [
    '/template/project.md',
    '/template/file.md',
    '/template/var.md',
  ],
  '/plugin/': ['/plugin/idea.md']
}
