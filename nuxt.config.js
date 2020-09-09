import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  target: 'static',
  head: {
    titleTemplate: 'Econome',
    title: 'Econome',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Econome App' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [{ src: "~/assets/main.scss", lang: "scss" }],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: true,
    manifest: {
      name: 'Econome',
      display: 'standalone',
      theme_color: '#FDA59E',
    }
  },
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#FDA59E',
          background: '#FFFFFF',
          accent: '#666666',
          secondary: '#707070',
          white: '#FFFFFF',
          facebook: '#3B5999',
          google: '#DE5245',
          info: colors.teal,
          warning: colors.amber,
          error: colors.deepOrange,
          success: colors.green
        },
        dark: {
          primary: '#FDA59E',
          background: '#222222',
          accent: '#FDA59E',
          secondary: '#707070',
          white: '#FFFFFF',
          facebook: '#3B5999',
          google: '#DE5245',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
