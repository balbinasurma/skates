// BASIC
export type componentType = JSX.Element
export type pathType = string
export type titleType = string

// COMPLEX

export type routesArrayType = {path: pathType; component: componentType}[]
export type linksArrayType = linkItemInterface[]

// INTERFACES
interface linkItemInterface {
	title: titleType
	path: pathType
}
