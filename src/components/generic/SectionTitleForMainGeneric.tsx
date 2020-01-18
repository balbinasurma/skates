import React from 'react'
import styled from 'styled-components'

const SectionTitleForMainGenericH1 = styled.h1`
	font-size: 50px;
	margin: 0;
	text-align: center;
	color: white;
	text-transform: uppercase;

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		font-size: 40px;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		font-size: 35px;
	}
`

const SectionTitleForMainGeneric = ({ mainSectionTitle }) => (
	<SectionTitleForMainGenericH1>{mainSectionTitle}</SectionTitleForMainGenericH1>
)

export default SectionTitleForMainGeneric
