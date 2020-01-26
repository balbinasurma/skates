import React from 'react'
import styled from 'styled-components'

const FooterFooter = styled.footer`
	width: 100%;
	height: 400px;
	position: relative;
	background: rgba(240, 241, 242, 1);

	& > P {
		color: red;

		& > aside {
			border: 1px solid red;
			position: absolute;
			width: 150px;
			display: none;
			left: 100px;
		}

		&:hover {
			color: blue;
		}
	}
`

const Footer = () => (
	<FooterFooter>
		<p
			onMouseOver={({target}) => {
				let childrenArray = Array.from(target.children),
					lastChild = childrenArray && childrenArray[0]

				lastChild.style.display = 'block'
			}}
			// onMouseMove={(event) => {
			// 	const {target} = event

			// 	let childrenArray = Array.from(target.children),
			// 		lastChild = childrenArray && childrenArray[0]

			// 	// lastChild.style.left = event.movementX
			// }}
			onMouseLeave={({target}) => {
				let childrenArray = Array.from(target.children),
					lastChild = childrenArray && childrenArray[0]

				lastChild.style.display = 'none'
			}}>
			Balbina
			<aside>this is tooltip</aside>
		</p>
	</FooterFooter>
)

export default Footer
