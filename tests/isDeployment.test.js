const isDeployment = require('../src/functions/isDevelopment').default

test('first test', () => {
	expect(isDeployment()).toBe(false)
})
