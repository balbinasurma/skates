module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '/tests/.*\\.test.(js)$',
	moduleFileExtensions: [ 'ts', 'js' ]
}
