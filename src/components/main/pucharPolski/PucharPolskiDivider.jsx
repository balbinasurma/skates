import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const PucharPolskiDividerAside = styled.aside`
	margin: 75px 0;
	width: 100%;
	display: flex;
	align-items: center;

	& > hr {
		width: 40%;
		border-color: lightgray;
		color: red;
		height: 1px;
	}
`
const PucharPolskiDivider = () => (
	<PucharPolskiDividerAside>
		<hr />
		<FontAwesomeIcon icon={faTrophy} size="2x" />
		<hr />
	</PucharPolskiDividerAside>
)

export default PucharPolskiDivider
