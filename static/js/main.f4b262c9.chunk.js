(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{157:function(e,t,a){e.exports={Button:"ToggleButton_Button__27Raf"}},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(159),n=a.n(o);function r(e){return new Promise((function(t){n.a.parse(e,{dynamicTyping:!0,download:!0,complete:t,header:!0,keepEmptyRows:!1,skipEmptyLines:!0,transformHeader:function(e){switch(e){case"region":return"regiao";case"estado":return"sigla";case"date":return"data";case"cases_inc":return"casosNovos";case"cases":return"casosAcumulados";case"deaths_inc":return"obitosNovos";case"deaths":return"obitosAcumulados";default:return e}}})}))}},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(40),n=a.n(o),r=a(62);function c(){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(n.a.mark((function e(){var t,a,o,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeral",{credentials:"omit",headers:{accept:"application/json, text/plain, */*","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site","x-parse-application-id":"unAFkcaNDeXajurGB7LChj8SgQYS2ptm"},referrer:"https://covid.saude.gov.br/",referrerPolicy:"no-referrer-when-downgrade",body:null,method:"GET",mode:"cors"});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",{url:null===c||void 0===c||null===(t=c.results[0])||void 0===t||null===(a=t.arquivo)||void 0===a?void 0:a.url,dataAtualizacao:null===c||void 0===c||null===(o=c.results[0])||void 0===o?void 0:o.dt_atualizacao});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},161:function(e,t,a){"use strict";var o=a(162),n=a(163),r=a(165),c=a(167),s=a(1),l=a.n(s),i=a(13),u=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1,error:null},n}return Object(n.a)(a,[{key:"componentDidCatch",value:function(e,t){var a=this;i.b((function(o){o.setExtras(t);var n=i.a(e);a.setState({eventId:n})}))}},{key:"render",value:function(){if(this.state.hasError){var e=this.state.error,t=e.toString?e.toString():"Erro desconhecido.";return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Ops..."),l.a.createElement("p",null,"Provavelmente houve alguma falha ao ler o CSV fornecido. Acesse"," ",l.a.createElement("a",{href:"https://covid.saude.gov.br"},"https://covid.saude.gov.br")," ","at\xe9 o problema ser corrigido"),l.a.createElement("p",null,"ID: ",this.state.eventId),l.a.createElement("p",null,t))}return this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),a}(l.a.Component);t.a=u},166:function(e,t,a){"use strict";var o=a(69),n=a(65),r=a(1),c=a.n(r),s=a(11);function l(e){var t=e.scale,a=e.data,o=e.config,n=e.reference;return c.a.createElement(s.g,{width:"100%",minHeight:350},c.a.createElement(s.e,{data:a,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(s.c,{strokeDasharray:"3 3"}),c.a.createElement(s.h,null),c.a.createElement(s.i,{dataKey:"data"}),"}",c.a.createElement(s.j,{scale:t,allowDataOverflow:!0}),c.a.createElement(s.f,{x:a[n].data,stroke:"black"}),o.map((function(e){return c.a.createElement(s.d,Object.assign({animationDuration:500,key:e.dataKey,type:"monotone",strokeWidth:2},e))}))))}var i=a(14),u=[0,"dataMax"];function d(e){var t=e.scale,a=e.data,o=e.config,n=e.reference;return"log"===t&&(t=Object(i.scaleLog)().base(10),u=[1,"dataMax"]),c.a.createElement(s.g,{width:"100%",minHeight:350},c.a.createElement(s.b,{data:a,margin:{top:5,right:30,left:20,bottom:5}},c.a.createElement(s.c,{strokeDasharray:"3 3"}),c.a.createElement(s.h,null),c.a.createElement(s.i,{dataKey:"data"}),"}",c.a.createElement(s.j,{scale:t,domain:u,allowDataOverflow:!0}),c.a.createElement(s.f,{x:a[n].data,stroke:"black"}),o.map((function(e){return c.a.createElement(s.a,Object.assign({animationDuration:500,key:e.dataKey,type:"monotone",strokeWidth:2},e))}))))}var m=a(157),p=a.n(m);function f(e){var t=e.active,a=Object(n.a)(e,["active"]);return c.a.createElement("button",Object.assign({className:p.a.Button,style:{backgroundColor:t?"black":"white",color:t?"white":"black"}},a))}var v=a(98),E=a(67),b=a.n(E);function g(e){var t=e.legend,a=e.amount,o=e.textColor,n=e.bgColor,r=e.color,s=void 0===r?"#cccccc":r;return n=n||Object(v.a)(s,120).toString(),o=o||Object(v.a)(s,-120).toString(),c.a.createElement("div",{className:b.a.Container,style:{backgroundColor:n,border:"2px solid ".concat(s),color:o}},c.a.createElement("legend",{className:b.a.Legend},t),c.a.createElement("div",{className:b.a.Content},a))}var h=a(32),_=a.n(h),O=[{dataKey:"casosNovos",name:"Casos novos",stroke:"#99d066"},{dataKey:"obitosNovos",name:"\xd3bitos novos",stroke:"#ff6659"}],S=[{dataKey:"casosAcumulados",name:"Casos acumulados",stroke:"#99d066",fill:"#99d066"},{dataKey:"obitosAcumulados",name:"\xd3bitos acumulados",stroke:"#ff6659",fill:"#ff6659"}];t.a=function(e){var t=e.data,a=e.dataAtualizacao,r=(t.BRASIL,Object(n.a)(t,["BRASIL"])),s=c.a.useState("linear"),i=Object(o.a)(s,2),u=i[0],m=i[1],p=c.a.useState("BRASIL"),v=Object(o.a)(p,2),E=v[0],b=v[1],h=t[E].slice(26),k=c.a.useState(h.length-1),A=Object(o.a)(k,2),C=A[0],y=A[1];return c.a.createElement("div",{className:_.a.Container},c.a.createElement("div",{className:_.a.Alert},c.a.createElement("h3",null,"ATEN\xc7\xc3O"),c.a.createElement("p",null,"O Minist\xe9rio da Sa\xfade n\xe3o disponibilizou o relat\xf3rio completo hoje (16/04/2020) :-/ O relat\xf3rio ficar\xe1 desatualizado. Esperamos que at\xe9 amanh\xe3 a situa\xe7\xe3o se estabilize.")),c.a.createElement("div",{className:_.a.ButtonGroup},c.a.createElement(f,{onClick:function(){return b("BRASIL")},active:"BRASIL"===E},"BRASIL"),Object.keys(r).sort().map((function(e){return c.a.createElement(f,{key:e,onClick:function(){return b(e)},active:E===e},e)}))),c.a.createElement("div",{className:_.a.BoxGroupTitle},h[C].data),c.a.createElement("div",{className:_.a.BoxGroup},c.a.createElement("button",{disabled:0===C,onClick:function(){return y(C-1)}},"<"),c.a.createElement(g,{legend:S[0].name,color:S[0].stroke,amount:h[C].casosAcumulados.toLocaleString("pt-BR")}),c.a.createElement(g,{legend:S[1].name,color:S[1].stroke,amount:h[C].obitosAcumulados.toLocaleString("pt-BR")}),c.a.createElement(g,{legend:O[0].name,color:O[0].stroke,amount:h[C].casosNovos.toLocaleString("pt-BR"),bgColor:"#ffffff"}),c.a.createElement(g,{legend:O[1].name,color:O[1].stroke,amount:h[C].obitosNovos.toLocaleString("pt-BR"),bgColor:"#ffffff"}),c.a.createElement("button",{disabled:C===h.length-1,onClick:function(){return y(C+1)}},">")),c.a.createElement("h3",null,"Acumulado"),c.a.createElement(d,{data:h,scale:u,config:S,reference:C}),c.a.createElement("div",{className:_.a.ButtonGroup},c.a.createElement(f,{onClick:function(){return m("linear")},active:"linear"===u},"linear"),c.a.createElement(f,{onClick:function(){return m("log")},active:"log"===u},"log")),c.a.createElement("h3",null,"Novos"),c.a.createElement(l,{data:h,scale:"linear",config:O,reference:C}),c.a.createElement("p",{style:{textAlign:"center"}},"Fonte:"," ",c.a.createElement("a",{href:"https://covid.saude.gov.br/",target:"_blank",rel:"noopener noreferrer"},"https://covid.saude.gov.br/"),c.a.createElement("br",null),"\xdaltima atualiza\xe7\xe3o: ",a),c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("a",{href:"https://github.com/calimaborges/covid.git",target:"_blank",rel:"noopener noreferrer"},"GitHub")))}},195:function(e,t,a){e.exports=a(196)},196:function(e,t,a){"use strict";a.r(t),function(e){var t,o,n,r,c=a(40),s=a.n(c),l=a(62),i=(a(198),a(199),a(200),a(1)),u=a.n(i),d=a(61),m=a.n(d),p=a(95),f=a.n(p),v=a(386),E=a(166),b=a(158),g=a(160),h=a(161);"production"===(null===(t=e)||void 0===t||null===(o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}))||void 0===o?void 0:o.NODE_ENV)?(v.a({dsn:"https://35cad82a71fd411490b2c9891acb863a@o43943.ingest.sentry.io/5196657"}),console.log("Sentry ativado.")):console.log("Sentry desativado.","NODE_ENV: ".concat(null===(n=e)||void 0===n||null===(r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}))||void 0===r?void 0:r.NODE_ENV));function _(){return(_=Object(l.a)(s.a.mark((function e(){var t,a,o,n,r,c,l,i,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("root")).innerHTML="<p>Obtendo endere\xe7o do CSV...</p>",e.next=4,Object(g.a)();case 4:return a=e.sent,o=a.url,n=a.dataAtualizacao,t.innerHTML="<p>Obtendo CSV de ".concat(o,"...</p>"),e.next=10,Object(b.a)(o);case 10:for(d in r=e.sent,c=f()(r.data,"sigla"),l=f()(r.data,"data"),i=function(e){l[e]=l[e].reduce((function(t,a){return{sigla:"BRASIL",regiao:"BRASIL",data:e,casosNovos:(t.casosNovos||0)+a.casosNovos,casosAcumulados:(t.casosAcumulados||0)+a.casosAcumulados,obitosNovos:(t.obitosNovos||0)+a.obitosNovos,obitosAcumulados:(t.obitosAcumulados||0)+a.obitosAcumulados}}))},l)i(d);c.BRASIL=Object.values(l),m.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(h.a,null,u.a.createElement(E.a,{data:c,dataAtualizacao:n}))),t);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){_.apply(this,arguments)}()}.call(this,a(70))},200:function(e,t,a){},32:function(e,t,a){e.exports={Container:"App_Container__10KOh",ButtonGroup:"App_ButtonGroup__JyEnA",BoxGroup:"App_BoxGroup__tpGwB",BoxGroupTitle:"App_BoxGroupTitle__2tUtS",Alert:"App_Alert__3Zd3X"}},67:function(e,t,a){e.exports={Container:"CounterBox_Container__a_uh2",Legend:"CounterBox_Legend__1n7vI",Content:"CounterBox_Content__XDU3C"}}},[[195,1,2]]]);
//# sourceMappingURL=main.f4b262c9.chunk.js.map