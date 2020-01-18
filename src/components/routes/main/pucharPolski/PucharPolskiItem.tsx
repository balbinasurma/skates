import React from 'react'
import styled from 'styled-components'

const PucharPolskiItemArticle = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding: 1% 0;
	position: relative;
	box-sizing: border-box;

	& > h3 {
		margin: 0px;
		font-size: 24px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		letter-spacing: 5px;
	}

	& > h2 {
		margin: 3vh 0;
		font-size: 70px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		// letter-spacing: 5px;
	}

	& > img {
		width: 100%;
		flex-grow: 1;
		max-height: 75%;
		object-fit: contain;
		object-position: center center;
	}

	& > h4 {
		text-align: justify;
		font-size: 20px;
		letter-spacing: 2px;
		margin: 0 0 1vh 0;
	}

	@media only screen and (max-width: 900px) {
		& > img {
			object-fit: cover;
		}
	}

	@media only screen and (max-width: 600px) {
		& > img {
		}
	}
`

const PucharPolskiItem = ({ title, comment, date, picture }) => (
	// @ts-ignore
	<PucharPolskiItemArticle picture={picture}>
		<h3>{title}</h3>
		<h2>{date}</h2>
		<h4>{comment}</h4>

		{/* <div /> */}
		<img
			src={picture}
			alt={title}
			onLoad={({ target }) => {
				// @ts-ignore
				let pictureWidth = target.width

				// @ts-ignore
				target.parentElement.scrollLeft = pictureWidth / 3
			}}
		/>
	</PucharPolskiItemArticle>
)

export default PucharPolskiItem
