import * as d3 from 'd3'

import React, {useEffect, useRef, useState} from 'react'

import ZawodyCityNameTooltip from './ZawodyCityNameTooltip'
import ZawodyInfoTooltip from './ZawodyInfoTooltip'
import calcOffset from '../../functions/calcOffset'
import calcProjection from '../../functions/calcProjection'
import calcScale from '../../functions/calcScale'
import dataBackup from '../../data/dataBackup'
import handleClickOnDataPoint from '../../functions/handleClickOnDataPoint'
import handleHoverDataPoint from '../../functions/handleHoverDataPoint'
import hasWojAnyRecords from 'components/zawody/functions/hasWojAnyRecords'
import styled from 'styled-components'

const ZawodyChartDiv = styled.div`
	height: 70vh;
	user-select: none;
	position: relative;

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

					& > circle {
						transition: 0.3s;
					}
				}
			}
		}
	}
`

const ZawodyChart = ({dataArray}) => {
	const [ chartDimmensions, setChartDimmensions ] = useState(),
		chartRef = useRef(),
		cityNameRef = useRef(),
		infoRef = useRef()

	const drawChart = async () => {
		// define basic variables
		let svg = d3.select(chartRef.current),
			totalWidth = chartDimmensions[0],
			totalHeight = chartDimmensions[1],
			offset = calcOffset(totalWidth, totalHeight),
			scale = calcScale(),
			// dataLink =
			// 	'https://gist.githubusercontent.com/filipstachura/391ecb779d56483c070616a4d9239cc7/raw/b0793391ab0478e0d92052d204e7af493a7ecc92/poland_woj.json',
			// data = await d3.json(dataBackup)

			data = dataBackup,
			{features} = data

		// append WOJ to each woj
		features.forEach((feature) => (feature.WOJ = feature.properties.HASC_1.replace('.', '').slice(2)))

		// define variables for centering map
		let center = d3.geoCentroid(data),
			projection = calcProjection(scale, center, offset),
			path = d3.geoPath().projection(projection),
			bounds = path.bounds(data),
			// filter data to only Poland
			polandData = dataArray && dataArray.filter(({country}) => country === 'POL'),
			uniqueWoj = Array.from(new Set(polandData && polandData.map((record) => record.woj))),
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
					.attr('id', ({city}) => city.replace(/\W/g, ''))
					.on('mouseover', (d) => handleHoverDataPoint(d, cityNameRef))
					.on('mouseleave', (d) => handleHoverDataPoint(d, cityNameRef))
					.on('click', (d) => handleClickOnDataPoint(d, infoRef, cityNameRef))
					.transition()
					.duration(500)
					.attr('r', 4)
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
		[ chartDimmensions, dataArray ]
	)

	return (
		<ZawodyChartDiv>
			<svg ref={chartRef} />
			<ZawodyCityNameTooltip cityNameRef={cityNameRef} />
			<ZawodyInfoTooltip infoRef={infoRef} />
		</ZawodyChartDiv>
	)
}

export default ZawodyChart
