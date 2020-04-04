
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
      { rel:"shortcut icon", href:"assets/images/fav1.png", type:"image/png"},
      { rel:"stylesheet" ,href:"assets/css/bootstrap.min.css"},
      { rel:"stylesheet",href:"assets/css/font-awesome.min.css"},
      { rel:"stylesheet", href:"assets/css/flaticon.css"},
      { rel:"stylesheet", href:"assets/css/magnific-popup.css"},
      { rel:"stylesheet", href:"assets/css/pricing-tab.css"},
      { rel:"stylesheet", href:"assets/css/aos.css"},
      { rel:"stylesheet", href:"assets/css/animate.css"},
      { rel:"stylesheet", href:"assets/css/slick.css"},
      { rel:"stylesheet", href:"assets/css/default.css"},
      { rel:"stylesheet", href:"assets/css/style.css"}
    ],
    script:[
      { src: "assets/js/vendor/modernizr-3.6.0.min.js"},
      { src:"assets/js/vendor/jquery-1.12.4.min.js"},
      { src:"assets/js/popper.min.js"},
      { src:"assets/js/bootstrap.min.js"},
      { src:"assets/js/slick.min.js"},
      { src:"assets/js/isotope.pkgd.min.js"},
      { src:"assets/js/imagesloaded.pkgd.min.js"},
      { src:"assets/js/jquery.magnific-popup.min.js"},
      { src:"assets/js/ajax-contact.js"},
      { src:"assets/js/waypoints.min.js"},
      { src:"assets/js/jquery.counterup.min.js"},
      { src:"assets/js/pricing-tab.js"},
      { src:"assets/js/scrolling-nav.js"},
      { src:"assets/js/jquery.easing.min.js"},
      { src:"assets/js/aos.js"},
      { src:"assets/js/wow.min.js"},
      { src:"assets/js/validator.min.js"},
      { src:"assets/js/main.js"}
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
