import React from 'react'
import MainGeneric from '../../src/components/generic/mainGeneric/MainGeneric'
import HeroMainGeneric from '../../src/components/generic/mainGeneric/HeroMainGeneric'
import SectionForMainGeneric from '../../src/components/generic/sectionForMain/SectionForMainGeneric'
import SectionTitleForMainGeneric from '../../src/components/generic/sectionForMain/SectionTitleForMainGeneric'

const LIST_OF_ALL_GENERIC_COMPONENTS = [
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

export default LIST_OF_ALL_GENERIC_COMPONENTS
