import {mainSectionBackgroundImageType, mainSectionContentType, mainSectionTitleType} from 'types/globalTypes'

import React from 'react'
import SectionTitleForMainGeneric from './SectionTitleForMainGeneric'
import styled from 'styled-components'

const SectionForMainGenericSection = styled.section`
	display: flex;
	flex-direction: column;
	padding: 10vh 10%;
	min-height: 100vh;
	background-image: ${({mainSectionBackgroundImage}) =>
		mainSectionBackgroundImage ? `url(${mainSectionBackgroundImage})` : undefined};
	background-repeat: no-repeat;
	background-size: cover;
	justify-content: space-between;
	box-shadow: 0 3px 6px rgba(0, 0, 0, .5);

	& > *:not(:first-child):not(aside) {
		width: 100%;
		height: 95vh;
		display: flex;
		flex-direction: column;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		padding: 5vh 5%;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		padding: 5vh 1%;
	}
`

const SectionForMainGeneric = ({mainSectionTitle, mainSectionContent, mainSectionBackgroundImage}) => {
	let isWhite = mainSectionBackgroundImage ? true : false

	return (
		<SectionForMainGenericSection
			className="section-for-main-generic"
			mainSectionBackgroundImage={mainSectionBackgroundImage}>
			{mainSectionTitle && <SectionTitleForMainGeneric isWhite={isWhite} mainSectionTitle={mainSectionTitle} />}
			{mainSectionContent}
		</SectionForMainGenericSection>
	)
}

SectionForMainGeneric.propTypes = {
	mainSectionTitle: mainSectionTitleType,
	mainSectionContent: mainSectionContentType,
	mainSectionBackgroundImage: mainSectionBackgroundImageType
}

export default SectionForMainGeneric
