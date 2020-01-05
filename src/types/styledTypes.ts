import {StyledComponent} from 'styled-components'
import {Link} from 'react-router-dom'

export type styledAType = StyledComponent<'a', never>
export type styledArticleType = StyledComponent<'article', never>
export type styledAsideType = StyledComponent<'aside', never>
export type styledButtonType = StyledComponent<'button', never>
export type styledHeaderType = StyledComponent<'header', never>
export type styledLinkType = StyledComponent<typeof Link, never>
export type styledMainType = StyledComponent<'main', never>
export type styledNavType = StyledComponent<'nav', never>
export type styledSectionType = StyledComponent<'section', never>
