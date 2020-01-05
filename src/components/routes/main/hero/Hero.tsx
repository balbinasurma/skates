import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
//@ts-ignore
import heroImage from './heroImage.jpg'

const HeroHeader = styled.header`
	width: 100%;
	height: calc(100vh - 5px);
	display: flex;
	align-items: flex-end;
	position: relative;

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
		z-index: -1;
		// @ts-ignore
		filter: ${({heroScrollPercentage}) => `grayscale(70%) brightness(85%) blur(${heroScrollPercentage * 7}px)`};
	}

	& > main {
		margin-left: 50px;
		margin-bottom: 30px;
		width: 400px;
		height: 240px;
		text-align: justify;
		color: white;
		line-height: 100%;
		font-size: 120px;
		z-index: 1;
		// display: flex;
		// justify-content: center;
		// align-items: center;

		text-shadow: 1px 1px 1px gray;
	}
`

const Hero = () => {
	const heroRef: React.MutableRefObject<any> = useRef(),
		[heroScrollPercentage, setHeroScrollPercentage] = useState(0)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			let scrollPosition: number = window.scrollY,
				heroHeight: number = heroRef.current.clientHeight

			if (scrollPosition < heroHeight) {
				setHeroScrollPercentage(scrollPosition / heroHeight)
			}
		})
	}, [])

	return (
		// @ts-ignore
		<HeroHeader ref={heroRef} heroScrollPercentage={heroScrollPercentage}>
			<main>Balbina Surma</main>
		</HeroHeader>
	)
}

export default Hero
