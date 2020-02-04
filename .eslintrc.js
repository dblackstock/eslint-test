module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		"prettier/react"
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'prettier'
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	'rules': {
		'prettier/prettier': 'error',
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		// 'linebreak-style': [
		// 	'error',
		// 	'unix'
		// ],
		// 'quotes': [
		// 	'error',
		// 	'double'
		// ],
		// 'semi': [
		// 	'error',
		// 	'never'
		// ],
		// 'object-curly-spacing': [
		// 	"error",
		// 	"always"
		// ]
	}
}