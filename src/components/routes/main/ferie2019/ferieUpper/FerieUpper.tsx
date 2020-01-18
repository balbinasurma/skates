import { faCalendarAlt, faClock, faMapMarkedAlt, faSkating } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import FerieTitle from './FerieTitle'

const FerieUpperDiv = styled.div`
	color: white;

	& > main {
		flex-grow: 1;
		padding: 1%;
		display: flex;
		align-items: center;

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 75%;

			& > p {
				letter-spacing: 1px;
				margin-block-start: 0;
				text-align: justify;
				margin-block-end: 0.5em;
				font-size: 15px;
				line-height: 120%;
				text-transform: uppercase;
				font-weight: 600;
				text-shadow: 1px 0px 1px rgba(150, 150, 150, 0.5);
			}
		}

		& > *:last-child {
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

			& > h2 {
				flex-grow: 1;
				height: 100%;
				margin: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				text-transform: uppercase;
				font-size: 3vh;
				text-align: center;
				padding: 2%;
			}
		}
	}

	@media only screen and (max-width: 900px) {
		& > main {
			flex-direction: column;

			& > div {
				height: 80%;
				width: 100%;
			}

			& > *:last-child {
				flex-grow: 1;
				font-size: 6em;
			}
		}

		& > footer > article > h2 {
			font-size: 2vh;
		}
	}

	@media only screen and (max-width: 600px) {
		& > main {
			& > div > p {
				font-size: 11px;
				line-height: 105%;
			}

			& > *:last-child {
				font-size: 3em;
			}
		}

		& > footer {
			& > article {
				flex-direction: column;

				& > *:first-child {
					font-size: 3em;
				}

				& > h2 {
					font-size: 1.5vh;
				}
			}
		}
	}
`

const FerieUpper = () => {
	let infoText = [
		'Cześć!',
		'Już w pierwszy tydzień ferii zapraszam dzieci i młodzież ze Szkoły Podstawowej nr 2 w Świeciu na bezpłatne warsztaty z techniki jazdy szybkiej na rolkach.',
		'Warsztaty odbędą się w ramach trwania zajęć sportowych ,,białych ferii’’ na sali gimnastycznej szkoły.',
		'Obejmować będą m.in. ćwiczenia prawidłowej postawy rolkarskiej, bezpiecznego hamowania i upadku, jeśli tylko czas pozwoli zapraszam do gry w hokeja na rolkach!',
		'Dwie drużyny z zawodnikami mieszanymi w butach/na rolkach - może być ciekawie :-)',
		'Czy założone rolki będą udogodnieniem, a może utrudnieniem ? To się okaże :-)',
		'Ruszamy do zabawy!',
		'Spędźmy te ferie aktywnie…',
		'Zabierz strój sportowy, a także jeśli posiadasz własne rolki. Nie jest to jednak koniecznością - naukę wrotkarstwa zaczyna się właśnie od ćwiczeń w butach :-)'
	]

	let infoData = [
		{ icon: faCalendarAlt, value: '27 styczeń\n - 2 luty' },
		{ icon: faClock, value: 'w czasie zajęć sportowych' },
		{ icon: faMapMarkedAlt, value: 'Szkoła Podstawowa nr. 2 w świeciu ' }
	]

	return (
		<FerieUpperDiv>
			<FerieTitle />
			<main>
				<div>{infoText.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
				<FontAwesomeIcon icon={faSkating} color="white" size="8x" />
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
