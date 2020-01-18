import injectTagInHtml from 'functions/injectTagInHtml'
import Header from 'components/header/Header'
import React, { Fragment, useEffect } from 'react'

const App = () => {
	//injection meta data to index.html
	useEffect(() => {
		injectTagInHtml('meta', 'htmlMetaData')
	}, [])

	// @ts-ignore
	return (
		// app doesn't have styled, becuase doesn't need
		<Fragment>
			{/* alfa */}
			{/* HEADER */}
			<Header />
		</Fragment>
	)
}

export default App
