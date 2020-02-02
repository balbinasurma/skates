import * as d3 from 'd3'
import * as moment from 'moment'

const handleClickOnDataPoint = (d, chartTooltipRef) => {
	const {offsetX, offsetY} = d3.event,
		{date, title, city, link, register, facebook, rangaFullName, kategoria, distance, woj} = d,
		{innerHeight, innerWidth} = window

	let tooltip = d3.select(chartTooltipRef.current)

	if (tooltip) {
		let dataPrepared = date.slice(0, 10),
			periodString = moment(dataPrepared, 'YYYY.MM.DD').fromNow(),
			numberFromDate = periodString.replace(/\D/g, ''),
			periodStringPrepared = periodString
				.replace('in', 'za')
				.replace('days', 'dni')
				.replace('day', 'dzień')
				.replace('months', numberFromDate > 4 ? 'miesięcy' : 'miesiące')
				.replace('month', 'miesiąc')

		tooltip
			.attr('id', woj)
			.style('left', `${offsetX}px`)
			.style('top', `${offsetY + 30}px`)
			.style('align-items', 'flex-start')
			.html(
				`
			<h1>${title}</h1>
			<header>
			<h2>${periodStringPrepared}, ${city}</h2>
			</header>
			<main>
			${dataPrepared ? `<p><strong>DATA: </strong>${dataPrepared}</p>` : ''}
			${rangaFullName ? `<p><strong>RANGA: </strong>${rangaFullName}</p>` : ''}
			${kategoria ? `<p><strong>KATEGORIA: </strong>${kategoria}</p>` : ''}
			${distance ? `<p><strong>DYSTANS: </strong>${distance.join(', ')}</p>` : ''}
			</main>
			<section>
			${link ? `<a href="${link}" target="_blank" class="button">info</a>` : ''}
			${register ? `<a href="${register}" target="_blank" class="button">zapisz</a>` : ''}
			${facebook ? `<a href="${facebook}" target="_blank" class="button">facebook</a>` : ''}
			</section>
			`
			)

		let tooltipWidth = tooltip.node().scrollWidth,
			centerTooltipH = offsetX - tooltipWidth / 2,
			alignTooltipH = centerTooltipH

		if (centerTooltipH < 0) {
			alignTooltipH = 10
		} else if (centerTooltipH + tooltipWidth > innerWidth) {
			alignTooltipH = innerWidth - tooltipWidth - 20
		}

		tooltip.style('left', `${alignTooltipH}px`)
	}
}

export default handleClickOnDataPoint
