import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'

const Ferie2019 = lazy(() => import('./ferie2019/Ferie2019')),
	Hero = lazy(() => import('./hero/Hero')),
	PucharPolski = lazy(() => import('./pucharPolski/PucharPolski'))

const MainMain: styledMainType = styled.main`
	height: auto;

	& > * {
		display: flex;
		flex-direction: column;
		padding: 100px 10%;

		&:nth-child(2) {
			box-shadow: 0 -3px 6px rgba(0, 0, 0, .5);
		}
	}

	@media only screen and (max-width: 900px) {
		& > * {
			padding: 100px 5%;
		}
	}

	@media only screen and (max-width: 600px) {
		& > * {
			padding: 100px 1%;
		}
	}
`

const Main = () => {
	return (
		<MainMain id='main'>
			<Suspense fallback={<p>...</p>}>
				<Hero />
				<Suspense fallback={<p>...</p>} />
			</Suspense>
			<Ferie2019 />
			<Suspense fallback={<p>...</p>}>
				<PucharPolski />
			</Suspense>
		</MainMain>
	)
}

export default Main
