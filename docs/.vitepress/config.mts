import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome Firmware Security",
  description: "A VitePress Site",
  // lang: 'zh-CN',
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    
    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ],
      // }, 
      {
        text: 'Firmware Rehosting',
        items: [
          {
            text: 'overview',
            link: 'firmware-rehosting/sok.md'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
