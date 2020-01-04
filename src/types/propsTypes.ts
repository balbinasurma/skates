import {titleType, pathType} from './allTypes'
import {setMobileMenuOpenType, mobileMenuOpenType} from './statesTypes'

export type headerMenuPropsType = {title: titleType; path: pathType}

export type MobileMenuIconPropsType = {mobileMenuOpen: mobileMenuOpenType; setMobileMenuOpen: setMobileMenuOpenType}
