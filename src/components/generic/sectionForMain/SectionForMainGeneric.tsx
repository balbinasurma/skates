import React from 'react'
import styled from 'styled-components'
import SectionTitleForMainGeneric from './SectionTitleForMainGeneric'

const SectionForMainGenericSection = styled.section`
	display: flex;
	flex-direction: column;
	padding: 10vh 10%;
	min-height: 100vh;
	// @ts-ignore
	background-image: ${({mainSectionBackgroundImage}) => `url(${mainSectionBackgroundImage})`};
	background-repeat: no-repeat;
	background-size: cover;
	justify-content: space-between;

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

const SectionForMainGeneric = ({
	mainSectionTitle,
	mainSectionContent,
	mainSectionBackgroundImage
}: {
	mainSectionTitle
	mainSectionContent
	mainSectionBackgroundImage?: string
}) => {
	let isWhite = mainSectionBackgroundImage ? true : false

	return (
		// @ts-ignore
		<SectionForMainGenericSection mainSectionBackgroundImage={mainSectionBackgroundImage}>
			{mainSectionTitle && <SectionTitleForMainGeneric isWhite={isWhite} mainSectionTitle={mainSectionTitle} />}
			{mainSectionContent}
		</SectionForMainGenericSection>
	)
}

export default SectionForMainGeneric
