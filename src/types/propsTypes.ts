import {titleType, pathType, socialMediaInterface, pucharPolskiItemInterface} from './allTypes'
import {setMobileMenuOpenType, mobileMenuOpenType} from './hooksTypes'

export type headerMenuItemPropsType = {title: titleType; path: pathType}
export type MobileMenuIconPropsType = {mobileMenuOpen: mobileMenuOpenType; setMobileMenuOpen: setMobileMenuOpenType}
export type headerMenuPropsType = {mobileMenuOpen: mobileMenuOpenType}
export type headerSocialItemPropsType = socialMediaInterface
export type pucharPolskiItemPropsType = pucharPolskiItemInterface
