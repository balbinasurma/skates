import * as d3 from 'd3'

const calcProjection = (scale, center, offset) =>
	d3.geoMercator().scale(scale).center(center).translate(offset ? offset : undefined)

export default calcProjection
