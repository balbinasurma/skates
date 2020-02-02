import * as d3 from 'd3'

// define hovering on data dot
const handleHoverDataPoint = ({city}, chartTooltipRef) => {
	const {type, offsetX, offsetY} = d3.event

	let tooltip = d3.select(chartTooltipRef.current),
		thisCircle = d3.select(`circle#${city.replace(/\W/g, '')}`)

	if (type === 'mouseover') {
		thisCircle.style('fill', 'transparent').style('stroke', 'black')
		tooltip
			.html(city)
			.style('display', 'flex')
			.style('justify-content', 'center')
			.style('left', `${offsetX}px`)
			.style('top', `${offsetY + 35}px`)
			.transition()
			.delay(0)
	} else if (type === 'mouseleave') {
		thisCircle.style('stroke', 'transparent').style('fill', 'black')
	}
}

export default handleHoverDataPoint
