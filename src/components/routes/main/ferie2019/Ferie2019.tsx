import React from 'react'
import styled from 'styled-components'
import FerieLower from './ferieLower/FerieLower'
import FerieUpper from './ferieUpper/FerieUpper'
// @ts-ignore
import rolki from './rolki.jpg'

const Ferie2019Section = styled.section`
	height: 200vh;
	// @ts-ignore
	background-image: ${({ rolki }) => `url(${rolki})`};
	background-repeat: no-repeat;
	background-size: cover;
	justify-content: space-between;

	& > * {
		width: 100%;
		height: 48%;
		display: flex;
		flex-direction: column;
	}
`

const Ferie2019 = () => (
	// @ts-ignore
	<Ferie2019Section rolki={rolki}>
		<FerieUpper />
		<FerieLower />
	</Ferie2019Section>
)

export default Ferie2019
