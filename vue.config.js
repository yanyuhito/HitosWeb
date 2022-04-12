module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/HitosWeb/'
    : '/'
"transpileDependencies": [
    "vuetify"
  ],



  pluginOptions: {
    prerenderSpa: {

      registry: undefined,
      renderRoutes: [
        '/', '/daily', '/my_family'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}