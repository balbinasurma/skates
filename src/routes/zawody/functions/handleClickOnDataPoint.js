import * as d3 from 'd3'
import * as moment from 'moment'

import handleHoverDataPoint from './handleHoverDataPoint'

const handleClickOnDataPoint = (d, infoRef, cityNameRef) => {
	const {offsetX, offsetY} = d3.event,
		{date, title, city, link, register, facebook} = d

	handleHoverDataPoint(d, cityNameRef)

	let tooltip = d3.select(infoRef.current),
		tooltipDisplay = tooltip.style('display')

	if (tooltipDisplay === 'none') {
		console.log(date.slice(0, 10))

		let periodString = moment(date.slice(0, 10), 'YYYY/MM/DD').fromNow(),
			numberFromDate = periodString.replace(/\D/g, ''),
			periodStringPrepared = periodString
				.replace('in', 'za')
				.replace('days', 'dni')
				.replace('day', 'dzień')
				.replace('months', numberFromDate > 4 ? 'miesięcy' : 'miesiące')
				.replace('month', 'miesiąc')

		tooltip.style('display', 'flex').style('left', `${offsetX}px`).style('top', `${offsetY + 30}px`).html(`
	<h1>${title}</h1>
	<header>
	<h2>${periodStringPrepared}, ${city}</h2>
	</header>
	<section>
${link ? `<a href="${link}" target="_blank" class="button">info</a>` : ''}
${register ? `<a href="${register}" target="_blank" class="button">zapisz</a>` : ''}
${facebook ? `<a href="${facebook}" target="_blank" class="button">facebook</a>` : ''}
	</section>
	`)
	} else {
		tooltip.style('display', 'none')
	}
}

export default handleClickOnDataPoint
