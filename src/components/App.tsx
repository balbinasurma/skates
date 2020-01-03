import React from 'react'
import styled, {keyframes} from 'styled-components'
import {styledMainType} from '../types/styledTypes'
import Header from './header/Header'
import {Switch, Route} from 'react-router-dom'
import Main from './routes/main/Main'
import themeContext from '../context/themeContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import Osiagniecia from './routes/osiagniecia/Osiagniecia'
import Instruktor from './routes/instruktor/Instruktor'
import Zawody from './routes/zawody/Zawody'

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
	// useEffect(() => {
	// 	let resources
	// 	;(async () => {
	// 		function initMap() {
	// 			map = new google.maps.Map(document.getElementById('map'), {
	// 				center: {lat: -34.397, lng: 150.644},
	// 				zoom: 8
	// 			})
	// 		}

	// 		let aaa = async () => {
	// 			if (resources) {
	// 				await resources
	// 				return
	// 			}

	// 			const SCRIPT = document.createElement('script')
	// 			SCRIPT.type = 'text/javascript'
	// 			SCRIPT.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDyvK1-DbhdWI6CXi2i_0ejD2CrHpqPb1U'

	// 			document.head.appendChild(SCRIPT)
	// 			// @ts-ignore
	// 			SCRIPT.loaded = new Promise((resolved) => (SCRIPT.onload = () => resolved()))

	// 			resources = Promise.all([SCRIPT.loaded])
	// 			await resources
	// 		}

	// 		let aaa = await aaa()
	// 	})()
	// }, [])

	type pathType = string
	type componentType = JSX.Element
	type routesArrayType = {path: pathType; component: componentType}[]

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
			<themeContext.Provider value={{color1: 'rgb(244, 247, 246)', color2: 'rgb(33, 33, 33)'}}>
				<Header />
				<Switch>
					{routesArray.map(({path, component}, index) => (
						<Route exact path={path} key={index}>
							{component}
						</Route>
					))}
				</Switch>
				<aside>
					<FontAwesomeIcon icon={faAngleDoubleDown} color='white' size='4x' />
				</aside>
			</themeContext.Provider>
		</AppMain>
	)
}

export default App
