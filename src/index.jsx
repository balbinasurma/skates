import './index.css'

import {
	faAt,
	faBars,
	faCalendarAlt,
	faClock,
	faMapMarkedAlt,
	faSkating,
	faSortDown,
	faTimes
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faLinkedin, fab} from '@fortawesome/free-brands-svg-icons'

import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(
	fab,
	faFacebookSquare,
	faLinkedin,
	faAt,
	faBars,
	faTimes,
	faSkating,
	faCalendarAlt,
	faClock,
	faMapMarkedAlt,
	faSortDown
)

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)
