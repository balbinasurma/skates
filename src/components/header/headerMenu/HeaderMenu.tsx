import React from 'react'
import styled from 'styled-components'
import {styledNavType} from '../../../types/styledTypes'
import HeaderMenuItem from './HeaderMenuItem'

const HeaderMenuNav: styledNavType = styled.nav`
	min-height: 70px;
	display: flex;
	align-items: center;
	position: relative;

	border: 1px solid red;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`

interface linkItem {
	title: string
	path: string
}

type linksArrayType = linkItem[]

let linksArray: linksArrayType = [
	{title: 'głowna', path: '/'},
	{title: 'osiągnięcia', path: '/osiagniecia'},
	{title: 'instruktor', path: '/instruktor'},
	{title: 'zawody', path: '/zawody'}
]

const HeaderMenu = () => (
	<HeaderMenuNav>
		{linksArray.map(({title, path}, index) => <HeaderMenuItem title={title} path={path} key={index} />)}
	</HeaderMenuNav>
)

export default HeaderMenu
