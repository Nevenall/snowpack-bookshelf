// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
   mount: {
      public: { url: '/', static: true, resolve: false },
      src: { url: '/dist' },
   },
   plugins: [
      '@snowpack/plugin-svelte',
      './plugins/svelte-inline-svg/plugin.js'
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
