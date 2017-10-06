let mix = require('laravel-mix');
// pug
mix.pug = require('laravel-mix-pug');
// notification
mix.disableNotifications();


// distination
const dist   = 'dist'
const htmldist = `${dist}/`
const cssdist  = `${dist}/css`
const jsdist   = `${dist}/js`


// run
mix.sass('src/sass/app.scss', cssdist)
  .js('src/js/app.js', jsdist)
  // .extract(['vue', 'jquery'])
  .options({
    processCssUrls: false,
    extractVueStyles: true
  })
  .pug('src/pug/*.pug', htmldist, {seeds:'src/pug/seeds', prettyIndent: true});
