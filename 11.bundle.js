(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{50:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(10),r=n.p+"6befdd70258d923c50aafb15ffec9c2f.jpg";const c=o.a.header`
	height: calc(100vh - 5px);
	position: relative;
	flex-direction: column-reverse;


	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${r});
		background-size: cover;
		background-position: center top;
		z-index: -1;
		filter: ${({heroScrollPercentage:e})=>`grayscale(70%) brightness(85%) blur(${7*e}px)`};
		transition-timing-function: cubic-bezier(.95,.02,.75,.66);
	}

	& > main {
		width: 400px;
		max-width: 100vw;
		height: auto;
		text-align: justify;
		color: white;
		line-height: 100%;
		font-size: 9vw;
		z-index: 1;
		text-shadow: 1px 1px 1px gray;
	}

	@media only screen and (max-width: 900px) {
		& > main {
			font-size: 14vw;
		}
	}

	@media only screen and (max-width: 600px) {
		& > main {
			font-size: 24vw;
		}
	}
`;t.default=()=>{const e=Object(i.useRef)(),[t,n]=Object(i.useState)(0);return Object(i.useEffect)(()=>{document.addEventListener("scroll",()=>{let t=window.scrollY,i=e.current.clientHeight;t<i&&n(t/i)})},[]),a.a.createElement(c,{ref:e,heroScrollPercentage:t},a.a.createElement("main",null,"Balbina Surma"))}}}]);