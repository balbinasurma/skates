/* & > aside {
		position: fixed;
		right: 51px;
		bottom: 51px;
		
		transform-origin: center bottom;
	} */

{
	/* <themeContext.Provider value={theme}> */
}

{
	/* 
				<aside>
					<FontAwesomeIcon icon={faAngleDoubleDown} color='white' size='4x' />
				</aside> */
}
{
	/* </themeContext.Provider> */
}

let routesArra = [
	{
		path: '/',
		component: <Main />
	}
]

{
	routesArray.map(({ path, component }, index) => (
		<Route exact path={path} key={index}>
			{component}
		</Route>
	))
}
