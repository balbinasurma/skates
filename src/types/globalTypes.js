import {bool, string, isRequired, func, arrayOf} from 'prop-types'

export const headerMenuItemPathType = string.isRequired
export const headerMenuItemTitleType = string.isRequired
export const mobileMenuOpenType = bool
export const setMobileMenuOpenType = func

export const headerSocialItemLabelType = string.isRequired
export const headerSocialItemIconType = arrayOf(string.isRequired).isRequired
export const headerSocialItemLinkType = string.isRequired

export const mainTitleType = string
export const mainContentType = string
export const heroBackgroundImageType = string
export const isHeroFullSizeType = bool.isRequired
export const isHeroShadedType = bool.isRequired
export const heroImagePOsitionTopType = string
export const isHeroBrightType = bool.isRequired

export const heroTitleType = mainTitleType

export const mainSectionTitleType = string.isRequired
export const mainSectionContentType = string.isRequired
export const mainSectionBackgroundImageType = string.isRequired

export const isWhiteType = bool.isRequired
