import React from 'react'
import styled from 'styled-components'
import {styledNavType} from '../../../types/styledTypes'
import HeaderMenuItem from './HeaderMenuItem'

const HeaderMenuNav: styledNavType = styled.nav`
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;
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
