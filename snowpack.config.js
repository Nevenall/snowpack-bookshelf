// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
   mount: {
      public: { url: '/', static: true, resolve: false },
      src: { url: '/dist' },
   },
   plugins: [
      '@snowpack/plugin-svelte'
   ],
   packageOptions: {

   },
   devOptions: {
      port: 8080
   },
   buildOptions: {

   },
};
