(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,function(e,t,r){e.exports={Center:"Card_Center__12U3Y",Card:"Card_Card__1CQFL",Grid:"Card_Grid__1bMtS"}},function(e,t,r){e.exports={App:"App_App__28R6o",Form:"App_Form__2zHfE",Items:"App_Items__2zxhp",Cards:"App_Cards__1zrLr"}},,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(8),o=r.n(i),c=(r(15),r(6),r(1)),s=r(9),l=r(4),u=r.n(l),h=function(e){for(var t,r,n,i,o=e.title,c=e.freeText,s=e.freeTextCentered,l=e.items,h=e.seed,d=e.width,f=e.height,m=e.fontSize,p=function(e){for(var t=0,r=1779033703^e.length;t<e.length;t++)r=(r=Math.imul(r^e.charCodeAt(t),3432918353))<<13|r>>>19;return function(){return r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),(r^=r>>>16)>>>0}}(String(h)),g=(t=p(),r=p(),n=p(),i=p(),function(){var e=(t>>>=0)+(r>>>=0)|0;return t=r^r>>>9,r=(n>>>=0)+(n<<3)|0,n=(n=n<<21|n>>>11)+(e=e+(i=1+(i>>>=0)|0)|0)|0,(e>>>0)/4294967296}),b=[],E=d*f;b.length<E;)l.forEach((function(e){return b.push(e)}));b.sort((function(e,t){return g()<.5?-1:1}));var C=g();if(c){var O=s?Math.floor(f/2)*d+Math.floor(d/2):Math.floor(C*E);b.splice(O,0,c)}return a.a.createElement("div",{className:u.a.Center},a.a.createElement("div",{className:u.a.Card},a.a.createElement("h1",null,o),a.a.createElement("div",{className:u.a.Grid,style:{gridTemplateColumns:"repeat(".concat(d,", 1fr)"),fontSize:"".concat(m,"%")}},b.slice(0,E).map((function(e,t){return a.a.createElement("div",{key:g()},a.a.createElement("div",null,e))})))))},d=r(5),f=r.n(d),m=Object(s.a)({title:"Calliope Mori Bingo",freeText:"FREE",freeTextCentered:!0,width:5,height:5,fontSize:100,numberOfCards:1,items:["gushing over friends and mentors","PEACE!!!","NARUHODONE","Do not get it Twisted","no salt","It's like that","PLEASE, SIR","I hate it","STOP","humming to BGM","Nanchara Kanchara","oisho","SIP","Your Boi","TEE HEE TEE HEE",'"it\'s fine" x4',"trying not to swear and doing it anyway","Kusotori in chat","voice crack","niHongo muzuKAshii!","palm spaghetti","ghost rider","cursed instrument performance","PACHIPACHI PACHIPACHI","sleepy reaper","MIZU!!!",'"Scythe Swinging Lessons"']},function(){try{return JSON.parse(localStorage.getItem("bingo"))}catch(e){return{}}}()),p=function(){var e=Object(n.useState)(m.title),t=Object(c.a)(e,2),r=t[0],i=(t[1],Object(n.useState)(m.freeText)),o=Object(c.a)(i,2),s=o[0],l=(o[1],Object(n.useState)(m.freeTextCentered)),u=Object(c.a)(l,2),d=u[0],p=(u[1],Object(n.useState)(m.width)),g=Object(c.a)(p,2),b=g[0],E=(g[1],Object(n.useState)(m.height)),C=Object(c.a)(E,2),O=C[0],S=(C[1],Object(n.useState)(m.fontSize)),v=Object(c.a)(S,2),_=v[0],w=(v[1],Object(n.useState)(m.numberOfCards)),j=Object(c.a)(w,2),A=j[0],x=(j[1],Object(n.useState)(m.items)),T=Object(c.a)(x,2),y=T[0];T[1],Object(n.useRef)(null);return Object(n.useEffect)((function(){localStorage.setItem("bingo",JSON.stringify({title:r,freeText:s,freeTextCentered:d,width:b,height:O,fontSize:_,numberOfCards:A,items:y}))}),[r,s,d,b,O,_,A,y]),a.a.createElement("div",{className:f.a.App},a.a.createElement("div",{className:f.a.Cards},new Array(Number(A)).fill().map((function(e,t){return a.a.createElement(h,{items:y,title:r,freeText:s,freeTextCentered:d,seed:t,width:b,height:O,fontSize:_})}))),a.a.createElement("div",null,a.a.createElement("a",{href:"https://github.com/Dflewis816"},"Repurposed for hololive by Dan Lewis")),a.a.createElement("div",null,a.a.createElement("a",{href:"https://github.com/thirdrender"},"Bingo generator created by thirdrender")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.459075c7.chunk.js.map