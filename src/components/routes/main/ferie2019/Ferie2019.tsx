import React from 'react'
import styled from 'styled-components'
import {styledSectionType} from 'types/styledTypes'

const Ferie2019Section: styledSectionType = styled.section`
	min-height: 100vh;
	align-items: center;

	& > h1 {
		font-size: 50px;
		margin: 0;
	}

	& > main {
		width: 100%;
		min-height: 500px;
		height: 100%;
		border: 1px solid red;
	}
`

const Ferie2019 = () => (
	<Ferie2019Section>
		<h1>Ferie Zimowe 2019</h1>
		<main>main</main>
	</Ferie2019Section>
)

export default Ferie2019
