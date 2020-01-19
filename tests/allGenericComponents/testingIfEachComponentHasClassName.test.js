import React from 'react'
import {shallow} from 'enzyme'
import MainGeneric from '../../src/components/generic/mainGeneric/MainGeneric'
import HeroMainGeneric from '../../src/components/generic/mainGeneric/HeroMainGeneric'
import SectionForMainGeneric from '../../src/components/generic/sectionForMain/SectionForMainGeneric'
import SectionTitleForMainGeneric from '../../src/components/generic/sectionForMain/SectionTitleForMainGeneric'

let testsArray = [
	{
		component: <MainGeneric />,
		className: 'main-generic'
	},
	{
		component: <SectionForMainGeneric />,
		className: 'section-for-main-generic'
	},
	{
		component: <HeroMainGeneric />,
		className: 'hero-main-generic'
	},
	{
		component: <SectionTitleForMainGeneric />,
		className: 'section-title-for-main-generic'
	}
]

testsArray.map(({component, className}) => {
	test(className, () => {
		let testedComponent = shallow(component)

		expect(testedComponent.hasClass(className)).toEqual(true)
	})
})
