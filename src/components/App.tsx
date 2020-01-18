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

library.add(fab, faFacebookSquare, faLinkedin, faAt, faBars, faTimes, faSkating, faCalendarAlt, faClock, faMapMarkedAlt)

const App = () => {
	//injection meta data to index.html
	useEffect(() => {
		injectTagInHtml('meta', process.env.DATABASE_HTML_META_DATA_PATH)
	}, [])

	// @ts-ignore
	return (
		// app doesn't have styled, becuase doesn't need additional main tag
		<Fragment>
			<Header />
		</Fragment>
	)
}

export default App
