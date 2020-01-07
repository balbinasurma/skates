import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

// BASIC
export type componentType = JSX.Element
export type pathType = string
export type titleType = string
export type themeValueType = string
export type linkType = string
export type labelType = string
export type pucharPolskiItemTitleType = string
export type pucharPolskiItemTime = string
export type pucharPolskiItemComment = string

// COMPLEX

export type linksArrayType = linkItemInterface[]
export type routesArrayType = {path: pathType; component: componentType}[]
// export type themeType = {color1: themeValueType; color2: themeValueType; headerItemHeight: themeValueType}
// export type themeType = {}
export type socialMediaArrayType = socialMediaInterface[]
export type pucharPolskiItemArray = pucharPolskiItemInterface[]

// INTERFACES
export interface linkItemInterface {
	title: titleType
	path: pathType
}

export interface socialMediaInterface {
	icon: IconDefinition
	link: linkType
	label: labelType
}

export interface pucharPolskiItemInterface {
	comment: pucharPolskiItemComment
	date: pucharPolskiItemTime
	title: pucharPolskiItemTitleType
	picture: any
}
