import React from 'react'
import MainGeneric from '../../src/components/generic/mainGeneric/MainGeneric'
import HeroMainGeneric from '../../src/components/generic/mainGeneric/HeroMainGeneric'
import SectionForMainGeneric from '../../src/components/generic/sectionForMain/SectionForMainGeneric'
import SectionTitleForMainGeneric from '../../src/components/generic/sectionForMain/SectionTitleForMainGeneric'
import DivForMainSection from '../../src/components/generic/subsectionForMainSection/DivForMainSection'
import DivTitleForMainSection from '../../src/components/generic/subsectionForMainSection/DivTitleForMainSection'

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
	},
	{
		component: <DivForMainSection />,
		className: 'div-for-main-section'
	},
	{
		component: <DivTitleForMainSection divTitle="xxx" />,
		className: 'div-title-for-main-section'
	}
]

export default LIST_OF_ALL_GENERIC_COMPONENTS
