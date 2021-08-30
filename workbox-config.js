module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{png,ico,jpg,json,js,css,html}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/scripts/sw.js'
};