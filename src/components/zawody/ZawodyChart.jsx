import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import hasWojAnyRecords from 'functions/hasWojAnyRecords'
import dataBackup from './data/dataBackup'
import calcScale from './functions/calcScale'
import calcOffset from './functions/calcOffset'
import calcProjection from './functions/calcProjection'

const ZawodyChartDiv = styled.div`
	height: 500px;
	user-select: none;
	position: relative;

	& > aside {
		min-width: 10px;
		padding: 0 8px;
		font-family: Roboto;
		font-size: 10px;
		color: #ffffff;
		border-radius: 4px;
		background: rgba(97, 97, 97, 0.90);
		height: 24px;
		position: absolute;
		top: 0;
		display: none;
		align-items: center;
		justify-content: center;
		transition: 0.0675s;
		transform: scale(1) translate(-50%);
	}

	& > svg {
		width: 100%;
		height: 100%;
		border: 0px solid lightgray;

		& > g {
			& > g.wojewodztwo {
				&.blank {
					& > path {
						fill: #ffffff;
						stroke: lightgray;
					}
				}

				&.notBlank {
					cursor: pointer;

					& > path {
						stroke: white;

						&.active {
							transition: 0.25s;
							fill: lightgray !important;
							cursor: default;
						}

						&:not(.active):hover {
							opacity: 0.85;
						}
					}

					& > text {
						fill: gray;
						font-size: 20px;
						text-anchor: middle;
					}
				}
			}
		}
	}
`

const ZawodyChart = ({calendarData}) => {
	const chartRef = useRef(),
		[ chartDimmensions, setChartDimmensions ] = useState(),
		cityNameRef = useRef()

	const drawChart = async () => {
		// define basic variables
		let svg = d3.select(chartRef.current),
			totalWidth = chartDimmensions[0],
			totalHeight = chartDimmensions[1],
			offset = calcOffset(totalWidth, totalHeight),
			scale = calcScale(),
			// get data
			// dataLink =
			// 	'https://gist.githubusercontent.com/filipstachura/391ecb779d56483c070616a4d9239cc7/raw/b0793391ab0478e0d92052d204e7af493a7ecc92/poland_woj.json',
			// data = await d3.json(dataBackup)

			data = dataBackup,
			{features} = data

		console.log(calendarData)

		// append WOJ to each woj
		features.forEach((feature) => (feature.WOJ = feature.properties.HASC_1.replace('.', '').slice(2)))

		// define variables for centering map
		let center = d3.geoCentroid(data),
			projection = calcProjection(scale, center, offset),
			path = d3.geoPath().projection(projection),
			bounds = path.bounds(data),
			// filter data to only Poland
			polandData = calendarData.filter(({country}) => country === 'POL'),
			uniqueWoj = Array.from(new Set(polandData.map((record) => record.woj))),
			numberOfRecordsInWoj = uniqueWoj
				.map((woj) => polandData.filter((record) => record.woj === woj).length)
				.sort(),
			wojColors = d3
				.scaleSequential()
				.domain([ 0, numberOfRecordsInWoj.slice(-1) ])
				.interpolator(d3.interpolateCividis)

		// center map
		scale = calcScale(totalWidth, totalHeight, bounds)
		offset = calcOffset(totalWidth, totalHeight, bounds)
		projection = calcProjection(0.975 * scale, center, offset)
		path = d3.geoPath().projection(projection)

		// remove all previous maps
		d3.select('g.country').remove()

		// define country
		let country = svg.append('g').attr('class', 'country'),
			zoom = 1,
			// define wojewodztwo
			wojewodztwaGroup = country
				.selectAll('.wojewodztwo')
				.data(features)
				.enter()
				.append('g')
				.attr('id', ({WOJ}) => WOJ)
				.attr('class', ({WOJ}) => `wojewodztwo ${hasWojAnyRecords(polandData, WOJ) ? 'notBlank' : 'blank'}`)

		// define hovering on data dot
		const handleHoverDataPoint = ({city}) => {
			const {type, offsetX, offsetY} = d3.event

			let tooltip = d3.select(cityNameRef.current)

			if (type === 'mouseover') {
				tooltip
					.style('left', `${offsetX}px`)
					.style('top', `${offsetY + 25}px`)
					.html(city)
					.transition()
					.style('display', 'flex')
			} else {
				tooltip.style('display', 'none')
			}
		}

		// define click on woj function
		const clickOnWoj = (woj) => {
			const {WOJ} = woj

			let thisWojGroup = svg.select(`g#${WOJ}`),
				thisWojPath = svg.select(`path#${WOJ}`),
				x,
				y,
				dataForThisWoj = polandData.filter(({woj}) => woj === WOJ)

			if (thisWojPath.classed('active')) {
				;[ x, y ] = calcOffset(totalWidth, totalHeight)

				zoom = 1

				thisWojPath.classed('active', false)
				thisWojGroup.select('text').text(dataForThisWoj.length)

				thisWojGroup.selectAll('circle').transition().duration(500).remove()
			} else {
				;[ x, y ] = path.centroid(woj)

				let thisWojPathBounds = path.bounds(woj)

				zoom = calcScale(totalWidth, totalHeight, thisWojPathBounds)

				thisWojPath.classed('active', true)
				thisWojGroup.select('text').text(WOJ)
				thisWojGroup
					.selectAll('circle')
					.data(dataForThisWoj)
					.enter()
					.append('circle')
					.attr('cx', ({longitude, latitude}) => projection([ longitude, latitude ])[0])
					.attr('cy', ({longitude, latitude}) => projection([ longitude, latitude ])[1])
					.on('mouseover', handleHoverDataPoint)
					.on('mouseleave', handleHoverDataPoint)
					.transition()
					.duration(500)
					.attr('r', 2)
			}

			// all other woj will have .active removed
			country.selectAll(`path:not(#${WOJ})`).classed('active', false)

			// apply zoom on map
			country
				.transition()
				.duration(750)
				.attr(
					'transform',
					`translate(${totalWidth / 2}, ${totalHeight / 2})scale(${zoom})translate(${-x},${-y})`
				)
				.style('stroke-width', `${1.5 / zoom}px`)
		}

		// append path to each woj
		wojewodztwaGroup
			.append('path')
			.attr('d', path)
			.attr('id', ({WOJ}) => WOJ)
			.attr('fill', ({WOJ}) => wojColors(hasWojAnyRecords(polandData, WOJ)))
			.on('click', (woj) => hasWojAnyRecords(polandData, woj.WOJ) && clickOnWoj(woj))

		// append text numbers if there are any competitons in woj
		wojewodztwaGroup
			.append('text')
			.attr('x', (d) => path.centroid(d)[0])
			.attr('y', (d) => path.centroid(d)[1])
			.text(({WOJ}) => (hasWojAnyRecords(polandData, WOJ) ? hasWojAnyRecords(polandData, WOJ) : undefined))
	}

	// handleResizing
	useEffect(() => {
		const handleResizing = () => {
			const {current: {clientWidth, clientHeight}} = chartRef
			setChartDimmensions([ clientWidth, clientHeight ])
		}

		window.addEventListener('resize', handleResizing)

		handleResizing()

		return () => window.removeEventListener('resize', handleResizing)
	}, [])

	// invoke drawChart with data and dimmensions
	useEffect(
		() => {
			if (chartDimmensions) {
				drawChart()
			}
		},
		[ dataBackup, chartDimmensions, calendarData ]
	)

	return (
		<ZawodyChartDiv>
			<svg ref={chartRef} />
			<aside ref={cityNameRef} />
		</ZawodyChartDiv>
	)
}

export default ZawodyChart
