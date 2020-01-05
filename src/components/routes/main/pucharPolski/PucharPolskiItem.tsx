import React from 'react'
import styled from 'styled-components'
import {styledArticleType} from 'types/styledTypes'
import {pucharPolskiItemPropsType} from 'types/propsTypes'

const PucharPolskiItemArticle: styledArticleType = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
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

	& > img {
		max-width: 100%;
		height: auto;
	}

	& > h4 {
		text-align: justify;
		font-size: 20px;
		letter-spacing: 2px;
	}

	& > div {
		// @ts-ignore
		background-image: ${({picture}) => `url(${picture})`};
		background-size: auto;
		background-position: center top;
		background-attachment: fixed;
		background-repeat: no-repeat;
		width: 100%;
		height: 60%;
	}
`

const PucharPolskiItem = ({title, comment, date, picture}: pucharPolskiItemPropsType) => {
	console.log(picture)

	return (
		// @ts-ignore
		<PucharPolskiItemArticle picture={picture}>
			<h3>{title}</h3>
			<h2>{date}</h2>
			<h4>{comment}</h4>
			<div />
		</PucharPolskiItemArticle>
	)
}

export default PucharPolskiItem
