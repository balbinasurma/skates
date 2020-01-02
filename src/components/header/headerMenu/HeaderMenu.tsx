import React from 'react'
import styled from 'styled-components'
import {styledNavType} from '../../../types/styledTypes'
import HeaderMenuItem from './HeaderMenuItem'

const HeaderMenuNav: styledNavType = styled.nav`
	height: 100%;
	display: flex;
`

let buttons = ['głowna', 'osiągnięcia', 'instruktor']

const HeaderMenu = () => (
	<HeaderMenuNav>{buttons.map((button, index) => <HeaderMenuItem title={button} key={index} />)}</HeaderMenuNav>
)

export default HeaderMenu
