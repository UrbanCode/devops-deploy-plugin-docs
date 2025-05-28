import { defineConfig } from 'vitepress'

function createCommonSidebar(base, text) {
  return [
    {
	  text: text,
      items: [
        { text: 'About', link: `${base}README` },
        { text: 'Steps', link: `${base}steps` },
        { text: 'Usage', link: `${base}usage`},
        { text: 'Downloads', link: `${base}downloads`}
      ]
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-deploy-plugin-docs/",
  title: "DevOps Deploy Plugins",
  description: "Documentation for IBM DevOps Deploy Plugins",
  appearance: "dark",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/devops-deploy-plugin-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
		'/UCD/7-zip/' : createCommonSidebar('/UCD/7-zip/', '7 Zip'),
      // '/UCD/zos-dataset-writer/' : createCommonSidebar('/zos-dataset-writer'),
      // '/zos-rexx/' : createCommonSidebar('/zos-rexx'),
      // '/ansible/' : createCommonSidebar('/ansible'),
      // '/AccuRevSourceConfig/' : createCommonSidebar('/AccuRevSourceConfig')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-deploy-plugin-docs' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
