import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {routesArrayType} from 'types/allTypes'
import theme from '../context/theme'
import themeContext from '../context/themeContext'
import injectTagInHtml from '../functions/injectTagInHtml'
import {styledMainType} from '../types/styledTypes'
import Header from './header/Header'
import Main from './routes/main/Main'

// const bounce = keyframes`
// from,
// 20%,
// 53%,
// 80%,
// to {
//   animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//   transform: translate3d(0, 0, 0);
// }

// 40%,
// 43% {
//   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
//   transform: translate3d(0, -30px, 0);
// }

// 70% {
//   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
//   transform: translate3d(0, -15px, 0);
// }

// 90% {
//   transform: translate3d(0, -4px, 0);
// }
// `

const AppMain: styledMainType = styled.main`
	min-height: 100vh;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	position: relative;

	/* & > aside {
		position: fixed;
		right: 51px;
		bottom: 51px;
		
		transform-origin: center bottom;
	} */
`

const App = () => {
	let routesArray: routesArrayType = [
		{
			path: '/',
			component: <Main />
		}
	]

	useEffect(() => {
		injectTagInHtml('meta', 'htmlMetaData')
	}, [])

	return (
		<AppMain id='app'>
			<themeContext.Provider value={theme}>
				<Header />

				<Switch>
					{routesArray.map(({path, component}, index) => (
						<Route exact path={path} key={index}>
							{component}
						</Route>
					))}
				</Switch>
				{/* 
				<aside>
					<FontAwesomeIcon icon={faAngleDoubleDown} color='white' size='4x' />
				</aside> */}
			</themeContext.Provider>
		</AppMain>
	)
}

export default App
