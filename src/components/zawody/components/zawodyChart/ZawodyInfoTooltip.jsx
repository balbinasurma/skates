import React, {useEffect} from 'react'

import styled from 'styled-components'

const ZawodyInfoTooltipAside = styled.aside`
	min-width: 200px;
	min-height: 100px;
	box-shadow: 0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 1px rgba(60, 64, 67, .16);
	background: white;
	position: absolute;
	top: 300px;
	left: 200px;
	padding: 10px;
	border-radius: 4px;
	display: none;
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

const ZawodyInfoTooltip = ({infoRef}) => {
	useEffect(() => {
		const handleClickOutsideTooltip = ({target}) => {
			console.log(target.nodeType)
			if (
				!infoRef.current.contains(target) &&
				infoRef.current.style.display === 'flex' &&
				target.nodeType !== 'circle'
			) {
				console.log('outside')
				infoRef.current.style.display === 'none'
			}
		}

		window.addEventListener('click', handleClickOutsideTooltip)
	}, [])

	return <ZawodyInfoTooltipAside id="zawody-info-tooltip" ref={infoRef} />
}

export default ZawodyInfoTooltip
