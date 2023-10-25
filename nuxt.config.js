const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  plugins: [{ src: '@/plugins/socket', ssr: false }, '~/plugins/formulate.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */

  css: ['~/assets/css/tailwind.css'],
  
  buildModules: [
    '@braid/vue-formulate/nuxt'
  ],

  build: {
    transpile: [
      'axios'
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
