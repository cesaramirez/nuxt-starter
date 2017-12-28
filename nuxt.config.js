
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt.starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project starter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios'
  ],
  auth: {
    user: {
      endpoint: 'http://salario-sv.app/api/v1/me',
      propertyName: 'user',
      resetOnFail: true
    },
    login: {
      endpoint: 'http://salario-sv.app/api/v1/login'
    },
    logout: {
      endpoint: 'http://salario-sv.app/api/v1/logout',
      method: 'POST'
    },
    redirect: {
      notLoggedIn: '/auth/login',
      loggedIn: '/'
    },
    token: {
      enabled: true,
      type: 'Bearer',
      localStorage: false,
      name: 'token',
      cookie: true,
      cookieName: 'token'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true
  }
}
