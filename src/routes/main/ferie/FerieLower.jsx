import React from 'react'
import styled from 'styled-components'

const FerieLowerDiv = styled.div`
	background: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	padding: 1% 2%;

	& > h1 {
		font-size: 3.5vh;
		text-align: center;
		text-transform: uppercase;
	}

	& > section {
		width: 100%;
		height: 80%;
		display: flex;
		flex-direction: column;

		& > article {
			width: 100%;
			height: 50%;
			display: flex;
			align-items: center;

			& > h2 {
				height: 100%;
				min-width: 30%;
				max-width: 30%;
				margin: 0;
				padding: 10px;
				font-size: 22px;
				text-transform: uppercase;
				letter-spacing: 0.05vw;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				text-align: right;
			}

			& > hr {
				width: 1px;
				height: 80%;
				margin: 0;
				border-right: none;
			}

			& > main {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;

				& > ul {
					margin: 0;
					font-size: 19px;
					text-transform: uppercase;
					padding: 5px 0 5px 30px;
					font-weight: 600;
					letter-spacing: 2px;

					& > li {
						font-weight: normal;
						text-transform: none;
						letter-spacing: normal;
						line-height: 3vh;
						list-style-type: square;
					}
				}
			}

			&:first-child,
			:last-child {
				max-height: 25%;
			}
		}
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_TWO}) {
		& > section {
			border-color: yellow;

			& > article {
				& > h2 {
					font-size: 16px;
				}

				& > main {
					& > ul {
						font-size: 14px;
					}
				}
			}
		}
	}

	@media only screen and (max-width: ${process.env.BREAKPOINT_ONE}) {
		& > section {
			& > article {
				flex-direction: column;
				align-items: center;

				& > h2 {
					width: 100%;
					min-width: 100%;
					text-align: center;
					justify-content: center;
					height: auto;
				}

				& > hr {
					height: 1px;
					width: 80%;
				}

				& > main {
					width: 80%;

					& > ul {
						font-size: 12px;

						& > li {
							line-height: 2vh;
						}
					}
				}
			}
		}
	}
`

const FerieLower = ({data}) => {
	let sectionTitle = data.subsectionTitle,
		subsectionContent = data.subsectionContent

	return (
		<FerieLowerDiv>
			<h1>{sectionTitle}</h1>
			<section>
				{subsectionContent.map(({step, points, content}, index) => (
					<article key={index}>
						<h2>{step}</h2>
						<hr />
						<main>
							{points ? (
								<ul>{points.map((point, index) => <li key={index}>{point}</li>)}</ul>
							) : (
								content &&
								content.map(({stage, points}, index) => (
									<ul key={index}>
										{stage}
										{points.map((point, index) => <li key={index}>{point}</li>)}
									</ul>
								))
							)}
						</main>
					</article>
				))}
			</section>
		</FerieLowerDiv>
	)
}

export default FerieLower
