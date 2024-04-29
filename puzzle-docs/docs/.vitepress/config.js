import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "PuzzleBox",
  base: '/',
  description: "PuzzleBox 文档说明",
  appearance: true,
  lastUpdated: true,
  outDir: '../dist',
  markdown: {
    theme: 'material-theme-palenight',
    // theme: 'material-theme-lighter',
    // theme: 'solarized-dark',
    // theme: 'solarized-light',
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: 'PuzzleBox',
    smoothScroll: true,
    outline: [1, 3],
    nav: [
      { text: 'Home', link: '/' },
      { text: '文档', link: '/pages/', activeMatch: '/pages' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/pages': [
        {
          text: '一级菜单1',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '二级菜单1-1', link: '/pages/first/二级菜单1-1' },
            { text: '二级菜单1-2', link: '/pages/first/二级菜单1-2' },
          ]
        },
        {
          text: '一级菜单2',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '二级菜单2-1', link: '/pages/second/二级菜单2-1' },
            { text: '二级菜单2-2', link: '/pages/second/二级菜单2-2' },
          ]
        }
      ],
      '/markdown-examples': [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
