import React from 'react'
import styled from 'styled-components'
//@ts-ignore
import heroImage from './heroImage.jpg'

const HeroHeader = styled.header`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${heroImage});
		background-size: cover;
		background-position: center top;
		filter: grayscale(70%) brightness(85%);
	}

	& > h1 {
		color: black;
		font-size: 50px;
	}

	& > main {
		margin-left: 100px;
		width: 600px;
		height: 500px;
		border: 1px solid red;
		color: white;
		font-size: 80px;
		z-index: 1;
	}
`

const Hero = () => (
	<HeroHeader>
		<main>xxx xxxx</main>
	</HeroHeader>
)

export default Hero
