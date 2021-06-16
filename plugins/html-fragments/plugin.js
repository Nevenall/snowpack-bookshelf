const fs = require('fs').promises
const compiler = require('svelte/compiler')

module.exports = function (_, options) {
   return {
      name: 'html-fragments',
      resolve: {
         input: ['.book.html'],
         output: ['.js'],
      },
      async load({ filePath }) {
         // console.log(options)
         var ret = null
         try {
            console.log(filePath)
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

