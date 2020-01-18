import React from 'react'
import styled from 'styled-components'
import HeaderMenuItem from './HeaderMenuItem'

const HeaderMenuNav = styled.nav`
	min-height: 70px;
	display: flex;
	align-items: center;
	position: relative;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		// @ts-ignore
		display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? 'block' : 'none')};
		position: absolute;
		left: 0;
		top: 70px;
		width: 100%;
	}
`

let linksArray = [
	{ title: 'głowna', path: '/' },
	{ title: 'osiągnięcia', path: '/osiagniecia' },
	{ title: 'instruktor', path: '/instruktor' },
	{ title: 'zawody', path: '/zawody' }
]

const HeaderMenu = ({ mobileMenuOpen }) => (
	// @ts-ignore
	<HeaderMenuNav mobileMenuOpen={mobileMenuOpen}>
		{linksArray.map(({ title, path }, index) => <HeaderMenuItem title={title} path={path} key={index} />)}
	</HeaderMenuNav>
)

export default HeaderMenu
