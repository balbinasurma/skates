(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{49:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(10);const r=o.a.div`
	background: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

	padding: 1% 2%;

	& > h1 {
		font-size: 3.5vh;
		text-align: center;
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

	@media only screen and (max-width: 900px) {
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

	@media only screen and (max-width: 600px) {
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
`;let l=[{step:"przygotowanie do zajęć",points:["rozgrzewka ogólna","rozgrzewka rolkarska w butach sportowych"]},{step:"elementy Wrotkarstwa Szybkiego",content:[{stage:"technika",points:["prawidłowa postawa rolkarska","ćwiczenia specjalistyczne"]},{stage:"praktyka",points:["jazda po torze - skręty z przeplatanką w prawo i w lewo","bezpieczny przejazd przez przeszkody","jazda na jednej nodze","jazda slalomem","jazda tyłem","nawroty"]}]},{step:"zabawa",points:["mecz hokeja","ćwiczenia rozciągające"]}];var c=()=>n.a.createElement(r,null,n.a.createElement("h1",null,"Plan Zajęć"),n.a.createElement("section",null,l.map(({step:e,points:a,content:t},i)=>n.a.createElement("article",{key:i},n.a.createElement("h2",null,e),n.a.createElement("hr",null),n.a.createElement("main",null,a?n.a.createElement("ul",null,a.map((e,a)=>n.a.createElement("li",{key:a},e))):t&&t.map(({stage:e,points:a},t)=>n.a.createElement("ul",{key:t},e,a.map((e,a)=>n.a.createElement("li",{key:a},e))))))))),s=t(21),d=t(20);const p=o.a.h1`
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
`;var m=()=>n.a.createElement(p,null,"Ferie Zimowe 2019/2020");const h=o.a.div`
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
`;var w=()=>{let e=[{icon:s.d,value:"27 styczeń\n - 2 luty"},{icon:s.e,value:"w czasie zajęć sportowych"},{icon:s.f,value:"Szkoła Podstawowa nr. 2 w świeciu "}];return n.a.createElement(h,null,n.a.createElement(m,null),n.a.createElement("main",null,n.a.createElement("div",null,["Cześć!","Już w pierwszy tydzień ferii zapraszam serdecznie dzieci i młodzież ze Szkoły Podstawowej nr 2 w Świeciu na bezpłatne warsztaty z techniki jazdy szybkiej na rolkach.","Warsztaty odbędą się w ramach trwania zajęć sportowych ,,białych ferii’’ na sali gimnastycznej szkoły.","Obejmować będą m.in. ćwiczenia prawidłowej postawy rolkarskiej, bezpiecznego hamowania i upadku, jeśli tylko czas pozwoli zapraszam do gry w hokeja na rolkach!","Dwie drużyny z zawodnikami mieszanymi w butach/na rolkach - może być ciekawie :-)","Czy założone rolki będą udogodnieniem, a może utrudnieniem ? To się okaże :-)","Ruszamy do zabawy!","Spędźmy te ferie aktywnie…","Zabierz strój sportowy, a także jeśli posiadasz własne rolki. Nie jest to jednak koniecznością - naukę wrotkarstwa zaczyna się właśnie od ćwiczeń w butach :-)"].map((e,a)=>n.a.createElement("p",{key:a},e))),n.a.createElement(d.a,{icon:s.g,color:"white",size:"8x"})),n.a.createElement("footer",null,e.map(({icon:e,value:a},t)=>n.a.createElement("article",{key:t},n.a.createElement(d.a,{icon:e,color:"white",size:"4x"}),n.a.createElement("h2",null,a)))))},z=t.p+"9034faaf733592733443f71e4c7a3a75.jpg";const g=o.a.section`
	height: 200vh;
	// @ts-ignore
	background-image: ${({rolki:e})=>`url(${e})`};
	background-repeat: no-repeat;
	background-size: cover;
	justify-content: space-between;

	& > * {
		width: 100%;
		height: 48%;
		display: flex;
		flex-direction: column;
	}
`;a.default=()=>n.a.createElement(g,{rolki:z},n.a.createElement(w,null),n.a.createElement(c,null))}}]);