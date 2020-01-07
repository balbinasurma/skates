(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{50:function(e,t,n){"use strict";n.r(t);var a=n(45),i=n(20),l=n(0),o=n.n(l),r=n(10),c=n(18),s=n(19);const b=r.a.a`
	width: 80px;
	// @ts-ignore
	height: ${({headerItemHeight:e})=>e};
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;var h=({icon:e,link:t,label:n})=>{const{headerItemHeight:a}=Object(l.useContext)(c.a);return o.a.createElement(b,{headerItemHeight:a,href:t,target:"_blank",rel:"noopener","aria-label":n},o.a.createElement(s.a,{icon:e,color:"white",size:"3x"}))};const m=r.a.section`
	display: flex;
	// @ts-ignore
	min-height: ${({headerItemHeight:e})=>e};
`;t.default=()=>{const{headerItemHeight:e}=Object(l.useContext)(c.a);let t=[{label:"email",icon:i.b,link:"mailto:balbina.surma@gmail.gmail?subject=Kontakt ze strony internetowej"},{label:"LinkedIn",icon:a.b,link:"https://pl.linkedin.com/in/balbina-surma-5a78a8171"},{label:"Facebook",icon:a.a,link:"http://facebook.com/balbina.surma.1"}];return(o.a.createElement(m,{headerItemHeight:e},t.map(({icon:e,link:t,label:n},a)=>o.a.createElement(h,{label:n,icon:e,link:t,key:a}))))}}}]);