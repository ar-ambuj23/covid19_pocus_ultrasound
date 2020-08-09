(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"47lQ":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("jnJt"),c=function(){return n.a.createElement("footer",{className:"app-footer pt-5"},n.a.createElement("div",{className:"container mb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-5 mb-5 mb-lg-0"},n.a.createElement("h2",{className:"mb-1"},l.a.appTitle),n.a.createElement("p",null,"POCUS image analysis through AI to screen COVID-19 and pneumonia or healthy people.")),n.a.createElement("div",{className:"col-lg-6 col-xl-5 offset-xl-2 offset-lg-1"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",{className:"mb-4"},"Legal"),n.a.createElement("ul",{className:"app-footer-links"},n.a.createElement("li",null,n.a.createElement("a",{href:"/data-privacy"},"Data privacy")),n.a.createElement("li",null,n.a.createElement("a",{href:"/terms-and-conditions"},"Terms and conditions")))),n.a.createElement("div",{className:"col offset-1"},n.a.createElement("h3",{className:"mb-4"},"Handy links"),n.a.createElement("ul",{className:"app-footer-links"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://arxiv.org/abs/2004.12084",title:"Read our scientific article",target:"_blank"},"Scientific article")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/jannisborn/covid19_pocus_ultrasound",target:"_blank",title:"Find out how we achieved this"},"GitHub repository")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://devpost.com/software/automatic-detection-of-covid-19-from-pocus-ultrasound-data",target:"_blank",title:"Read our DevPost"},"DevPost")))))))),n.a.createElement("div",{className:"copyright py-2"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col"},"© Copyright ",(new Date).getFullYear()),n.a.createElement("div",{className:"col text-right"},"A ",n.a.createElement("a",{href:"https://www.codevscovid19.org/",target:"_blank",title:"Visit the official event page"},"#CodeVsCovid19"),", ",n.a.createElement("a",{href:"https://euvsvirus.org/",target:"_blank",title:"Visit the official event page"},"#EUvsVirus"),"  project")))))};function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.a=function(e){var t=e.className,a=o(e,["className"]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("main",{className:"app-main"},n.a.createElement("div",{className:t},a.children)),n.a.createElement(c,null))}},KSs6:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("47lQ"),c=a("Ty5D");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.default=function(){var e=Object(c.h)(),t=o(Object(r.useState)([]),2),a=t[0],i=t[1],s=o(Object(r.useState)(!0),2),m=(s[0],s[1]);return Object(r.useEffect)((function(){var t=new FormData;e.state.files.map((function(a){t.append("image",a),t.append("label",e.state.label),fetch("/api/train",{method:"POST",body:t}).then((function(e){return e.json()})).then((function(e){m(!1);var t=URL.createObjectURL(a);i((function(r){return r.concat({image:a,data:e,preview:t})}))}))}))}),[e]),n.a.createElement(l.a,null,n.a.createElement("div",{className:"container spacer-small"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 offset-lg-2"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h2",null,"Thanks for training the AI"),n.a.createElement("p",{className:"mb-4"},"We really appreciate your donation. Your data will be verified by our medical doctors and, if approved, will be added to our database. If you would like to be recognized as donator or would to discuss further collaboration, please contact",n.a.createElement("a",{href:"mailto:info@pocovidscrenen.org"},"info@pocovidscreen.org"),".")))),n.a.createElement("aside",{className:"thumbs-container justify-content-center mb-4"},a.map((function(e){return n.a.createElement("div",{className:"thumb",key:e.image.name},n.a.createElement("div",{className:"thumb-inner"},n.a.createElement("img",{src:e.preview,alt:"Result for ".concat(e.image.path)})))}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-10 offset-lg-1"},n.a.createElement("a",{href:"/train",title:"Train the AI again",className:"button primary round w-100 text-uppercase mt-4 d-block text-center"},"Donate data again")))))}}}]);
//# sourceMappingURL=12.js.map