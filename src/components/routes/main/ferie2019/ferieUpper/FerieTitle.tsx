import React from 'react'
import styled from 'styled-components'
import {styledH1Type} from 'types/styledTypes'

const FerieTitleH1: styledH1Type = styled.h1`
	font-size: 50px;
	margin: 0;
	text-align: center;
	color: white;

	@media only screen and (max-width: 900px) {
		font-size: 40px;
	}

	@media only screen and (max-width: 600px) {
		font-size: 35px;
	}
`

const FerieTitle = () => <FerieTitleH1>Ferie Zimowe 2019/2020</FerieTitleH1>

export default FerieTitle
