import React from 'react'

import SectionTitleForMainGeneric from '../../src/components/generic/sectionForMain/SectionTitleForMainGeneric'
import {shallow} from 'enzyme'

test('init', () => {
	const testedComponent = shallow(<SectionTitleForMainGeneric mainSectionTitle="title" />)

	expect(testedComponent.text()).toEqual('title')
})
