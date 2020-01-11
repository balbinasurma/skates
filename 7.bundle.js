(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{52:function(e,t,n){"use strict";n.r(t);var a=n(46),i=n(21),o=n(0),l=n.n(o),r=n(10),c=n(19),b=n(20);const s=r.a.a`
	width: 80px;
	height: ${({headerItemHeight:e})=>e};
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;var h=({icon:e,link:t,label:n})=>{const{headerItemHeight:a}=Object(o.useContext)(c.a);return l.a.createElement(s,{headerItemHeight:a,href:t,target:"_blank",rel:"noopener","aria-label":n},l.a.createElement(b.a,{icon:e,color:"white",size:"3x"}))};const m=r.a.section`
	display: flex;
	min-height: ${({headerItemHeight:e})=>e};
`;t.default=()=>{const{headerItemHeight:e}=Object(o.useContext)(c.a);let t=[{label:"email",icon:i.b,link:"mailto:balbina.surma@gmail.com?subject=Kontakt ze strony internetowej"},{label:"LinkedIn",icon:a.b,link:"https://pl.linkedin.com/in/balbina-surma-5a78a8171"},{label:"Facebook",icon:a.a,link:"http://facebook.com/balbina.surma.1"}];return l.a.createElement(m,{headerItemHeight:e},t.map(({icon:e,link:t,label:n},a)=>l.a.createElement(h,{label:n,icon:e,link:t,key:a})))}}}]);