import * as d3 from 'd3'

const handleClickOnDataPoint = (d, infoRef) => {
	console.log('click')
	console.log(d)

	let tooltip = d3.select(infoRef.current)

	tooltip.html(`<h1>aaa</h1>`)
}

export default handleClickOnDataPoint
