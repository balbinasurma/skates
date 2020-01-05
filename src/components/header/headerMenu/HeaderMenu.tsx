import React, {useContext} from 'react'
import styled from 'styled-components'
import {styledNavType} from '../../../types/styledTypes'
import HeaderMenuItem from './HeaderMenuItem'
import {linksArrayType} from 'types/allTypes'
import themeContext from '../../../context/themeContext'
import {headerMenuPropsType} from 'types/propsTypes'

const HeaderMenuNav: styledNavType = styled.nav`
	// @ts-ignore
	min-height: ${({headerItemHeight}) => headerItemHeight};
	display: flex;
	align-items: center;
	position: relative;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		//@ts-ignore
		display: ${({mobileMenuOpen}) => (mobileMenuOpen ? 'block' : 'none')};
		position: absolute;
		left: 0;
		// @ts-ignore
		top: ${({headerItemHeight}) => headerItemHeight};
		width: 100%;
	}
`

let linksArray: linksArrayType = [
	{title: 'głowna', path: '/'},
	{title: 'osiągnięcia', path: '/osiagniecia'},
	{title: 'instruktor', path: '/instruktor'},
	{title: 'zawody', path: '/zawody'}
]

const HeaderMenu = ({mobileMenuOpen}: headerMenuPropsType) => {
	// @ts-ignore
	const {headerItemHeight} = useContext(themeContext)

	return (
		// @ts-ignore
		<HeaderMenuNav headerItemHeight={headerItemHeight} mobileMenuOpen={mobileMenuOpen}>
			{linksArray.map(({title, path}, index) => <HeaderMenuItem title={title} path={path} key={index} />)}
		</HeaderMenuNav>
	)
}

export default HeaderMenu
