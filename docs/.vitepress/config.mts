import { defineConfig } from 'vitepress'

function createCommonSidebar(base) {
  return [
    {
      items: [
        { text: 'Introduction', link: `${base}/` },
        { text: 'Overview', link: `${base}/overview` },
        { text: 'Steps', link: `${base}/steps` },
        { text: 'Usage', link: `${base}/usage`},
        { text: 'Downloads', link: `${base}/downloads`}
      ]
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-deploy-plugin-docs/",
  title: "Home",
  description: "Documentation for IBM DevOps Deploy Plugins",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      '/zos-dataset-writer/' : createCommonSidebar('/zos-dataset-writer'),
      '/zos-rexx/' : createCommonSidebar('/zos-rexx'),
      '/AccuRevSourceConfig/' : createCommonSidebar('/AccuRevSourceConfig')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-deploy-plugin-docs' }
    ]
  }
})
