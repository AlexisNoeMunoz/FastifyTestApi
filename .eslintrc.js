module.exports = {
	env: {
		es2021: true,
		node: true,
		worker: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		semi: ["error", "never"],
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		"no-unused-vars": 1,
		"max-len": ["error", { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true }],
		"eol-last": ["error", "always"],
		"linebreak-style": 0,
	},
}
