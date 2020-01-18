import isDeployment from '../src/functions/isDevelopment'

test('first test', () => {
	expect(isDeployment().toBe(false))
})
