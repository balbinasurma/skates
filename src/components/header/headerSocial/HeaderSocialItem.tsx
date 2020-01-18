import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const HeaderSocialItemA = styled.a`
	width: 80px;
	height: 70px;
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`

const HeaderSocialItem = ({ icon, link, label }) => (
	<HeaderSocialItemA href={link} target="_blank" rel="noopener" aria-label={label}>
		<FontAwesomeIcon icon={[ icon[0].slice(0, 3), icon[0].slice(3) ]} color="white" size="3x" />
	</HeaderSocialItemA>
)

export default HeaderSocialItem
