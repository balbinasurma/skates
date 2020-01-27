import * as d3 from 'd3'

// define hovering on data dot
const handleHoverDataPoint = ({city}, cityNameRef) => {
	// const {city} = d
	const {type, offsetX, offsetY} = d3.event

	let tooltip = d3.select(cityNameRef.current),
		thisCircle = d3.select(`circle#${city}`)

	if (type === 'mouseover') {
		thisCircle.style('fill', 'transparent')
		thisCircle.style('stroke', 'red')

		tooltip
			.style('left', `${offsetX}px`)
			.style('top', `${offsetY + 25}px`)
			.html(city)
			.transition()
			.style('display', 'flex')
	} else {
		tooltip.style('display', 'none')

		thisCircle.style('stroke', 'transparent')
		thisCircle.style('fill', 'black')
	}
}

export default handleHoverDataPoint
