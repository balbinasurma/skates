import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const FerieUpperDiv = styled.div`
	color: white;

	& > main {
		flex-grow: 1;
		height: 80%;
		display: flex;
		align-items: center;

		& > div {
			display: flex;
			align-items: center;
			width: 70%;
			letter-spacing: 1px;
			text-align: justify;
			font-size: 16px;
			line-height: 120%;
			font-weight: 600;
			text-shadow: 1px 0px 1px rgba(150, 150, 150, 0.5);
		}

		& > *:first-child {
			margin: auto;
			transform: rotateY(180deg);
			filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .7));
		}
	}

	& > footer {
		display: flex;
		height: 20%;
		width: 100%;

		& > article {
			width: calc(100% / 3);
			height: 100%;
			display: flex;
			align-items: center;
			padding: 1%;
			background: rgba(0, 0, 0, 0.25);

			& > * {
				flex-grow: 1;
			}

			& > h2 {
				margin: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				text-transform: uppercase;
				font-size: 2vw;
				text-align: center;
				padding: 2%;
			}
		}
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		& > main {
			flex-direction: column;

			& > div {
				min-height: 50%;
				width: 100%;
			}
		}

		& > footer > article {
			flex-direction: column;

			& > h2 {
				font-size: 2vh;
			}
		}
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		& > footer > article {
			& > *:first-child {
				font-size: 3em;
			}

			& > h2 {
				font-size: 1.5vh;
			}
		}
	}
`

const FerieUpper = ({ data }) => {
	let infoText = data.text,
		infoData = data.footer,
		icon = data.icon

	return (
		<FerieUpperDiv>
			<main>
				<FontAwesomeIcon icon={icon} color="white" size="10x" />
				<div>{infoText}</div>
			</main>
			<footer>
				{infoData.map(({ icon, value }, index) => (
					<article key={index}>
						<FontAwesomeIcon icon={icon} color="white" size="4x" />
						<h2>{value}</h2>
					</article>
				))}
			</footer>
		</FerieUpperDiv>
	)
}

export default FerieUpper
