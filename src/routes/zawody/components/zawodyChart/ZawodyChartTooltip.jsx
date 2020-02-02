import React, {useEffect} from 'react'

import styled from 'styled-components'

const ZawodyChartTooltipAside = styled.aside`
	min-width: 80px;
	min-height: 40px;
	box-shadow: 0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 1px rgba(60, 64, 67, .16);
	background: white;
	position: absolute;
	padding: 10px;
	border-radius: 4px;
	display: none;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	& > h1 {
		font-size: 1.25rem;
		margin: 0;
		white-space: nowrap;
		overflow-x: hidden;
		font-weight: 500;
		line-height: 2rem;
	}

	& > header {
		display: flex;

		& > h2 {
			margin: 0;
			font-size: .875rem;
			opacity: .6;
			font-weight: 400;
			line-height: 1.25rem;
		}
	}

	& > main {
		margin: 0.5rem 0 0 0;
		width: 100%;

		& > p {
			font-size: 0.8rem;
			margin: 0 0 0.3rem 0;
		}
	}

	& > section {
		display: flex;
		justify-content: flex-start;

		& > a {
			padding: 0 0.5em;
			text-decoration: none;
			color: black;
			text-transform: uppercase;
			background: none;
			height: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			font-size: .75rem;
			border-radius: 4px;
			margin-right: 8px;
			cursor: pointer;
			font-weight: bold;

			&:last-child {
				margin: 0;
			}

			&:hover {
				background: rgba(0, 0, 0, 0.05);
			}
		}
	}
`

const ZawodyChartTooltip = ({chartTooltipRef}) => {
	useEffect(() => {
		const handleClick = ({target}) => {
			if (target.nodeName !== 'circle' && target.nodeName !== 'a') {
				chartTooltipRef.current.style.display = 'none'
			}
		}

		window.addEventListener('click', handleClick)

		return () => window.removeEventListener('click', handleClick)
	}, [])

	return (
		<ZawodyChartTooltipAside
			className="zawody-chart-tooltip"
			ref={chartTooltipRef}
			onMouseLeave={({target}) => (target.style.display = 'none')}
		/>
	)
}

export default ZawodyChartTooltip
