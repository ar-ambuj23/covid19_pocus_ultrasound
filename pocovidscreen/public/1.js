(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{15:function(e,t){e.exports="/images/covid19.png?2ff677c14aa72ba305e314f55db8db59"},19:function(e,t){e.exports="/images/team-member.png?65db6e252147a8fffa15cc1d791d2953"},20:function(e,t){e.exports="/images/chuv.svg?45ba5e96a3da22fbb8547d75d01dc073"},21:function(e,t){e.exports="/images/oms.svg?03f4927ffb977e2a321400660dadc29c"},22:function(e,t){e.exports="/images/hug.svg?e82ceefe1cfab1e83e381bf9d5178b8b"},23:function(e,t){e.exports="/images/google.svg?0083cd852e02ec5888dd9c27783ebb18"},24:function(e,t){e.exports="/images/epfl.svg?0e73df0cfc82305c798444f45c6f20d5"},35:function(e,t,a){var n=a(36);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(53)(n,l);n.locals&&(e.exports=n.locals)},36:function(e,t,a){var n=a(37);(e.exports=a(52)(!1)).push([e.i,".start {\n  margin-bottom: -130px;\n}\n\n.teaser-wrapper {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 70vh;\n  min-height: 515px;\n  border-radius: var(--border-radius-base);\n}\n\n.teaser {\n  background: url("+n(a(38))+') no-repeat center;\n  background-size: cover;\n  position: relative;\n  padding-top: 10rem;\n  padding-bottom: 18rem;\n  color: #fff;\n  height: 100%;\n  width: 100%;\n}\n.teaser::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.teaser-text {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.teaser-text h1 {\n  color: #fff;\n  font-size: 50px;\n}\n.teaser-text p {\n  margin: 0 auto;\n  padding: 0 2rem;\n  font-size: 1.25rem;\n  opacity: 0.69;\n}',""])},37:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},38:function(e,t){e.exports="/images/covid.png?5d270d63ecb161f14d1d2c3d5f44a0f1"},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,e.subtitle&&l.a.createElement("p",{className:"fadeIn mb-0"},e.subtitle),l.a.createElement("h2",{className:"fadeIn mb-4"},e.title)),l.a.createElement("p",{className:"fadeIn"},e.text))},c=function(e,t){var a=Object(n.useState)(null),l=a[0],r=a[1];return Object(n.useEffect)((function(){if(e.current&&"function"==typeof IntersectionObserver){var a=new IntersectionObserver((function(e){r(e[0])}),t);return a.observe(e.current),function(){r(null),a.disconnect()}}return function(){}}),[e.current,t.threshold,t.root,t.rootMargin]),l},i=a(6);function o(e){var t,a=c(e,{root:null,rootMargin:"0px",threshold:.45});e.current&&a&&a.intersectionRatio>=.45&&(t=e.current.querySelectorAll(".fadeIn"),i.b.to(t,.67,{opacity:1,y:-30,stagger:{amount:.6},ease:"power4.out"}))}var s=function(e){var t=Object(n.useRef)(null);return o(t),l.a.createElement("div",{className:"text row mb-5",ref:t},l.a.createElement("div",{className:"col-8 col-lg-6 col-xl-5 offset-lg-1"},l.a.createElement(r,{title:e.title,subtitle:e.subtitle,text:e.text})))},m=a(15),u=a.n(m),d=function(e){var t=Object(n.useRef)(null);return o(t),l.a.createElement("div",{className:"text-image row align-items-center mb-5",ref:t},l.a.createElement("div",{className:"col-8 col-md-6 col-lg-6 col-xl-5"},"textLeft"!==e.orientation?l.a.createElement("img",{src:u.a,alt:"Covid",className:"img-fluid mb-3 fadeIn"}):l.a.createElement(r,{title:e.title,subtitle:e.subtitle,text:e.text})),l.a.createElement("div",{className:"col-8 col-md-6 col-lg-5 col-xl-5 offset-lg-1"},"textLeft"===e.orientation?l.a.createElement("img",{src:u.a,alt:"Covid",className:"img-fluid fadeIn"}):l.a.createElement(r,{title:e.title,subtitle:e.subtitle,text:e.text})))};d.defaultProps={orientation:"textRight"};var f=d,p=function(e){return l.a.createElement("a",{className:"call-to-action py-5 px-4 d-block ".concat(e.className),href:e.action,title:e.linkTitle},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.text),l.a.createElement("p",{className:"call-to-action-link mt-5 mb-0"},e.linkTitle))},v=(a(35),a(1));function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,l=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(l)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){var t=Object(n.useRef)(null),a=E(Object(n.useState)("initial"),2);return function(e,t,a){var n=c(e,{root:null,rootMargin:"0px",threshold:.45});e.current&&n&&n.intersectionRatio>=.45&&(l=e.current.querySelectorAll(".presentation-video"),r=e.current.querySelectorAll(".animated-title"),i=e.current.querySelectorAll(".animated-video"),o=e.current.querySelectorAll(".animated-image"),"initial"===t&&((new v.d).fromTo(l,1.67,{opacity:0,y:800,ease:"power4.out"},{opacity:1,y:0,ease:"power4.out"}).fromTo(r,.87,{opacity:0,y:100,ease:"power4.out"},{opacity:1,y:0,ease:"power4.out"},.4).fromTo(i,1.7,{opacity:0,y:90,ease:"power4.out"},{opacity:1,y:50,ease:"power4.out"},.7).fromTo(o,1.78,{scale:2.2,ease:"power4.out"},{scale:1,ease:"power4.out"},.6),a("animated")));var l,r,i,o}(t,a[0],a[1]),l.a.createElement("div",{className:"video-wrapper",ref:t},l.a.createElement("div",{className:"presentation-video o0 pt-5 text text-center"},l.a.createElement("h2",{className:"animated-title o0"},e.title),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("div",{className:"presentation-video-thumbnail o0 animated-video"},l.a.createElement("img",{src:"https://img.youtube.com/vi/".concat(e.videoId,"/maxresdefault.jpg"),alt:"Video thumbnail",className:"img-fluid animated-image"}),l.a.createElement("a",{title:"Watch our presentation video",href:"https://www.youtube.com/watch?v=".concat(e.videoId),className:"presentation-video-play d-block",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",null,">")))))))},g=a(11),h=function(){return l.a.createElement("footer",{className:"app-footer pt-5"},l.a.createElement("div",{className:"container mb-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-lg-5"},l.a.createElement("h2",{className:"mb-1"},"CovidScreen"),l.a.createElement("p",null,"POCUS, X-Ray and CT's image analysis through AI to screen COVID-19 and pneumonia or healthy people.")),l.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-2"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h3",{className:"mb-4"},"Legal"),l.a.createElement("ul",{className:"app-footer-links"},l.a.createElement("li",null,l.a.createElement("a",{href:""},"Data privacy")),l.a.createElement("li",null,"Terms of service"))),l.a.createElement("div",{className:"col offset-1"},l.a.createElement("h3",{className:"mb-4"},"Handy links"),l.a.createElement("ul",{className:"app-footer-links"},l.a.createElement("li",null,"Credits"),l.a.createElement("li",null,"Disclaimer"))))))),l.a.createElement("div",{className:"copyright py-2"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-between"},l.a.createElement("div",{className:"col"},"© Copyright ",(new Date).getFullYear()),l.a.createElement("div",{className:"col text-right"},"A ",l.a.createElement("a",{href:"https://www.codevscovid19.org/",target:"_blank",title:"Visit the official event page"},"#CodeVsCovid19")," project")))))},N=a(19),y=a.n(N),x=function(e){return l.a.createElement("div",{className:"team-member text-center"},l.a.createElement("img",{draggable:"false",src:y.a,className:"img-fluid",alt:e.fullName}),l.a.createElement("h3",null,e.fullName),l.a.createElement("p",null,e.job))},w=function(){var e,t,a=Object(n.useRef)(null),r=Object(n.useRef)(null),c=0;Object(n.useEffect)((function(){v.e.to([r.children[c],r.children[c+1],r.children[c+2]],.7,{opacity:1,ease:v.b.easeOut})}),[c]);return l.a.createElement("div",{className:"slider",ref:a},l.a.createElement("div",{className:"slider-cards",ref:function(e){return r=e}},l.a.createElement("div",{className:"slide-card col-6 col-md-4 fadeIn"},l.a.createElement(x,{fullName:"John Doe",job:"Data Scientist"})),l.a.createElement("div",{className:"slide-card col-6 col-md-4 fadeIn"},l.a.createElement(x,{fullName:"John Doe",job:"Data Scientist"})),l.a.createElement("div",{className:"slide-card col-6 col-md-4 fadeIn"},l.a.createElement(x,{fullName:"John Doe",job:"Data Scientist"})),l.a.createElement("div",{className:"slide-card col-6 col-md-4 fadeIn"},l.a.createElement(x,{fullName:"John Doe",job:"Data Scientist"})),l.a.createElement("div",{className:"slide-card col-6 col-md-4 fadeIn"},l.a.createElement(x,{fullName:"John Doe",job:"Data Scientist"}))),l.a.createElement("div",{className:"controls"},l.a.createElement("button",{className:"left",onClick:function(){v.e.to(r.children,.7,{opacity:.3,ease:v.b.easeOut}),e=r.firstElementChild.clientWidth,c>0&&(c--,v.e.to(r,.7,{x:-c*e,ease:v.b.easeOut})),t=[r.children[c],r.children[c+1],r.children[c+2]],v.e.to(t,.7,{opacity:1,ease:v.b.easeOut})}},"left"),l.a.createElement("button",{className:"right",onClick:function(){v.e.to(r.children,.7,{opacity:.3,ease:v.b.easeOut}),e=r.firstElementChild.clientWidth,c<r.children.length-1&&(c++,v.e.to(r,.7,{x:-c*e,ease:v.b.easeOut})),t=[r.children[c],r.children[c+1],r.children[c+2]],v.e.to(t,.7,{opacity:1,ease:v.b.easeOut})}},"right")))},I=a(12),O=a(4);var S=function(e){var t,a=function(){const e=Object(n.useContext)(I.a);return Object(O.f)(e),e}();return l.a.createElement("div",{className:"statistic-number ".concat(e.className," pt-5")},l.a.createElement("h3",null,(t=e.number,new Intl.NumberFormat(a.locale,{style:"decimal"}).format(t))),l.a.createElement("p",null,e.text))},C=function(e){var t=Object(n.useRef)(null);return o(t),l.a.createElement("div",{className:"row pt-5",ref:t},l.a.createElement("div",{className:"col-8 col-md offset-lg-1 fadeIn"},l.a.createElement(S,{className:"primary",number:"3682",text:"COVID-19 cases detected by the AI."})),l.a.createElement("div",{className:"col-8 col-md fadeIn"},l.a.createElement(S,{className:"secondary",number:"12508",text:"images that trained the AI."})),l.a.createElement("div",{className:"col-8 col-md fadeIn"},l.a.createElement(S,{className:"primary",number:"50",text:"organisations collaborating with us."})))},j=a(20),A=a.n(j),k=a(21),q=a.n(k),D=a(22),T=a.n(D),R=a(23),V=a.n(R),L=a(24),J=a.n(L),P=function(){var e=Object(n.useRef)(null);return o(e),l.a.createElement("div",{className:"row align-items-center justify-content-between pt-2",ref:e},l.a.createElement("div",{className:"partner col fadeIn my-4"},l.a.createElement("img",{src:A.a,alt:""})),l.a.createElement("div",{className:"partner col fadeIn my-4"},l.a.createElement("img",{src:T.a,alt:""})),l.a.createElement("div",{className:"partner col fadeIn my-4"},l.a.createElement("img",{src:q.a,alt:""})),l.a.createElement("div",{className:"partner col fadeIn my-4"},l.a.createElement("img",{src:J.a,alt:""})),l.a.createElement("div",{className:"partner col fadeIn my-4"},l.a.createElement("img",{src:V.a,alt:""})))};t.default=function(){document.title="CovidScreen - Home";var e=i.b.timeline();return Object(n.useEffect)((function(){i.b.to(".page",0,{visibility:"visible"}),e.from(".teaser-wrapper",1.5,{y:500,opacity:0,ease:"power4.out"},.25).from(".teaser",1.95,{scale:2.5,autoRound:!1,ease:"power4.out"},.05).from(".teaser-text h1",.7,{y:20,opacity:0,ease:"power4.out"},1.2).from(".teaser-text p",.7,{y:20,opacity:0,ease:"power4.out"},1.45).from(".screen",.65,{y:200,opacity:0,ease:"power4.out"},1.7).from(".train",.65,{y:200,opacity:0,ease:"power4.out"},1.95)})),l.a.createElement("div",{className:"page page-home"},l.a.createElement(g.a,null,l.a.createElement("title",null,"CovidScreen - Home")),l.a.createElement("section",{className:"text-center container-fluid"},l.a.createElement("div",{className:"teaser-wrapper"},l.a.createElement("div",{className:"teaser"},l.a.createElement("div",{className:"teaser-text col-12 col-lg-8 col-xl-6"},l.a.createElement("header",null,l.a.createElement("h1",null,"CovidScreen"),l.a.createElement("p",null,"POCUS, X-Ray and CT's image analysis through AI to screen COVID-19 and pneumonia or healthy people")))))),l.a.createElement("section",{className:"start container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"screen col-10 offset-1 col-sm-12 mb-5 mb-md-0 offset-sm-0 col-md-6 col-lg-5 offset-lg-1"},l.a.createElement(p,{action:"/screen",title:"Screen",text:"Use our AI to detect COVID-19, pneumonia or healthy patient from POCUS, X-Ray or CT's images.",linkTitle:"Start screening",className:"primary"})),l.a.createElement("div",{className:"train col-10 offset-1 col-sm-12 offset-sm-0 col-md-6 col-lg-5"},l.a.createElement(p,{action:"/train",title:"Train the AI",text:"Send us your POCUS, X-Ray and CT's images to train our AI about COVID-19, pneumonia or healthy patient.",linkTitle:"Start training",className:"secondary"})))),l.a.createElement("section",{className:"container spacer"},l.a.createElement(s,{title:"Our partners",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam, voluptatem? Assumenda at beatae culpa doloremque, id ipsam nesciunt nulla, porro qui quibusdam similique, ut? Incidunt magnam nobis porro veritatis?"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 offset-lg-1"},l.a.createElement(P,null)))),l.a.createElement("section",{className:"container spacer"},l.a.createElement(s,{title:"Statistics",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam, voluptatem? Assumenda at beatae culpa doloremque, id ipsam nesciunt nulla, porro qui quibusdam similique, ut? Incidunt magnam nobis porro veritatis?"}),l.a.createElement(C,null)),l.a.createElement("section",{className:"container spacer pb-3"},l.a.createElement(b,{title:"Presentation video",videoId:"cVFzblT5VPE"})),l.a.createElement("section",{className:"container spacer pt-4"},l.a.createElement(s,{title:"The team",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam, voluptatem? Assumenda at beatae culpa doloremque, id ipsam nesciunt nulla, porro qui quibusdam similique, ut? Incidunt magnam nobis porro veritatis?"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 offset-lg-1"},l.a.createElement(w,null)))),l.a.createElement("section",{className:"container spacer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 offset-lg-1"},l.a.createElement(f,{orientation:"textLeft",title:"Your title",subtitle:"Subtitle",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam, voluptatem? Assumenda at beatae culpa doloremque."})))),l.a.createElement("section",{className:"container spacer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 offset-lg-1"},l.a.createElement(f,{title:"Your title",subtitle:"Subtitle",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam, voluptatem? Assumenda at beatae culpa doloremque."})))),l.a.createElement(h,null))}}}]);
//# sourceMappingURL=1.js.map