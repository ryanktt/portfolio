(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,c,s){},12:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),b=s(4),i=s.n(b),r=(s(10),s(5)),n=s.n(r),A=s(0),j=function(e){var c=e.children,s=e.path,t=e.small,a=e.dark,b=e.type,i="button";return t&&(i="".concat(i," small")),a&&(i="".concat(i," dark")),b||(b="button"),Object(A.jsx)("button",{className:i,type:b,children:Object(A.jsx)("a",{href:s,children:c})})},l=function(){return Object(A.jsxs)("header",{children:[Object(A.jsxs)("div",{className:"presentation",children:[Object(A.jsxs)("h1",{children:["Ol\xe1, me chamo ",Object(A.jsx)("span",{children:"Ryan Kayro"})]}),Object(A.jsx)("h2",{children:"Um Desenvolver Full Stack"})]}),Object(A.jsxs)("div",{className:"contact-me",children:[Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://github.com/ryanktt",target:"_blank",children:Object(A.jsx)("i",{className:"fab fa-github-square"})})}),Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://www.linkedin.com/in/ryan-kayro-6338ab209/",target:"_blank",children:Object(A.jsx)("i",{className:"fab fa-linkedin"})})})]}),Object(A.jsx)("div",{className:"header-btn",children:Object(A.jsx)(j,{path:"#projects",children:"Veja Meu Trabalho"})})]})},q=s(2),o=function(e){var c=e.clicked;return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"hamburguer",onClick:c,children:[Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{})]})})},d=function(e){var c="";return e.active&&(c="active"),Object(A.jsx)("div",{className:"sidedrawer ".concat(c),children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Home"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#skills",children:"Habilidades"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#projects",children:"Projetos"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#contact",children:"Contatar"})})]})})},G=function(){return Object(A.jsxs)("ul",{className:"toolbar",children:[Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#",children:"Home"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#skills",children:"Habilidades"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#projects",children:"Projetos"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"#contact",children:"Contatar"})})]})},H=function(){var e=Object(t.useState)(!1),c=Object(q.a)(e,2),s=c[0],a=c[1],b=window.pageYOffset;return window.onscroll=function(){var e=window.pageYOffset;b>e?document.querySelector(".nav-wrapper").style.top="0":(document.querySelector(".nav-wrapper").style.top="-70px",document.querySelector(".sidedrawer").classList.remove("active")),b=e},Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("div",{className:"nav-wrapper",children:Object(A.jsxs)("nav",{children:[Object(A.jsx)("img",{className:"logo",src:"data:image/png;base64,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",alt:""}),Object(A.jsx)(G,{}),Object(A.jsx)(o,{clicked:function(){a(!s)}}),Object(A.jsx)(d,{active:s})]})})})},m=s.p+"static/media/html.11531028.svg",O=s.p+"static/media/javascript.43e744a2.svg",h=s.p+"static/media/nodejs.10354602.svg",x=s.p+"static/media/css.dbd31fe1.svg",g=s.p+"static/media/expressjs.ea97b712.svg",v=s.p+"static/media/git.c0ad6253.svg",f=s.p+"static/media/github.b40b1c03.svg",u=s.p+"static/media/npm.8409395d.svg",p=s.p+"static/media/react.4ee8d000.svg",N=s.p+"static/media/redux.04851e4f.svg",w=s.p+"static/media/sass.58b7b983.svg",V=s.p+"static/media/mongodb.e4025ae2.svg",R=s.p+"static/media/mysql.4c509260.svg",T=function(){return Object(t.useEffect)((function(){var e=document.querySelector(".icons");new IntersectionObserver((function(c){c[0].intersectionRatio>0&&e.classList.add("animate")})).observe(e)}),[]),Object(A.jsxs)("section",{id:"skills",className:"skills",children:[Object(A.jsxs)("div",{className:"skills-title",children:[Object(A.jsx)("h2",{children:"Habilidades"}),Object(A.jsx)("p",{children:"T\xe9cnologias que Trabalhei com."})]}),Object(A.jsxs)("div",{className:"icons",children:[Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:m}),Object(A.jsx)("p",{children:"HTML"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:x}),Object(A.jsx)("p",{children:"CSS"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:O}),Object(A.jsx)("p",{children:"JavaScript"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:h}),Object(A.jsx)("p",{children:"NodeJs"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:g}),Object(A.jsx)("p",{children:"ExpressJs"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:"data:image/png;base64,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"}),Object(A.jsx)("p",{children:"Api REST"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:u}),Object(A.jsx)("p",{children:"NPM"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:w}),Object(A.jsx)("p",{children:"Sass"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:p}),Object(A.jsx)("p",{children:"ReactJs"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:N}),Object(A.jsx)("p",{children:"Redux"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:R}),Object(A.jsx)("p",{children:"MySQL"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:V}),Object(A.jsx)("p",{children:"MongoDB"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:v}),Object(A.jsx)("p",{children:"Git"})]}),Object(A.jsxs)("div",{className:"icon",children:[Object(A.jsx)("img",{alt:"",src:f}),Object(A.jsx)("p",{children:"GitHub"})]})]})]})},K=function(e){return Object(A.jsx)("div",{className:"tag",children:Object(A.jsx)("p",{className:"text",children:e.children})})},C=s.p+"static/media/forum.c491bb0f.jpg",D=function(e){var c=Object(t.useState)([]),s=Object(q.a)(c,2),a=s[0],b=s[1],i=e.tags,r=e.text,n=e.title,l=e.imgPath;e.site,e.code;return Object(t.useEffect)((function(){b(i.map((function(e){return Object(A.jsx)("div",{children:Object(A.jsx)(K,{children:e})},e)})))}),[]),Object(A.jsxs)("div",{className:"project",children:[Object(A.jsx)("img",{src:l,alt:""}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("p",{className:"title",children:n}),Object(A.jsx)("div",{className:"tags",children:a}),Object(A.jsx)("p",{className:"content-text",children:r})]}),Object(A.jsxs)("div",{className:"buttons",children:[Object(A.jsx)("div",{children:Object(A.jsxs)(j,{small:!0,dark:!0,children:[Object(A.jsx)("i",{className:"fas fa-eye"})," Site"]})}),Object(A.jsx)("div",{children:Object(A.jsxs)(j,{small:!0,dark:!0,children:[Object(A.jsx)("i",{className:"fas fa-code"})," C\xf3digo"]})})]})]})},Q=s.p+"static/media/blog.4a3edbde.jpg",U=s.p+"static/media/portfolio.f0ac45e2.jpg",F=function(){return Object(t.useEffect)((function(){document.querySelectorAll(".project-box").forEach((function(c){var s=new IntersectionObserver((function(t){e(t,s,c)}),{threshold:.3});s.observe(c)}));var e=function(e,c,s){e.forEach((function(e,c){e.isIntersecting&&e.target.classList.add("animate")}))}}),[]),Object(A.jsx)("section",{id:"projects",className:"projects-wrapper",children:Object(A.jsxs)("div",{className:"projects",children:[Object(A.jsx)("h2",{children:"Projetos"}),Object(A.jsxs)("div",{className:"project-list",children:[Object(A.jsx)("div",{className:"project-box ",children:Object(A.jsx)(D,{text:"Um f\xf3rum SPA simples, por\xe9m com todas as funcionalidades de um f\xf3rum normal. Desenvolvido com intuito de fixar e aprimorar meus conhecimentos em React e back-end. \r Possui autentica\xe7\xe3o, valida\xe7\xe3o, sistema de modera\xe7\xe3o, tudo que algu\xe9m esperaria de um f\xf3rum e o fato interessante de que n\xe3o \xe9 preciso recarregar a p\xe1gina, o que garante mais velocidade e menos uso de dados.",title:"F\xf3rumPlayers",tags:["HTML","CSS","JavaScript","MongoDB","NodeJs","NPM","ExpressJs","React","Redux"],imgPath:C})}),Object(A.jsx)("div",{className:"project-box ",children:Object(A.jsx)(D,{text:"Blog completo pensado para solidificar conhecimentos previamente adquiridos em nodeJs e banco de dados MySQL. Possui sistemar de publicar, editar e apagar posts, tamb\xe9m como login para administradores, e sistema de hierarquia, onde administradores n\xe3o podem alterar posts que n\xe3o tenham publicado, sendo isso poss\xedvel para o dono.",title:"TickTech Blog",tags:["HTML","CSS","JavaScript","MySQL","NodeJs","NPM","ExpressJs"],imgPath:Q})}),Object(A.jsx)("div",{className:"project-box ",children:Object(A.jsx)(D,{text:"Portf\xf3lio planejado com o foco no design para demonstrar minhas habilidades e projetos.",title:"Portf\xf3lio",tags:["HTML","CSS","JavaScript","React","NPM","Sass"],imgPath:U})})]})]})})},S=function(e){return Object(t.useEffect)((function(){var e=document.querySelector(".contact");new IntersectionObserver((function(c){c[0].intersectionRatio>0&&e.classList.add("animate")}),{threshold:.3}).observe(e)}),[]),Object(A.jsxs)("section",{id:"contact",className:"contact-wrapper",children:[Object(A.jsx)("h2",{children:"Contate-me"}),Object(A.jsx)("div",{className:"contact",children:Object(A.jsxs)("form",{children:[Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{children:"Nome"}),Object(A.jsx)("input",{id:"name",name:"name"})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{children:"Email"}),Object(A.jsx)("input",{id:"email",name:"email"})]}),Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{children:"Mensagem"}),Object(A.jsx)("textarea",{cols:"30",rows:"10",id:"message",name:"message"})]}),Object(A.jsx)("div",{className:"btn",children:Object(A.jsx)(j,{type:"submit",children:"Contatar"})})]})})]})},W=function(){return Object(A.jsxs)("section",{className:"footer",children:[Object(A.jsxs)("div",{className:"contact-footer",children:[Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://github.com/ryanktt",target:"_blank",children:Object(A.jsx)("i",{className:"fab fa-github-square"})})}),Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://www.linkedin.com/in/ryan-kayro-6338ab209/",target:"_blank",children:Object(A.jsx)("i",{className:"fab fa-linkedin"})})})]}),Object(A.jsx)("p",{children:"\xa9 2021 ryankayro.com"})]})};var k=function(){return Object(A.jsxs)("div",{className:n.a.App,children:[Object(A.jsx)(H,{}),Object(A.jsx)(l,{}),Object(A.jsx)(T,{}),Object(A.jsx)(F,{}),Object(A.jsx)(S,{}),Object(A.jsx)(W,{})]})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,b=c.getLCP,i=c.getTTFB;s(e),t(e),a(e),b(e),i(e)}))};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(k,{})}),document.getElementById("root")),X()},5:function(e,c,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.19440169.chunk.js.map