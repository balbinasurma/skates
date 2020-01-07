import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import {routesArrayType} from 'types/allTypes'
import theme from '../context/theme'
import themeContext from '../context/themeContext'
import {styledMainType} from '../types/styledTypes'

const Instruktor = lazy(() => import('./routes/instruktor/Instruktor')),
	Osiagniecia = lazy(() => import('./routes/osiagniecia/Osiagniecia')),
	Zawody = lazy(() => import('./routes/zawody/Zawody')),
	Main = lazy(() => import('./routes/main/Main')),
	Header = lazy(() => import('./header/Header')),
	Footer = lazy(() => import('./footer/Footer'))

const bounce = keyframes`
from,
20%,
53%,
80%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 0, 0);
}

40%,
43% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -30px, 0);
}

70% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0, -4px, 0);
}
`

const AppMain: styledMainType = styled.main`
	min-height: 100vh;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	position: relative;

	& > aside {
		position: fixed;
		right: 51px;
		bottom: 51px;
		animation: ${bounce} 2s linear infinite;
		transform-origin: center bottom;
	}
`

const App = () => {
	let routesArray: routesArrayType = [
		{
			path: '/',
			component: <Main />
		},
		{
			path: '/osiagniecia',
			component: <Osiagniecia />
		},
		{
			path: '/instruktor',
			component: <Instruktor />
		},
		{
			path: '/zawody',
			component: <Zawody />
		}
	]

	return (
		<AppMain id='app'>
			<themeContext.Provider value={theme}>
				<Suspense fallback={<p>...</p>}>
					<Header />
				</Suspense>
				<Switch>
					{routesArray.map(({path, component}, index) => (
						<Route exact path={path} key={index}>
							<Suspense fallback={<p>...</p>}>{component}</Suspense>
						</Route>
					))}
				</Switch>
				{process.env.NODE_ENV === 'development' && (
					<Suspense fallback={<p>...</p>}>
						<Footer />
					</Suspense>
				)}
				<aside>
					<FontAwesomeIcon icon={faAngleDoubleDown} color='white' size='4x' />
				</aside>
			</themeContext.Provider>
		</AppMain>
	)
}

export default App
