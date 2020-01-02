import React from 'react'
import styled from 'styled-components'
import {styledMainType} from '../types/styledTypes'
import Header from './header/Header'
import {Switch, Route} from 'react-router-dom'
import Main from './routes/main/Main'
import themeContext from '../context/themeContext'

const AppMain: styledMainType = styled.main`
	min-height: 100vh;
	width: 100%;
	position: relative;
`

const App = () => (
	<AppMain>
		<themeContext.Provider value={{color1: 'rgb(244, 247, 246)', color2: 'rgb(33, 33, 33)'}}>
			<Header />
			<Switch>
				<Route path='/'>
					<Main />
				</Route>
			</Switch>
		</themeContext.Provider>
	</AppMain>
)

export default App
