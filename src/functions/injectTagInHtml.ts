import getDataFromDB from './getDataFromDB'

const injectTagInHtml = async (tagType, dbLocation) => {
	let data = await getDataFromDB(dbLocation),
		arrayOfEntries = Object.entries(data)

	arrayOfEntries.forEach(([name, content]) => {
		let newElement = document.createElement(tagType)

		// @ts-ignore
		newElement.name = name
		// @ts-ignore
		newElement.content = content

		document.head.appendChild(newElement)
	})
}

export default injectTagInHtml
