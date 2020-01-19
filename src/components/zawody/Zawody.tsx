import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

const ZawodyDiv = styled.div`
	border: 2px solid red;
	height: 500px;

	& > svg {
		width: 100%;
		height: 100%;
		border: 2px solid blue;
	}
`

const Zawody = ({dataArray}) => {
	const chartRef = useRef()

	useEffect(
		() => {
			if (dataArray) {
				let chart = d3.select(chartRef.current)

				chart.append('circle').attr('r', 30).attr('cx', 50).attr('cy', 50)
			}
		},
		[ dataArray ]
	)

	return (
		<ZawodyDiv>
			<svg
				// @ts-ignore
				ref={chartRef}
			/>
		</ZawodyDiv>
	)
}

export default Zawody
