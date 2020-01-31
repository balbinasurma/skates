import {arrayOf, bool, func, isRequired, number, object, string} from 'prop-types'

export const headerMenuItemPathType = string
export const headerMenuItemTitleType = string
export const mobileMenuOpenType = bool
export const setMobileMenuOpenType = func

export const headerSocialItemLabelType = string
export const headerSocialItemIconType = arrayOf(string)
export const headerSocialItemLinkType = string

export const mainTitleType = string
export const mainContentType = object
export const heroBackgroundImageType = string
export const isHeroFullSizeType = bool
export const isHeroShadedType = number
export const heroImagePOsitionTopType = string
export const isHeroBrightType = number

export const heroTitleType = mainTitleType

export const mainSectionTitleType = string
export const mainSectionContentType = object
export const mainSectionBackgroundImageType = string

export const isWhiteType = bool.isRequired
