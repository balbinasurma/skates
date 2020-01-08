import React from 'react'
import styled from 'styled-components'
import {styledSectionType} from 'types/styledTypes'
// @ts-ignore
import poster from './poster.jpg'

const Ferie2019Section: styledSectionType = styled.section`
	align-items: center;

	& > h1 {
		font-size: 50px;
		margin: 0;
		text-align: center;
	}

	& > main {
		margin-top: 4vh;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		& > img {
			max-width: 50%;
			max-height: 100%;
			height: auto;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			/* border: 5px solid transparent; */
		}
	}

	@media only screen and (max-width: 900px) {
		border: 1px solid blue;
	}

	@media only screen and (max-width: 600px) {
		border: 1px solid green;
		height: auto;

		& > h1 {
			font-size: 7vh;
		}

		& > main {
			flex-direction: column;

			& > img {
				max-width: 100%;
			}
		}
	}
`

const Ferie2019 = () => (
	<Ferie2019Section>
		<h1>Ferie Zimowe 2019/2020</h1>
		<main>
			<img src={poster} alt={'poster'} />
		</main>
	</Ferie2019Section>
)

export default Ferie2019
