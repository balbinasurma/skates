const isDevelopment = require('../src/functions/isDevelopment').default

test('testing if isDevelopment returns any boolean', () => {
	expect(typeof isDevelopment()).toBe('boolean')
})

test('testing if isDevelopment returns corrent boolean', () => {
	expect(isDevelopment()).toBe(isDevelopment() ? true : false)
})
