import React, {Fragment, lazy, Suspense, useState} from 'react'
import styled from 'styled-components'
import {mobileMenuOpenStateType} from 'types/hooksTypes'
import {styledHeaderType} from 'types/styledTypes'
import isDevelopment from '../../functions/isDevelopment'

const HeaderMenu = lazy(() => import('./headerMenu/HeaderMenu')),
	HeaderSocial = lazy(() => import('./headerSocial/HeaderSocial')),
	MobileMenuIcon = lazy(() => import('./MobileMenuIcon'))

const HeaderHeader: styledHeaderType = styled.header`
	height: auto;
	padding: 0 1vw;
	display: flex;
	flex-direction: ${isDevelopment() ? 'row' : 'row-reverse'};
	background: none;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;

	& > span {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		padding: 0;
	}

	@media only screen and (max-width: 900px) {
		padding: 0;
	}
`
const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen]: mobileMenuOpenStateType = useState(false)

	return (
		<HeaderHeader>
			{isDevelopment() && (
				<Fragment>
					<Suspense fallback={<p>...</p>}>
						<HeaderMenu mobileMenuOpen={mobileMenuOpen} />
					</Suspense>

					<Suspense fallback={<p>...</p>}>
						<MobileMenuIcon mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
					</Suspense>
				</Fragment>
			)}

			<Suspense fallback={<p>...</p>}>
				<HeaderSocial />
			</Suspense>
		</HeaderHeader>
	)
}

export default Header
