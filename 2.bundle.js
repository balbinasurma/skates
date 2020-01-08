(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{59:function(n,i,t){"use strict";t.r(i);var e=t(0),a=t.n(e),r=t(10);const o=r.b`
from,
20%,
53%,
80%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 0, 0);
}

40%,
43% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -30px, 0);
}

70% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -15px, 0);
}

90% {
  transform: translate3d(0, -4px, 0);
}`,c=r.a.section`
	border: 1px solid red;
	position: absolute;
	width: 750px;
	height: 750px;
	background: white;
	z-index: 10;

	& > svg {
		width: 100%;
		height: 100%;

		& > circle {
			stroke: red;
			/* fill: red; */
			/* animation: ${o} 2s linear infinite; */
		}
	}
`;i.default=()=>a.a.createElement(c,null,a.a.createElement("svg",null,a.a.createElement("circle",{cx:"350",cy:"350",r:"300"})))}}]);