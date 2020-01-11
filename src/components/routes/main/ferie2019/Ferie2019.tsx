import React from 'react'
import styled from 'styled-components'
import {styledSectionType} from 'types/styledTypes'
import FerieTitle from './FerieTitle'
// @ts-ignore
import poster from './poster.jpg'

const Ferie2019Section: styledSectionType = styled.section`
	height: 200vh;

	& > main {
		margin-top: 4vh;
		width: 100%;
		height: 90%;
		display: flex;
		align-items: center;
		flex-direction: column;

		& > div {
			width: 100%;
			height: 50%;
			display: flex;

			& > img {
				margin: auto 0;
				width: auto;
				max-width: 50%;
				max-height: 100%;
				height: auto;
				box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			}

			& > article {
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				padding: 0 2%;
				justify-content: center;

				& > p {
					margin-bottom: 0;
					margin-top: 20px;
					font-size: 20px;
				}
			}

			&:nth-child(2) {
				flex-direction: column;
				padding: 0 2%;

				& > h2 {
					font-size: 40px;
					text-align: center;
					margin-block-end: 0;
				}

				& > h3 {
					text-align: left;
					margin-top: 0;
					font-size: 28px;
					text-transform: capitalize;
					margin-block-end: 0.75em;
				}

				& > h4 {
					margin-top: 0;
					margin-block-end: 0.75em;
				}

				& > p {
					margin-top: 0;
					margin-block-end: 0.75em;
				}
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		& > main > div > article > p {
			font-size: 17px;
		}
	}

	@media only screen and (max-width: 900px) {
		height: 300vh;
		& > main {
			& > div {
				width: 100%;
				flex-direction: column;
				align-items: center;

				& > img {
					width: auto;
					height: 50%;
					max-width: unset;
				}

				& > article > p {
					font-size: 16px;
				}

				&:nth-child(2) {
					align-items: flex-start;
					height: 100vh;
				}
			}
		}
	}

	@media only screen and (max-width: 600px) {
		height: auto;

		& > main {
			height: auto;
			& > div {
				height: auto;

				& > img {
					width: auto;
					height: auto;
					max-width: 100%;
				}

				& > article {
					height: 100vh;
				}

				&:nth-child(2) {
					align-items: flex-start;
					height: 100vh;

					& > p {
						margin-block-end: 0.75em;
					}
				}
			}
		}
	}
`

let info: string[] = [
	'Cześć!',
	'Już w pierwszy tydzień ferii zapraszam serdecznie dzieci i młodzież ze Szkoły Podstawowej nr 2 w Świeciu na bezpłatne warsztaty z techniki jazdy szybkiej na rolkach.',
	'Warsztaty odbędą się w ramach trwania zajęć sportowych ,,białych ferii’’ na sali gimnastycznej szkoły.',
	'Obejmować będą m.in. ćwiczenia prawidłowej postawy rolkarskiej, bezpiecznego hamowania i upadku, jeśli tylko czas pozwoli zapraszam do gry w hokeja na rolkach!',
	'Dwie drużyny z zawodnikami mieszanymi w butach/na rolkach - może być ciekawie :-)',
	'Czy założone rolki będą udogodnieniem, a może utrudnieniem ? To się okaże :-)',
	'Ruszamy do zabawy!',
	'Spędźmy te ferie aktywnie…',
	'Zabierz strój sportowy, a także jeśli posiadasz własne rolki. Nie jest to jednak koniecznością - naukę wrotkarstwa zaczyna się właśnie od ćwiczeń w butach :-)'
]

const Ferie2019 = () => (
	<Ferie2019Section>
		<FerieTitle />
		<main>
			<div>
				<img src={poster} alt={'poster'} />
				<article>{info.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>
			</div>
			<div>
				<h2>Plan zajęć</h2>
				<h3>1. Przygotowanie do zajęć</h3>
				<p>rozgrzewka ogólna, rozciąganie</p>
				<p>rozgrzewka rolkarska w butach sportowych</p>
				<h3>2. Elementy Wrotkarstwa Szybkiego</h3>
				<h4>TECHNIKA:</h4>
				<p>prawidłowa postawa rolkarska (buty, rolki)</p>
				<p>ćwiczenia specjalistyczne z techniki wrotkarstwa szybkiego (buty, rolki)</p>
				<h4>PRAKTYKA:</h4>
				<p>jazda po torze - skręty z przeplatanką w prawo i w lewo</p>
				<p>bezpieczny przejazd przez przeszkody</p>
				<p>jazda na jednej nodze</p>
				<p>jazda slalomem</p>
				<p>jazda tyłem</p>
				<p>nawroty</p>
				<h3>3. Zabawa</h3>
				<p>mecz w hokeja - zwycięska drużyna otrzymuję nagrodę niespodziankę</p>
				<p>Na zakończenie zajęć ćwiczenia ROZCIĄGAJĄCE</p>
			</div>
		</main>
	</Ferie2019Section>
)

export default Ferie2019
