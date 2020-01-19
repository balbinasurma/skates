import React from 'react'
import styled from 'styled-components'

const SectionTitleForMainGenericH1 = styled.h1`
	font-size: 50px;
	margin: 0 0 3vh 0;
	text-align: center;
	text-transform: uppercase;
	color: ${({isWhite}) => (isWhite ? 'white' : undefined)};

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		font-size: 40px;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		font-size: 30px;
	}
`

const SectionTitleForMainGeneric = ({isWhite, mainSectionTitle}) => (
	<SectionTitleForMainGenericH1 className="section-title-for-main-generic" isWhite={isWhite}>
		{mainSectionTitle}
	</SectionTitleForMainGenericH1>
)

export default SectionTitleForMainGeneric
