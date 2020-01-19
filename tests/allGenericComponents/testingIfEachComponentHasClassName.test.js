import {shallow} from 'enzyme'
import LIST_OF_ALL_GENERIC_COMPONENTS from './LIST_OF_ALL_GENERIC_COMPONENTS'

LIST_OF_ALL_GENERIC_COMPONENTS.map(({component, className}) => {
	test(`class ${className} is applied`, () => {
		let testedComponent = shallow(component)
		expect(testedComponent.hasClass(className)).toEqual(true)
	})
})
