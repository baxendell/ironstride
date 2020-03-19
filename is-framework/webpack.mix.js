let mix = require('laravel-mix');
let ImageMinPlugin = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin = require('copy-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

require("laravel-mix-purgecss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// Set Public Path Current Directory
mix.setPublicPath('./');

mix.scripts(
    [
        './assets/js/vendors/bootstrap.bundle.min.js',
        './assets/js/vendors/enquire.min.js',
        './assets/js/vendors/jquery.smooth-scroll.js',
        './assets/js/vendors/jquery.matchHeight-min.js',
        './assets/js/vendors/jquery.magnific-popup.min.js',
        './assets/js/vendors/slick.js',
        './assets/js/vendors/jquery.waypoints.js',
        './assets/js/vendors/sticky.js',
        // './assets/js/vendors/vue.min.js'
    ],
    'assets/dist/js/vendor.js'
);

mix.autoload({'jquery': ['window.$', 'window.jQuery']});

// Compile Javascript and Sass files.
mix.js('assets/js/custom/theme.js', 'assets/dist/js/').sourceMaps();

mix.sass('assets/scss/theme.scss', 'assets/dist/css/', {});

// Prevent mix from trying to resolve urls.
mix.options({
    processCssUrls: false
});

mix.disableNotifications();

// Source maps when not in production.
if (!mix.config.production) {

    mix.webpackConfig({
        devtool: "inline-source-map",
        plugins: [
            new LiveReloadPlugin()
        ]
    }).sourceMaps();

}

if (mix.config.production) {
    mix.version();

    mix.webpackConfig({
        plugins: [
            new CopyWebpackPlugin([{
                from: 'assets/images',
                to: 'assets/images'
            }]),
            new ImageMinPlugin([{
                test: /\.(jpe?g|png|gif|svg)$/i
            }])
        ]
    });

}


// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.dump(); <-- Dump the generated webpack config object t the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });