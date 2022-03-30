import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  port: 8001,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Crud Hub 在线文档',
      description: 'CRUD 代码生成平台',
    },
  },
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  // themeConfig: {
  //   logo: 'https://vuejs.org/images/logo.png',
  // },
  themeConfig: {
    logo: '/images/hero.png',

    repo: 'mars05/crud-hub',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
})