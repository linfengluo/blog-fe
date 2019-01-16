const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '锋言疯语',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'user-scalable=no, width=device-width,initial-scale=1.0,viewport-fit=cover' },
      { name: 'keywords', content: 'HTML, CSS, XML, XHTML, JavaScript, VUE, REACT, JS, 前端, FE, F2E, UX, EX, 用户体验, 交互设计' },
      { hid: 'description', name: 'description', content: '一个技术渣渣的胡言乱语' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#FF5722',
    height: '4px'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/scss/main.scss',
    '~/scss/sspai.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: true,
    baseURL: process.env.NODE_ENV === 'production' ? 'https://luolinfeng.com/' : 'http://localhost:3302/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
