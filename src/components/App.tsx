import injectTagInHtml from 'functions/injectTagInHtml'
import Header from 'components/header/Header'
import React, { Fragment, useEffect } from 'react'
import {
	faAt,
	faBars,
	faCalendarAlt,
	faClock,
	faMapMarkedAlt,
	faSkating,
	faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Route } from 'react-router-dom'
import Main from './main/Main'
import MainGeneric from './generic/MainGeneric'

library.add(fab, faFacebookSquare, faLinkedin, faAt, faBars, faTimes, faSkating, faCalendarAlt, faClock, faMapMarkedAlt)

const App = () => {
	//injection meta data to index.html
	useEffect(() => {
		injectTagInHtml('meta', process.env.DATABASE_HTML_META_DATA_PATH)
	}, [])

	return (
		// app doesn't have styled, becuase doesn't need additional main tag
		<Fragment>
			<Header />
			<MainGeneric />
			{[
				{
					path: '/',
					component: <Main />
				}
			].map(({ path, component }, index) => (
				<Route exact path={path} key={index}>
					{component}
				</Route>
			))}
		</Fragment>
	)
}

export default App
