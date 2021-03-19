
export default {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#DC2036' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  axios: {
    baseURL: 'http://absdigital-indonesia.com:50153',
    // proxy: true,
    // proxyHeaders: false,
    // credentials: false
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/v/1/user/login', method: 'post' },
          logout: false,
          user: { url: '/api/v/1/user/profile', method: 'get' }
        }
      }
    }
  },
  // proxy: {
  //   '/api/': 'http://absdigital-indonesia.com:50153/api/v/1/'
  // },  
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss'
  },
  router: {
    linkActiveClass: 'active-link',
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  target: 'static'
}
