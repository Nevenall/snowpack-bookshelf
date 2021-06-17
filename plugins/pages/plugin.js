const fs = require('fs').promises
const compiler = require('svelte/compiler')

module.exports = function (_, options) {
   return {
      name: 'pages',
      resolve: {
         input: ['.page.html'],
         output: ['.js'],
      },

      async load({ filePath }) {
         var ret = null
         try {
            let source = await fs.readFile(filePath, 'utf-8')
            let compiled = compiler.compile(source, { filename: filePath })
            ret = compiled.js.code
         } catch (ex) {
            console.log(ex)
         }

         return ret
      }

   }
}

