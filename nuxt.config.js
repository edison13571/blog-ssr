
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: '~/assets/styles/scss/main.scss', lang: 'scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  styleResources: {
    scss: './assets/styles/scss/variables.scss',
    // less: './assets/**/*.less'
    // sass: ...
  },
  axios: {
    proxy: false
    // proxyHeaders: false
  },
  server: {
    port: 3066, // default: 3000
    // host: '0.0.0.0', // default: localhost
  },
  build: {
    /*
    ** You can extend webpack config here
    */

    extend (config, ctx) {
    }
  }
}
