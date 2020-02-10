module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		'plugin:prettier/recommended',
		"prettier/react",
		"prettier"
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	"parser": "@typescript-eslint/parser",
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'tsconfigRootDir': __dirname,
	    'project': ['./tsconfig.json'],
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'prettier'
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	'rules': {
		"@typescript-eslint/explicit-function-return-type": "off",
		'prettier/prettier': ['error']
  },
  "overrides": [
    {
		//turns on some rules only for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["error"]
      }
	}
]
}