(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n);const l=a(10).a.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
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

	& > div {
		min-width: 100%;
		max-height: 100vh;
		display: flex;
		align-items: center;

		& > img {
			margin: auto;
			max-width: 100%;
			height: auto;
			max-height: 100vh;
		}
	}

	& > h4 {
		text-align: justify;
		font-size: 20px;
		letter-spacing: 2px;
	}

	@media only screen and (max-width: 600px) {
		& > div {
			height: 98vh;
			overflow-y: auto;
			max-width: 100vw;

			& > img {
				height: 95%;
				width: auto;
				max-width: unset;
			}
		}
	}
`;t.default=({title:e,comment:t,date:a,picture:n})=>i.a.createElement(l,null,i.a.createElement("h3",null,e),i.a.createElement("h2",null,a),i.a.createElement("h4",null,t),i.a.createElement("div",null,i.a.createElement("img",{src:n,alt:e,onLoad:({target:e})=>{let t=e.width;e.parentElement.scrollLeft=t/3,console.log("aaa")}})))}}]);