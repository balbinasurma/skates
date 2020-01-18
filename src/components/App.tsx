import injectTagInHtml from 'functions/injectTagInHtml'
import Header from 'components/header/Header'
import React, { Fragment, useEffect } from 'react'

const App = () => {
	//injection meta data to index.html
	useEffect(() => {
		injectTagInHtml('meta', process.env.DATABASE_HTML_META_DATA_PATH)
	}, [])

	// @ts-ignore
	return (
		// app doesn't have styled, becuase doesn't need additional main tag
		<Fragment>
			<Header />
		</Fragment>
	)
}

export default App
