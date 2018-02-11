const path = require("path")
module.exports = {
	entry:path.resolve(__dirname,"./src/index.js"),
	presets: [
		require('poi-preset-react')()
	],
	webpack: {
		resolve:{
			alias:{
				"@Components":path.resolve(__dirname,"./src/Components"),
				"@Views":path.resolve(__dirname,"./src/Views")
			}
		},
		devServer: {
			proxy: {
				"/**": {
					target: "http://localhost:3000"
				}
			}
		}
	}
}