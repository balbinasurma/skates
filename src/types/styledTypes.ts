import {StyledComponent} from 'styled-components'
import {Link} from 'react-router-dom'

export type styledButtonType = StyledComponent<'button', never>
export type styledHeaderType = StyledComponent<'header', never>
export type styledMainType = StyledComponent<'main', never>
export type styledNavType = StyledComponent<'nav', never>
export type styledSectionType = StyledComponent<'section', never>
export type styledLinkType = StyledComponent<typeof Link, never>
