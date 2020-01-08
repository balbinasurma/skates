import React from 'react'
import styled from 'styled-components'
import {pucharPolskiItemPropsType} from 'types/propsTypes'
import {styledArticleType} from 'types/styledTypes'

const PucharPolskiItemArticle: styledArticleType = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	margin-bottom: 50px;

	& > h3 {
		font-size: 24px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		letter-spacing: 5px;
	}

	& > h2 {
		font-size: 70px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		// letter-spacing: 5px;
	}

	& > div {
		min-width: 100%;
		max-height: 100vh;
		display: flex;
		align-items: center;

		& > img {
			margin: auto;
			max-width: 100%;
			height: auto;
			max-height: 100vh;
		}
	}

	& > h4 {
		text-align: justify;
		font-size: 20px;
		letter-spacing: 2px;
	}

	@media only screen and (max-width: 600px) {
		& > div {
			height: 98vh;
			overflow-y: auto;
			max-width: 100vw;

			& > img {
				height: 95%;
				width: auto;
				max-width: unset;
			}
		}
	}
`

const PucharPolskiItem = ({title, comment, date, picture}: pucharPolskiItemPropsType) => (
	<PucharPolskiItemArticle>
		<h3>{title}</h3>
		<h2>{date}</h2>
		<h4>{comment}</h4>
		<div>
			<img
				src={picture}
				alt={title}
				onLoad={({target}) => {
					// @ts-ignore
					let pictureWidth = target.width

					// @ts-ignore
					target.parentElement.scrollLeft = pictureWidth / 3
				}}
			/>
		</div>
	</PucharPolskiItemArticle>
)

export default PucharPolskiItem
