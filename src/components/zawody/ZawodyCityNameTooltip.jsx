import React from 'react'
import styled from 'styled-components'

const ZawodyCityNameTooltipAside = styled.aside`
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
`
const ZawodyCityNameTooltip = ({cityNameRef}) => <ZawodyCityNameTooltipAside ref={cityNameRef} />

export default ZawodyCityNameTooltip
