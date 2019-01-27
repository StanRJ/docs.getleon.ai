module.exports = {
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.png' }],
    ['meta',
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Leon Docs' },
      { name: 'og:description', content: 'Leon Documentation - Your Open-Source Personal Assistant' },
      { name: 'og:image', content: 'https://docs.getleon.ai/assets/img/logo_t.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Leon Docs' },
      { name: 'twitter:description', content: 'Leon Documentation - Your Open-Source Personal Assistant' },
      { name: 'twitter:image', content: 'https://docs.getleon.ai/assets/img/logo_t.png' },
      { name: 'theme-color', content: '#1c75bd' }
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Leon Docs',
      description: 'Leon Documentation - Your Open-Source Personal Assistant'
    },
    '/fr-FR/': {
      lang: 'fr-FR',
      title: 'Léon Docs',
      description: 'Documentation de Léon - Votre assistant personnel open source'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.svg',
    repo: 'leon-ai/leon',
    docsRepo: 'leon-ai/docs.getleon.ai',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': require('./config.en-US'),
      '/fr-FR/': require('./config.fr-FR')
    }
  },
  plugins: {
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/plugin-google-analytics': {
      ga: 'UA-131760989-1'
    }
  }
};
