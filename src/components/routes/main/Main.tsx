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
		padding: 10vh 10%;
		min-height: 100vh;
		height: 100vh;

		&:nth-child(2),
		:nth-child(3) {
			box-shadow: 0 -3px 6px rgba(0, 0, 0, .5);
		}

		&:last-child {
			height: unset;
		}
	}

	@media only screen and (max-width: 900px) {
		& > * {
			padding: 5vh 5%;
		}
	}

	@media only screen and (max-width: 600px) {
		& > * {
			padding: 5vh 1%;
		}
	}
`

const Main = () => {
	return (
		<MainMain id='main'>
			<Suspense fallback={<p>...</p>}>
				<Hero />
			</Suspense>
			<Suspense fallback={<p>...</p>}>
				<Ferie2019 />
			</Suspense>
			<Suspense fallback={<p>...</p>}>
				<PucharPolski />
			</Suspense>
		</MainMain>
	)
}

export default Main
