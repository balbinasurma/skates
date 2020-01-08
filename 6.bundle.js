(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{52:function(e,t,a){"use strict";a.r(t);var n=a(46),i=a(20),l=a(0),o=a.n(l),r=a(10),c=a(18),b=a(19);const s=r.a.a`
	width: 80px;
	height: ${({headerItemHeight:e})=>e};
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;var h=({icon:e,link:t,label:a})=>{const{headerItemHeight:n}=Object(l.useContext)(c.a);return o.a.createElement(s,{headerItemHeight:n,href:t,target:"_blank",rel:"noopener","aria-label":a},o.a.createElement(b.a,{icon:e,color:"white",size:"3x"}))};const m=r.a.section`
	display: flex;
	min-height: ${({headerItemHeight:e})=>e};
`;t.default=()=>{const{headerItemHeight:e}=Object(l.useContext)(c.a);let t=[{label:"email",icon:i.b,link:"mailto:balbina.surma@gmail.gmail?subject=Kontakt ze strony internetowej"},{label:"LinkedIn",icon:n.b,link:"https://pl.linkedin.com/in/balbina-surma-5a78a8171"},{label:"Facebook",icon:n.a,link:"http://facebook.com/balbina.surma.1"}];return o.a.createElement(m,{headerItemHeight:e},t.map(({icon:e,link:t,label:a},n)=>o.a.createElement(h,{label:a,icon:e,link:t,key:n})))}}}]);