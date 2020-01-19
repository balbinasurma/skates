import React from 'react'
import {shallow} from 'enzyme'

import SectionTitleForMainGeneric from '../../src/components/generic/sectionForMain/SectionTitleForMainGeneric'

describe('testing mainSectioTitle props', () => {
	let randomString = toString(Math.random()),
		testsArray = [
			{
				description: 'returns empty string if no title passed',
				mainSectionTitle: '',
				toEqual: ''
			},
			{
				description: 'returns empty string if randomString passed',
				mainSectionTitle: randomString,
				toEqual: randomString
			}
		]

	testsArray.map(({description, mainSectionTitle, toEqual}) => {
		test(description, () => {
			const testedComponent = shallow(<SectionTitleForMainGeneric mainSectionTitle={mainSectionTitle} />)

			expect(testedComponent.text()).toEqual(toEqual)
		})
	})
})

// describe('testing isWhite prop', () => {
// 	test('isWhite is true ', () => {
// 		const testedComponent = shallow(<SectionTitleForMainGeneric mainSectionTitle={'aaa'} />)
// 		console.log(testedComponent.debug())
// 		expect(testedComponent).toHaveStyleRule('color', 'red')
// 	})
// })
