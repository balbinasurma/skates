import './index.css'

import {
	faAt,
	faBars,
	faCalendar,
	faCalendarAlt,
	faClock,
	faMapMarkedAlt,
	faMapSigns,
	faRoad,
	faShieldAlt,
	faSkating,
	faSortDown,
	faTimes,
	faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faLinkedin, fab} from '@fortawesome/free-brands-svg-icons'

import App from './components/App'
import {HashRouter} from 'react-router-dom'
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
	faSortDown,
	faTimesCircle,
	faMapSigns,
	faRoad,
	faCalendar,
	faShieldAlt
)

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
)
