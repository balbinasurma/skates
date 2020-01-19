import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'

const HeroMainGenericHeader = styled.header`
	min-height: 30vh;
	height: ${({isHeroFullSize}) => `calc(${isHeroFullSize ? '100vh' : '35vh'} - 5px)`};
	position: relative;
	display: flex;
	flex-direction: column-reverse;
	padding: 10vh 10%;
	box-shadow: 0 3px 6px rgba(0, 0, 0, .5);

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: ${({heroBackgroundImage}) =>
			heroBackgroundImage ? `url(${heroBackgroundImage})` : undefined};
		background-size: cover;
		background-position: center top;
		z-index: -1;
		filter: ${({heroScrollPercentage}) => `grayscale(70%) brightness(85%) blur(${heroScrollPercentage * 7}px)`};
		transition-timing-function: cubic-bezier(.95, .02, .75, .66);
	}

	& > h1 {
		width: 400px;
		max-width: 100%;
		height: auto;
		text-align: justify;
		color: white;
		line-height: 100%;
		font-size: 9vh;
		z-index: 1;
		text-shadow: 1px 1px 1px gray;
		margin: 0;
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		& > h1 {
			font-size: 14vw;
		}
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		& > h1 {
			font-size: 20vw;
		}
	}
`

const HeroMainGeneric = ({heroTitle, heroBackgroundImage, isHeroFullSize}) => {
	const heroRef = useRef(),
		[ heroScrollPercentage, setHeroScrollPercentage ] = useState(0)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			let scrollPosition = window.scrollY,
				heroHeight = heroRef.current.clientHeight

			if (scrollPosition < heroHeight) {
				setHeroScrollPercentage(scrollPosition / heroHeight)
			}
		})
	}, [])

	return (
		<HeroMainGenericHeader
			className="hero-main-generic"
			ref={heroRef}
			heroScrollPercentage={heroScrollPercentage}
			heroBackgroundImage={heroBackgroundImage}
			isHeroFullSize={isHeroFullSize}>
			<h1>{heroTitle}</h1>
		</HeroMainGenericHeader>
	)
}

export default HeroMainGeneric
