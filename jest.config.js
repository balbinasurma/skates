module.exports = {
	preset: 'ts-jest',
	snapshotSerializers: [ 'enzyme-to-json/serializer' ],
	testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '/__tests__/.*\\.test.(ts|tsx)$',
	moduleFileExtensions: [ 'ts' ]
}
