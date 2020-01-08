(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{47:function(e,n,t){"use strict";t.r(n);var o=t(20),a=t(19),i=t(0),r=t.n(i),c=t(10),d=t(18);const s=c.a.button`
	background: none;
	border: none;
	width: 80px;
	height: ${({headerItemHeight:e})=>e};
	cursor: pointer;
	display: none;

	@media only screen and (max-width: 900px) {
		display: block;
	}
`;n.default=({mobileMenuOpen:e,setMobileMenuOpen:n})=>{const{headerItemHeight:t}=Object(i.useContext)(d.a);return r.a.createElement(s,{headerItemHeight:t,"aria-label":"menu"},r.a.createElement(a.a,{onClick:()=>n(!e),icon:e?o.d:o.c,color:"white",size:"3x"}))}}}]);