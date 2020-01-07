(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{49:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(10),a=n(12),s=n(18);const l=Object(r.a)(a.b)`
	height: 50%;
	display: flex;
	background: none;
	color: white;
	border: none;
	text-align: center;
	padding: 0 10px;
	justify-content: center;
	cursor: pointer;
	text-transform: uppercase;
	font-family: Roboto, sans-serif;
	font-size: 20px;
	font-weight: bold;
	margin: 0 10px;
	border-bottom: 3px solid transparent;
	text-decoration: none;
	transition: border 0.8s;
	text-shadow: 1px 1px 1px gray;

	&:first-child {
		border-bottom: 3px solid white;
	}

	&:hover {
		border-color: white;
	}

	@media only screen and (max-width: 900px) {
		// @ts-ignore
		height: ${({headerItemHeight:e})=>e};
		border-color: transparent !important;
		align-items: center;
	}

`;var p=({title:e,path:t})=>{const{headerItemHeight:n}=Object(o.useContext)(s.a);return(i.a.createElement(l,{headerItemHeight:n,to:t},e))};const d=r.a.nav`
	// @ts-ignore
	min-height: ${({headerItemHeight:e})=>e};
	display: flex;
	align-items: center;
	position: relative;

	@media only screen and (max-width: 900px) {
		flex-direction: column;

		//@ts-ignore
		display: ${({mobileMenuOpen:e})=>e?"block":"none"};
		position: absolute;
		left: 0;
		// @ts-ignore
		top: ${({headerItemHeight:e})=>e};
		width: 100%;
	}
`;let h=[{title:"głowna",path:"/"},{title:"osiągnięcia",path:"/osiagniecia"},{title:"instruktor",path:"/instruktor"},{title:"zawody",path:"/zawody"}];t.default=({mobileMenuOpen:e})=>{const{headerItemHeight:t}=Object(o.useContext)(s.a);return(i.a.createElement(d,{headerItemHeight:t,mobileMenuOpen:e},h.map(({title:e,path:t},n)=>i.a.createElement(p,{title:e,path:t,key:n}))))}}}]);