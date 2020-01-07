(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{57:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),c=a(10),i=a(23);const r=Object(t.lazy)(()=>a.e(5).then(a.bind(null,51))),s=Object(t.lazy)(()=>Promise.all([a.e(1),a.e(6)]).then(a.bind(null,52))),d=Object(t.lazy)(()=>a.e(4).then(a.bind(null,48))),o=c.a.header`
	height: auto;
	padding: 0 1vw;
	display: flex;
	flex-direction: ${Object(i.a)()?"row":"row-reverse"};
	background: none;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;

	& > span {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		padding: 0;
	}

	@media only screen and (max-width: 900px) {
		padding: 0;
	}
`;n.default=()=>{const[e,n]=Object(t.useState)(!1);return l.a.createElement(o,null,Object(i.a)()&&l.a.createElement(t.Fragment,null,l.a.createElement(t.Suspense,{fallback:l.a.createElement("p",null,"...")},l.a.createElement(r,{mobileMenuOpen:e})),l.a.createElement(t.Suspense,{fallback:l.a.createElement("p",null,"...")},l.a.createElement(d,{mobileMenuOpen:e,setMobileMenuOpen:n}))),l.a.createElement(t.Suspense,{fallback:l.a.createElement("p",null,"...")},l.a.createElement(s,null)))}}}]);