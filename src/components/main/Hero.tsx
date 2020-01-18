import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const HeroHeader = styled.header`
	height: calc(100vh - 5px);
	position: relative;
	display: flex;
	flex-direction: column-reverse;
	padding: 10vh 10%;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${process.env.LINKS_HERO_BACKGROUND});
		background-size: cover;
		background-position: center top;
		z-index: -1;
		// @ts-ignore
		filter: ${({ heroScrollPercentage }) => `grayscale(70%) brightness(85%) blur(${heroScrollPercentage * 7}px)`};
		transition-timing-function: cubic-bezier(.95, .02, .75, .66);
	}

	& > main {
		width: 400px;
		max-width: 100%;
		height: auto;
		text-align: justify;
		color: white;
		line-height: 100%;
		font-size: 9vw;
		z-index: 1;
		text-shadow: 1px 1px 1px gray;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		& > main {
			font-size: 14vw;
		}
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		& > main {
			font-size: 20vw;
		}
	}
`

const Hero = () => {
	const heroRef = useRef(),
		[ heroScrollPercentage, setHeroScrollPercentage ] = useState(0)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			let scrollPosition = window.scrollY,
				// @ts-ignore
				heroHeight = heroRef.current.clientHeight

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
