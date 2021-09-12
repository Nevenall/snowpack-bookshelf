// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
   mount: {
      public: { url: '/', static: true, resolve: false },
      src: { url: '/' }
   },
   plugins: [
      '@snowpack/plugin-svelte',
      '@snowpack/plugin-sass',
      './plugins/svelte-inline-svg/plugin.js',
      ['./plugins/pages/plugin.js', { source: "src/book" }]
   ],
   packageOptions: {

   },
   devOptions: {
      port: 8080,
      open: 'none'
   },
   buildOptions: {
      htmlFragments: true
   },
};
