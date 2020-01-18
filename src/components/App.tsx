import injectTagInHtml from '../functions/injectTagInHtml'
import React, { Fragment, useEffect } from 'react'

const App = () => {
	//injection meta data to index.html
	useEffect(() => {
		injectTagInHtml('meta', 'htmlMetaData')
	}, [])

	return (
		// app doesn't have styled, becuase doesn't need
		<Fragment>
			{/* alfa */}
			{/* HEADER */}
			{/* <Header /> */}
		</Fragment>
	)
}

export default App
