(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{144:function(e,t,a){e.exports={Button:"ToggleButton_Button__27Raf"}},172:function(e,t,a){e.exports=a(361)},176:function(e,t,a){},34:function(e,t,a){e.exports={Container:"App_Container__10KOh",ButtonGroup:"App_ButtonGroup__JyEnA",BoxGroup:"App_BoxGroup__tpGwB",BoxGroupTitle:"App_BoxGroupTitle__2tUtS"}},361:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a.n(n),r=a(51),c=(a(174),a(175),a(176),a(1)),l=a.n(c),s=a(50),i=a.n(s),u=a(82),d=a.n(u),m=a(57),p=a(54),f=a(7);function g(e){var t=e.scale,a=e.data,n=e.config,o=e.reference;return l.a.createElement(f.g,{width:"100%",minHeight:350},l.a.createElement(f.e,{data:a,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(f.c,{strokeDasharray:"3 3"}),l.a.createElement(f.h,null),l.a.createElement(f.i,{dataKey:"data"}),"}",l.a.createElement(f.j,{scale:t,allowDataOverflow:!0}),l.a.createElement(f.f,{x:a[o].data,stroke:"black"}),n.map((function(e){return l.a.createElement(f.d,Object.assign({animationDuration:500,key:e.dataKey,type:"monotone",strokeWidth:2},e))}))))}var v=a(9),b=[0,"dataMax"];function E(e){var t=e.scale,a=e.data,n=e.config,o=e.reference;return"log"===t&&(t=Object(v.scaleLog)().base(10),b=[1,"dataMax"]),l.a.createElement(f.g,{width:"100%",minHeight:350},l.a.createElement(f.b,{data:a,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(f.c,{strokeDasharray:"3 3"}),l.a.createElement(f.h,null),l.a.createElement(f.i,{dataKey:"data"}),"}",l.a.createElement(f.j,{scale:t,domain:b,allowDataOverflow:!0}),l.a.createElement(f.f,{x:a[o].data,stroke:"black"}),n.map((function(e){return l.a.createElement(f.a,Object.assign({animationDuration:500,key:e.dataKey,type:"monotone",strokeWidth:2},e))}))))}var h=a(144),k=a.n(h);function B(e){var t=e.active,a=Object(p.a)(e,["active"]);return l.a.createElement("button",Object.assign({className:k.a.Button,style:{backgroundColor:t?"black":"white",color:t?"white":"black"}},a))}var y=a(85),x=a(56),A=a.n(x);function C(e){var t=e.legend,a=e.amount,n=e.textColor,o=e.bgColor,r=e.color,c=void 0===r?"#cccccc":r;return o=o||Object(y.a)(c,120).toString(),n=n||Object(y.a)(c,-120).toString(),l.a.createElement("div",{className:A.a.Container,style:{backgroundColor:o,border:"2px solid ".concat(c),color:n}},l.a.createElement("legend",{className:A.a.Legend},t),l.a.createElement("div",{className:A.a.Content},a))}var _=a(34),S=a.n(_),j=[{dataKey:"casosNovos",name:"Casos novos",stroke:"#99d066"},{dataKey:"obitosNovos",name:"\xd3bitos novos",stroke:"#ff6659"}],w=[{dataKey:"casosAcumulados",name:"Casos acumulados",stroke:"#99d066",fill:"#99d066"},{dataKey:"obitosAcumulados",name:"\xd3bitos acumulados",stroke:"#ff6659",fill:"#ff6659"}];var L=function(e){var t=e.data,a=e.dataAtualizacao,n=(t.BRASIL,Object(p.a)(t,["BRASIL"])),o=l.a.useState("linear"),r=Object(m.a)(o,2),c=r[0],s=r[1],i=l.a.useState("BRASIL"),u=Object(m.a)(i,2),d=u[0],f=u[1],v=t[d].slice(26),b=l.a.useState(v.length-1),h=Object(m.a)(b,2),k=h[0],y=h[1];return l.a.createElement("div",{className:S.a.Container},l.a.createElement("div",{className:S.a.ButtonGroup},l.a.createElement(B,{onClick:function(){return f("BRASIL")},active:"BRASIL"===d},"BRASIL"),Object.keys(n).sort().map((function(e){return l.a.createElement(B,{key:e,onClick:function(){return f(e)},active:d===e},e)}))),l.a.createElement("div",{className:S.a.BoxGroupTitle},v[k].data),l.a.createElement("div",{className:S.a.BoxGroup},l.a.createElement("button",{disabled:0===k,onClick:function(){return y(k-1)}},"<"),l.a.createElement(C,{legend:w[0].name,color:w[0].stroke,amount:v[k].casosAcumulados.toLocaleString("pt-BR")}),l.a.createElement(C,{legend:w[1].name,color:w[1].stroke,amount:v[k].obitosAcumulados.toLocaleString("pt-BR")}),l.a.createElement(C,{legend:j[0].name,color:j[0].stroke,amount:v[k].casosNovos.toLocaleString("pt-BR"),bgColor:"#ffffff"}),l.a.createElement(C,{legend:j[1].name,color:j[1].stroke,amount:v[k].obitosNovos.toLocaleString("pt-BR"),bgColor:"#ffffff"}),l.a.createElement("button",{disabled:k===v.length-1,onClick:function(){return y(k+1)}},">")),l.a.createElement("h3",null,"Acumulado"),l.a.createElement(E,{data:v,scale:c,config:w,reference:k}),l.a.createElement("div",{className:S.a.ButtonGroup},l.a.createElement(B,{onClick:function(){return s("linear")},active:"linear"===c},"linear"),l.a.createElement(B,{onClick:function(){return s("log")},active:"log"===c},"log")),l.a.createElement("h3",null,"Novos"),l.a.createElement(g,{data:v,scale:"linear",config:j,reference:k}),l.a.createElement("p",{style:{textAlign:"center"}},"Fonte:"," ",l.a.createElement("a",{href:"https://covid.saude.gov.br/",target:"_blank",rel:"noopener noreferrer"},"https://covid.saude.gov.br/"),l.a.createElement("br",null),"\xdaltima atualiza\xe7\xe3o: ",a),l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("a",{href:"https://github.com/calimaborges/covid.git",target:"_blank",rel:"noopener noreferrer"},"GitHub")))},N=a(145),O=a.n(N);function R(e){return new Promise((function(t){O.a.parse(e,{dynamicTyping:!0,download:!0,complete:t,header:!0,keepEmptyRows:!1,skipEmptyLines:!0,transformHeader:function(e){return/regi.o/.test(e)?"regiao":e}})}))}function G(){return I.apply(this,arguments)}function I(){return(I=Object(r.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral",{credentials:"omit",headers:{accept:"application/json, text/plain, */*","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","x-parse-application-id":"unAFkcaNDeXajurGB7LChj8SgQYS2ptm"},referrer:"https://covid.saude.gov.br/",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"GET",mode:"cors"});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",{url:null===c||void 0===c||null===(t=c.results[0])||void 0===t||null===(a=t.arquivo)||void 0===a?void 0:a.url,dataAtualizacao:null===c||void 0===c||null===(n=c.results[0])||void 0===n?void 0:n.dt_atualizacao});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(r.a)(o.a.mark((function e(){var t,a,n,r,c,s,u,m,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("root")).innerHTML="<p>Obtendo endere\xe7o do CSV...</p>",e.next=4,G();case 4:return a=e.sent,n=a.url,r=a.dataAtualizacao,t.innerHTML="<p>Obtendo CSV de ".concat(n,"...</p>"),e.next=10,R(n);case 10:for(p in c=e.sent,s=d()(c.data,"sigla"),u=d()(c.data,"data"),m=function(e){u[e]=u[e].reduce((function(t,a){return{sigla:"BRASIL",regiao:"BRASIL",data:e,casosNovos:(t.casosNovos||0)+a.casosNovos,casosAcumulados:(t.casosAcumulados||0)+a.casosAcumulados,obitosNovos:(t.obitosNovos||0)+a.obitosNovos,obitosAcumulados:(t.obitosAcumulados||0)+a.obitosAcumulados}}))},u)m(p);s.BRASIL=Object.values(u),i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,{data:s,dataAtualizacao:r})),t);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){K.apply(this,arguments)}()},56:function(e,t,a){e.exports={Container:"CounterBox_Container__a_uh2",Legend:"CounterBox_Legend__1n7vI",Content:"CounterBox_Content__XDU3C"}}},[[172,1,2]]]);
//# sourceMappingURL=main.022265b9.chunk.js.map