(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{61:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i);const r=n(10).a.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding: 1% 0;
	position: relative;
	box-sizing: border-box;

	& > h3 {
		margin: 0px;
		font-size: 24px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		letter-spacing: 5px;
	}

	& > h2 {
		margin: 3vh 0;
		font-size: 70px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		// letter-spacing: 5px;
	}

	& > img {
		width: 100%;
		flex-grow: 1;
		max-height: 75%;
		object-fit: contain;
		object-position: center center;
	}

	& > h4 {
		text-align: justify;
		font-size: 20px;
		letter-spacing: 2px;
		margin: 0 0 1vh 0;
	}

	@media only screen and (max-width: 900px) {
		& > img {
			object-fit: cover;
		}
	}

	@media only screen and (max-width: 600px) {
		& > img {
		}
	}
`;t.default=({title:e,comment:t,date:n,picture:i})=>a.a.createElement(r,{picture:i},a.a.createElement("h3",null,e),a.a.createElement("h2",null,n),a.a.createElement("h4",null,t),a.a.createElement("img",{src:i,alt:e,onLoad:({target:e})=>{let t=e.width;e.parentElement.scrollLeft=t/3}}))}}]);