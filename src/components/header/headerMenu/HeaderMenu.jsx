import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import HeaderMenuItem from './HeaderMenuItem'
import getDataFromDB from '../../../functions/getDataFromDB'
import {mobileMenuOpenType} from 'types/globalTypes'

const HeaderMenuNav = styled.nav`
	min-height: 70px;
	display: flex;
	align-items: center;
	position: relative;

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		flex-direction: column;
		display: ${({mobileMenuOpen}) => (mobileMenuOpen ? 'block' : 'none')};
		position: absolute;
		left: 0;
		top: 70px;
		width: 100%;
	}
`

const HeaderMenu = ({mobileMenuOpen}) => {
	const [ linksArray, setLinksArray ] = useState()

	useEffect(() => {
		;(async () => {
			setLinksArray(await getDataFromDB(process.env.DATABASE_OTHER_ROUTES))
		})()
	}, [])

	return (
		<HeaderMenuNav mobileMenuOpen={mobileMenuOpen} className="header-menu">
			{linksArray &&
				linksArray.map(({title, path}, index) => (
					<HeaderMenuItem headerMenuItemTitle={title} headerMenuItemPath={path} key={index} />
				))}
		</HeaderMenuNav>
	)
}

HeaderMenu.proptypes = {
	mobileMenuOpen: mobileMenuOpenType
}

export default HeaderMenu
