import React, {lazy, Suspense} from 'react'
import styled from 'styled-components'
import {styledMainType} from 'types/styledTypes'

const Hero = lazy(() => import('./hero/Hero')),
	PucharPolski = lazy(() => import('./pucharPolski/PucharPolski'))

const MainMain: styledMainType = styled.main`height: auto;`

const Main = () => {
	return (
		<MainMain id='main'>
			<Suspense fallback={<p>...</p>}>
				<Hero />
			</Suspense>
			<Suspense fallback={<p>...</p>}>
				<PucharPolski />
			</Suspense>
		</MainMain>
	)
}

export default Main
