(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{60:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a);const r=n(10).a.article`
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
		background-image: ${({picture:e})=>`url(${e})`};
		background-size: auto;
		background-position: center top;
		background-attachment: fixed;
		background-repeat: no-repeat;
		width: 100%;
		height: 60%;
	}
`;t.default=({title:e,comment:t,date:n,picture:a})=>i.a.createElement(r,{picture:a},i.a.createElement("h3",null,e),i.a.createElement("h2",null,n),i.a.createElement("h4",null,t),i.a.createElement("div",null))}}]);