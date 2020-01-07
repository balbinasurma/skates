import {Link} from 'react-router-dom'
import {StyledComponent} from 'styled-components'

// BASIC

export type styledAType = StyledComponent<'a', never>
export type styledArticleType = StyledComponent<'article', never>
export type styledAsideType = StyledComponent<'aside', never>
export type styledButtonType = StyledComponent<'button', never>
export type styledDivType = StyledComponent<'div', never>
export type styledHeaderType = StyledComponent<'header', never>
export type styledLinkType = StyledComponent<typeof Link, never>
export type styledMainType = StyledComponent<'main', never>
export type styledNavType = StyledComponent<'nav', never>
export type styledSectionType = StyledComponent<'section', never>

//temp
type headerItemHeightType = string
type mobileMenuOpenType = string
type heroScrollPercentageType = number

// WITH PROPS
export type MobileMenuIconButtonStyledType = {headerItemHeight: headerItemHeightType}
export type HeaderMenuNavStyledType = {headerItemHeight: headerItemHeightType; mobileMenuOpen: mobileMenuOpenType}
export type HeaderSocialSectionStyledType = {headerItemHeight: headerItemHeightType}
export type HeaderSocialItemAStyledType = {headerItemHeight: headerItemHeightType}
export type HeroHeaderStyledType = {heroScrollPercentage: heroScrollPercentageType}
export type HeaderMenuItemLinkStyledType = {headerItemHeight: headerItemHeightType}
