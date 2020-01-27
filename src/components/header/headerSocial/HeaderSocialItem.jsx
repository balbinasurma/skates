import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {headerSocialItemIconType, headerSocialItemLinkType, headerSocialItemLabelType} from 'types/globalTypes'

const HeaderSocialItemA = styled.a`
	width: 80px;
	height: 70px;
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.4s;

	&:hover {
		transform: scale(0.9);
	}
`

const HeaderSocialItem = ({headerSocialItemIcon, headerSocialItemLink, headerSocialItemLabel}) => (
	<HeaderSocialItemA href={headerSocialItemLink} target="_blank" rel="noopener" aria-label={headerSocialItemLabel}>
		<FontAwesomeIcon
			icon={[ headerSocialItemIcon[0].slice(0, 3), headerSocialItemIcon[0].slice(3) ]}
			color="white"
			size="3x"
		/>
	</HeaderSocialItemA>
)

HeaderSocialItem.propTypes = {
	headerSocialItemIcon: headerSocialItemIconType,
	headerSocialItemLink: headerSocialItemLinkType,
	headerSocialItemLabel: headerSocialItemLabelType
}

export default HeaderSocialItem
