(this["webpackJsonpprojeto8-zaprecall"]=this["webpackJsonpprojeto8-zaprecall"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,c){},function(e,a,c){},function(e,a,c){},,function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){},function(e,a,c){"use strict";c.r(a);var t=c(1),s=c.n(t),n=c(8),o=c.n(n),r=(c(13),c(2)),i=c(3),d=(c(14),c(15),c(0)),l=function(e){var a=e.disabled,c=void 0!==a&&a,t=e.handleClick,s=e.mensagem;return Object(d.jsx)(d.Fragment,{children:c?Object(d.jsx)("button",{onClick:t,disabled:!0,children:s}):Object(d.jsx)("button",{onClick:t,children:s})})},u=(c(17),function(e){var a=e.selectedDeck,c=e.setSelectedDeck,t=e.decks,s=e.setMeta,n=Object.keys(t);return Object(d.jsxs)("select",{name:"Cars",defaultValue:a,onChange:function(e){c(e.target.value),s(0)},children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"Escolha seu deck"}),n.map((function(e){return Object(d.jsxs)("option",{value:e,children:[" ",e," "]},e)}))]})}),j=(c(18),function(e){var a=e.max,c=e.meta,t=e.setMeta;return Object(d.jsxs)("div",{className:"contador",children:[Object(d.jsx)("div",{className:"decrementar",onClick:function(){c>0&&t(c-1)},children:"-"}),Object(d.jsx)("div",{className:"valor",children:c}),Object(d.jsx)("div",{className:"incrementar",onClick:function(){c<a&&t(c+1)},children:"+"})]})}),m=function(e){var a=e.selectedDeck,c=e.setScreen,s=e.setSelectedDeck,n=e.decks,o=e.meta,m=e.setMeta,p=Object(t.useState)(!0),b=Object(r.a)(p,2),O=b[0],h=b[1];return Object(t.useEffect)((function(){a&&h(!1)}),[a]),Object(d.jsxs)("div",{className:"welcome-container",children:[Object(d.jsx)("img",{src:"./images/logo.png",alt:"logo"}),Object(d.jsx)("h1",{children:"ZapRecall"}),Object(d.jsx)(u,{decks:n,setSelectedDeck:s,selectedDeck:a,setMeta:m}),a?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{className:"deck-description",children:["Este deck tem ",n[a].length," cartas"]}),Object(d.jsx)("p",{className:"deck-description",children:"Defina uma meta:"}),Object(d.jsx)(j,{max:n[a].length,meta:o,setMeta:m})]}):Object(d.jsx)("p",{className:"deck-description",children:"Selecione um deck"}),Object(d.jsx)(l,Object(i.a)(Object(i.a)({},e),{},{disabled:O,handleClick:function(){return c("GameScreen")},mensagem:"Iniciar Recall!"}))]})},p=(c(19),c(6)),b=(c(20),function(e){var a=e.pergunta,c=e.resposta,s=e.numero,n=e.setConcluidos,o=e.concluidos,i=e.sequencia,l=e.setSequencia,u=e.cards,j=e.setFinalizado,m=e.setNaoLembrou,b=e.acertou,O=Object(t.useState)("escondido"),h=Object(r.a)(O,2),x=h[0],g=h[1],v=Object(t.useState)("naoRespondido"),f=Object(r.a)(v,2),k=f[0],N=f[1],S=Object(t.useState)(!1),q=Object(r.a)(S,2),C=q[0],R=q[1];switch(Object(t.useEffect)((function(){j(u.length===o)})),x){case"escondido":return Object(d.jsxs)("div",{className:"card-escondido ".concat(k),onClick:function(){"naoRespondido"===k&&g("pergunta")},children:[Object(d.jsxs)("p",{children:["Pergunta ",s+1]}),"naoRespondido"===k&&Object(d.jsx)("ion-icon",{name:"play-outline"}),"naoLembro"===k&&Object(d.jsx)("ion-icon",{name:"close-circle"}),"quaseNaoLembrei"===k&&Object(d.jsx)("ion-icon",{name:"help-circle"}),"zap"===k&&Object(d.jsx)("ion-icon",{name:"checkmark-circle"})]});case"pergunta":return Object(d.jsxs)("div",{className:"card ".concat(C?"virado":""),children:[Object(d.jsxs)("div",{className:"card-pergunta face",children:[Object(d.jsx)("p",{children:a}),Object(d.jsx)("img",{id:"setinha",src:"./images/setinha.svg",alt:"setinha",onClick:function(){return R(!0)}})]}),Object(d.jsxs)("div",{className:"card-resposta face",children:[Object(d.jsx)("p",{children:c}),Object(d.jsxs)("div",{className:"opcoes",children:[Object(d.jsx)("div",{className:"opcao red",onClick:function(){g("escondido"),N("naoLembro"),n(o+1),l([].concat(Object(p.a)(i),[Object(d.jsx)("div",{className:"naoLembro",children:Object(d.jsx)("ion-icon",{name:"close-circle"})},Math.random())])),m(!0)},children:Object(d.jsx)("p",{children:"N\xe3o lembrei"})}),Object(d.jsx)("div",{className:"opcao orange",onClick:function(){g("escondido"),N("quaseNaoLembrei"),n(o+1),l([].concat(Object(p.a)(i),[Object(d.jsx)("div",{className:"quaseNaoLembrei",children:Object(d.jsx)("ion-icon",{name:"help-circle"})},Math.random())])),b()},children:Object(d.jsx)("p",{children:"Quase n\xe3o lembrei"})}),Object(d.jsx)("div",{className:"opcao green",onClick:function(){g("escondido"),N("zap"),n(o+1),l([].concat(Object(p.a)(i),[Object(d.jsx)("div",{className:"zap",children:Object(d.jsx)("ion-icon",{name:"checkmark-circle"})},Math.random())])),b()},children:Object(d.jsx)("p",{children:"Zap!"})})]})]})]})}}),O=(c(21),function(e){var a=e.concluidos,c=e.cards,t=e.sequencia,s=e.finalizado,n=e.naoLembrou,o=e.setScreen,r=e.acertos,i=e.setAcertos,u=e.meta;return s?0===u?Object(d.jsxs)("div",{className:"footer-container",children:[n?Object(d.jsxs)("div",{className:"congrats",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"./images/sad.png",alt:"sad"})," ",Object(d.jsx)("p",{children:"PUTZ!"})]}),Object(d.jsx)("p",{children:"Ainda faltaram alguns...Mas n\xe3o desanime!"})]}):Object(d.jsxs)("div",{className:"congrats",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"./images/party.png",alt:"party"})," ",Object(d.jsx)("p",{children:"PARAB\xc9NS!"})]}),Object(d.jsx)("p",{children:"Voc\xea n\xe3o esqueceu de nenhum flashcard!"})]}),Object(d.jsx)("div",{className:"sequencia",children:t}),Object(d.jsx)(l,{handleClick:function(){i(0),o("Welcome")},mensagem:"REINICIAR RECALL"})]}):Object(d.jsxs)("div",{className:"footer-container",children:[r<u?Object(d.jsxs)("div",{className:"congrats",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"./images/sad.png",alt:"sad"})," ",Object(d.jsx)("p",{children:"PUTZ!"})]}),Object(d.jsxs)("p",{children:["Infelizmente n\xe3o atingiu a meta por"," ",u-r===1?"1 card":"".concat(u-r," cards"),"...Mas n\xe3o desanime!"]})]}):Object(d.jsxs)("div",{className:"congrats",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"./images/party.png",alt:"party"})," ",Object(d.jsx)("p",{children:"PARAB\xc9NS!"})]}),Object(d.jsx)("p",{children:"Voc\xea atingiu a sua meta de acertos!"})]}),Object(d.jsx)("div",{className:"sequencia",children:t}),Object(d.jsx)(l,{handleClick:function(){i(0),o("Welcome")},mensagem:"REINICIAR RECALL"})]}):Object(d.jsxs)("div",{className:"footer-container",children:[Object(d.jsxs)("p",{children:[a,"/",c.length," CONCLU\xcdDOS"]}),Object(d.jsx)("div",{className:"sequencia",children:t})]})}),h=(c(22),function(){return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("img",{src:"./images/logo-pequeno.png",alt:"logo-pequeno"}),Object(d.jsx)("h2",{children:"ZapRecall"})]})}),x=(c(23),function(e){var a=e.decks,c=e.setScreen,s=e.selectedDeck,n=e.acertos,o=e.setAcertos,l=e.meta,u=Object(t.useState)(0),j=Object(r.a)(u,2),m=j[0],p=j[1],x=Object(t.useState)([]),g=Object(r.a)(x,2),v=g[0],f=g[1],k=Object(t.useState)(!1),N=Object(r.a)(k,2),S=N[0],q=N[1],C=Object(t.useState)(!1),R=Object(r.a)(C,2),L=R[0],M=R[1],z=a[s];function D(){o(n+1)}return z.sort((function(){return Math.random()-.5})),Object(d.jsxs)("div",{className:"GameScreen-container",children:[Object(d.jsx)(h,{}),z.map((function(e,a){return Object(t.createElement)(b,Object(i.a)(Object(i.a)({},e),{},{key:a,numero:a,cards:z,setConcluidos:p,concluidos:m,sequencia:v,setSequencia:f,setFinalizado:q,setNaoLembrou:M,acertou:D}))})),Object(d.jsx)(O,{cards:z,concluidos:m,sequencia:v,finalizado:S,naoLembrou:L,setScreen:c,acertos:n,setAcertos:o,meta:l})]})}),g=function(){var e={React:[{pergunta:"O que \xe9 JSX?",resposta:"Uma extens\xe3o de linguagem do JavaScript"},{pergunta:"O React \xe9 __",resposta:"uma biblioteca JavaScript para constru\xe7\xe3o de interfaces"},{pergunta:"Componentes devem iniciar com __ ",resposta:"letra mai\xfascula"},{pergunta:"Podemos colocar __ dentro do JSX",resposta:"express\xf5es"},{pergunta:"O ReactDOM nos ajuda __",resposta:"interagindo com a DOM para colocar componentes React na mesma"},{pergunta:"Usamos o npm para __",resposta:"gerenciar os pacotes necess\xe1rios e suas depend\xeancias"},{pergunta:"Usamos props para __ ",resposta:"passar diferentes informa\xe7\xf5es para componentes "},{pergunta:"Usamos estado (state) para __",resposta:"dizer para o React quais informa\xe7\xf5es quando atualizadas devem renderizar a tela novamente"}],HTML:[{pergunta:"indica o in\xedcio e o fim de um documento html",resposta:"<html></html>"},{pergunta:"indica o in\xedcio e o fim do t\xedtulo: o t\xedtulo \xe9 exibido na barra de t\xedtulo do navegador",resposta:"<title></title>"},{pergunta:"indica o in\xedcio e o fim de uma lista n\xe3o ordenada.",resposta:"<ul></ul>"},{pergunta:"indica que o item que segue a tag \xe9 um item da lista",resposta:"<li></li>"},{pergunta:"quebra uma linha de texto no ponto onde a tag aparece",resposta:"<br/>"},{pergunta:"cria uma marca \xe2ncora que \xe9 usada para criar hiperlinks",resposta:"<a></a>"},{pergunta:"pesquisa e exibe imagens em uma p\xe1gina da web",resposta:"<img>"},{pergunta:"define uma lista de op\xe7\xf5es de sele\xe7\xe3o em um formul\xe1rio",resposta:"<select></select>"},{pergunta:"insere linha horizontal",resposta:"<hr>"},{pergunta:"texto em negrito",resposta:"<b></b>"},{pergunta:"texto em it\xe1lico",resposta:"<i></i>"}],Linux:[{pergunta:"pwd",resposta:"Use o comando pwd para encontrar o caminho para o diret\xf3rio atual (da pasta) em que voc\xea est\xe1"},{pergunta:"ls",resposta:"Listar arquivos no diret\xf3rio"},{pergunta:"rm",resposta:"Remove os arquivos especificados"},{pergunta:"cp",resposta:"Copia arquivos especificados"},{pergunta:"cd",resposta:"altera o diret\xf3rio"},{pergunta:"cat",resposta:" Ele \xe9 usado para visualizar o conte\xfado de um arquivo na sa\xedda padr\xe3o (sdout)"},{pergunta:"mkdir",resposta:"Use o comando mkdir para criar um novo diret\xf3rio"},{pergunta:"rmdir",resposta:"Se voc\xea precisa apagar (deletar) um diret\xf3rio, use o comando rmdir."},{pergunta:"touch",resposta:"O comando touch permite criar novos arquivos em branco atrav\xe9s de uma linha de comando"},{pergunta:"sudo",resposta:"Correspondente a SuperUser Do, o comando sudo permite que que voc\xea execute tarefas que exigem permiss\xf5es root ou administrativas"}]},a=Object(t.useState)(0),c=Object(r.a)(a,2),s=c[0],n=c[1],o=Object(t.useState)(0),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(t.useState)(""),p=Object(r.a)(j,2),b=p[0],O=p[1],h=Object(t.useState)("Welcome"),g=Object(r.a)(h,2),v=g[0],f=g[1];return Object(d.jsxs)(d.Fragment,{children:["Welcome"===v&&Object(d.jsx)(m,{decks:e,setScreen:f,setSelectedDeck:O,selectedDeck:b,meta:l,setMeta:u}),"GameScreen"===v&&Object(d.jsx)(x,{decks:e,setScreen:f,selectedDeck:b,acertos:s,setAcertos:n,meta:l})]})};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.querySelector(".root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.6dc95db0.chunk.js.map