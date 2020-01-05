import React, {Fragment} from 'react'
import styled from 'styled-components'
import {styledSectionType} from 'types/styledTypes'
// @ts-ignore
import katowice from './katowice.jpg'
// @ts-ignore
import gdansk from './gdansk.jpg'
// @ts-ignore
import gorlice from './gorlice.jpg'
// @ts-ignore
import grodzisk from './grodzisk.jpg'
// @ts-ignore
import gostyn from './gostyn.jpg'
import PucharPolskiItem from './PucharPolskiItem'
import {pucharPolskiItemArray} from 'types/allTypes'
import PucharPolskiDivider from './PucharPolskiDivider'

const PucharPolskiSection: styledSectionType = styled.section`
	box-shadow: 0 -3px 6px rgba(0, 0, 0, .5);
	display: flex;
	flex-direction: column;
	padding: 100px 10%;

	& > h1 {
		font-size: 35px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		letter-spacing: 5px;
		margin-top: 0;
	}

	& > aside {
		margin: 50px 0;
		width: 100%;
		display: flex;

		& > hr {
			width: 40%;
			border-color: lightgray;
			color: red;
		}
	}

	@media only screen and (max-width: 900px) {
		padding: 100px 5%;
	}

	@media only screen and (max-width: 600px) {
		padding: 100px 1%;
	}
`

let pucharPolskiDataArray: pucharPolskiItemArray = [
	{
		title: 'X Puchar Śląska Katowice',
		date: '01.09.2019',
		picture: katowice,
		comment:
			'Finał Długodystansowego Pucharu Polski 2019 na dystansie maratonu w Katowicach. Sezon rolkowy zakończony 7 msc w generalnej klasyfikacji OPEN PP wśród Polek i 4 msc Finału Pucharu Kaszub w klasyfikacji OPEN!'
	},
	{
		title: 'XI Maraton Sierpniowy Gdańsk',
		date: '17.08.2019',
		picture: gdansk,
		comment:
			'Długodystansowe Mistrzostwa Polski na dystansie maratonu i IV edycja Pucharu Polski w Gdańsku. Nowy rekord trasy... lekcje odrobione'
	},
	{
		title: 'Weekend Pełen Energii Gorlice',
		date: '18.05.2019',
		picture: gorlice,
		comment: 'III Edycja Pucharu Polski w Gorlicach zaliczona i zakończona życiówką na dystansie maratonu 1:29:53'
	},
	{
		title: 'IV Półmaraton o Dzban Bernarda Grodzisk Wielkopolski',
		date: '27.04.2019',
		picture: grodzisk,
		comment:
			'Długodystansowe Mistrzostwa Polski na dystansie półmaratonu oraz II edycja Pucharu Polski w Grodzisku Wielkopolskim. III msc w kategorii wiekowej'
	},
	{
		title: 'II Wyścig o Puchar Siemowita Gostynin',
		date: '14.04.2019',
		picture: gostyn,
		comment: ''
	}
]

const PucharPolski = () => (
	<PucharPolskiSection>
		{/* <h1>puchar polski 2019</h1> */}

		{pucharPolskiDataArray.map(({title, date, picture, comment}, index) => (
			<Fragment key={index}>
				<PucharPolskiItem comment={comment} picture={picture} date={date} title={title} />
				{index !== pucharPolskiDataArray.length - 1 && <PucharPolskiDivider />}
			</Fragment>
		))}
	</PucharPolskiSection>
)

export default PucharPolski
