(function(t){function e(e){for(var i,a,s=e[0],c=e[1],d=e[2],u=0,l=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({addticket:"addticket",updateticket:"updateticket",viewticket:"viewticket"}[t]||t)+"."+{addticket:"e579e0f5","chunk-16435594":"0b4e8e1e","chunk-8227ea98":"2f1d6aad","chunk-36582bfe":"c24ca31b","chunk-1d3362f2":"519b7ff2",updateticket:"244958b2",viewticket:"f8dea944","chunk-0a41db86":"5c4899c4","chunk-2d21da72":"b50e134b","chunk-09bba788":"d45ffe53"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-8227ea98":1,"chunk-36582bfe":1,"chunk-0a41db86":1,"chunk-09bba788":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({addticket:"addticket",updateticket:"updateticket",viewticket:"viewticket"}[t]||t)+"."+{addticket:"31d6cfe0","chunk-16435594":"31d6cfe0","chunk-8227ea98":"3c9c720a","chunk-36582bfe":"0867dd84","chunk-1d3362f2":"31d6cfe0",updateticket:"31d6cfe0",viewticket:"31d6cfe0","chunk-0a41db86":"9d21c0d7","chunk-2d21da72":"31d6cfe0","chunk-09bba788":"9d21c0d7"}[t]+".css",r=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var d=o[s],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===i||u===r))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){d=l[s],u=d.getAttribute("data-href");if(u===i||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var l=new Error;d=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}r[t]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Support-Ticket-System-Frontend/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a2b":function(t,e,n){},"518f":function(t,e,n){"use strict";n("1a2b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),n("v-main",[n("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{color:"",dark:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-img",{staticClass:"infobeansLogo",attrs:{src:n("988d")}}),i("v-spacer"),i("v-toolbar-title",{staticClass:"body-1"},[t._v("Welcome User!")])],1),i("v-navigation-drawer",{attrs:{absolute:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",[i("v-list-item-group",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(this.$store.state.navItems,(function(e,n){return i("v-list-item",{key:n,attrs:{router:"",to:{name:e.text},exact:""}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1)},s=[],c={data:function(){return{drawer:!1,model:1}}},d=c,u=(n("518f"),n("2877")),l=n("6544"),p=n.n(l),m=n("40dc"),y=n("5bc1"),h=n("132d"),k=n("adda"),f=n("8860"),b=n("da13"),v=n("5d23"),g=n("1baa"),_=n("34c3"),w=n("f774"),x=n("2fa4"),L=n("2a7f"),I=Object(u["a"])(d,o,s,!1,null,"3dd0a9a8",null),P=I.exports;p()(I,{VAppBar:m["a"],VAppBarNavIcon:y["a"],VIcon:h["a"],VImg:k["a"],VList:f["a"],VListItem:b["a"],VListItemContent:v["a"],VListItemGroup:g["a"],VListItemIcon:_["a"],VListItemTitle:v["b"],VNavigationDrawer:w["a"],VSpacer:x["a"],VToolbarTitle:L["a"]});var T={name:"App",components:{Navbar:P}},j=T,V=n("7496"),O=n("f6c4"),C=Object(u["a"])(j,a,r,!1,null,null,null),S=C.exports;p()(C,{VApp:V["a"],VMain:O["a"]});n("d3b7"),n("3ca3"),n("ddb0");var A=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLogin()?n("div",[n("Dashboard")],1):n("div",[n("Login")],1)])},M=[],J=n("7277"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto mt-12",attrs:{width:"600"}},[n("v-card-title",[n("h1",{staticClass:"display-1"},[t._v("Login")])]),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{name:"email",label:"Email",id:"Email","prepend-icon":"mdi-account-circle",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{name:"Password",label:"Password",id:"Password",type:t.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"info"},on:{click:t.login}},[t._v("Login ")])],1)],1)],1)},N=[],$=n("bc3a"),B={data:function(){return{showPassword:!1,email:null,password:null}},mounted:function(){document.title="Login"},methods:{login:function(){return this.email&&this.password&&$.post("https://infobeans-support.herokuapp.com/employee",{email:this.email,password:this.password}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),!0}}},F=B,H=n("8336"),U=n("b0af"),q=n("99d9"),G=n("ce7e"),K=n("4bd4"),W=n("8654"),z=Object(u["a"])(F,D,N,!1,null,null,null),Q=z.exports;p()(z,{VBtn:H["a"],VCard:U["a"],VCardActions:q["a"],VCardText:q["b"],VCardTitle:q["c"],VDivider:G["a"],VForm:K["a"],VSpacer:x["a"],VTextField:W["a"]});var R={name:"Home",components:{Dashboard:J["default"],Login:Q},methods:{isLogin:function(){return!0}}},X=R,Y=Object(u["a"])(X,E,M,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This is logout page")])])}],nt={},it=Object(u["a"])(nt,tt,et,!1,null,null,null),at=it.exports;i["a"].use(A["a"]);var rt=[{path:"/",name:"Home",component:Z},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.resolve().then(n.bind(null,"7277"))}},{path:"/addticket",name:"Add Ticket",component:function(){return n.e("addticket").then(n.bind(null,"a37e"))}},{path:"/updateticket/:id",name:"Update Ticket",component:function(){return n.e("updateticket").then(n.bind(null,"60d5"))}},{path:"/viewticket/:id?",name:"View Ticket",component:function(){return n.e("viewticket").then(n.bind(null,"772b"))}},{path:"/logout",name:"Logout",component:at},{path:"/login",name:"Login",component:Q},{path:"*",name:"NotFound",component:function(){return n.e("viewticket").then(n.bind(null,"9703"))}}],ot=new A["a"]({mode:"history",base:"/Support-Ticket-System-Frontend/",routes:rt}),st=ot,ct=n("2f62");i["a"].use(ct["a"]);var dt=new ct["a"].Store({state:{navItems:[{icon:"mdi-home",text:"Home",route:"/"},{icon:"mdi-ticket",text:"Add Ticket",route:"/addTicket"},{icon:"mdi-view-list",text:"View Ticket",route:"/ViewTicket"},{icon:"mdi-logout",text:"Logout",route:"Logout"},{icon:"mdi-login",text:"Login",route:"Login"}],headers:[{text:"S. no",align:"center",sortable:!0,value:"ticket_id"},{text:"Status",align:"center",sortable:!0,value:"ticket_status"},{text:"Priority",align:"center",sortable:!0,value:"ticket_priority"},{text:"Subject",align:"center",sortable:!1,value:"ticket_subject"},{text:"Last Update",align:"center",sortable:!0,value:"ticket_last_updated"},{text:"Edit",align:"center",sortable:!1,value:"ticket_id"},{text:"Delete",align:"center",sortable:!1,value:"ticket_id"}],tickets:[{ticket_id:101,ticket_status:"Open",ticket_priority:"P1",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:102,ticket_status:"Open",ticket_priority:"P2",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:103,ticket_status:"Open",ticket_priority:"P3",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:104,ticket_status:"Closed",ticket_priority:"S",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:105,ticket_status:"Closed",ticket_priority:"S",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:106,ticket_status:"Open",ticket_priority:"P1",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:107,ticket_status:"Closed",ticket_priority:"S",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:108,ticket_status:"Open",ticket_priority:"P2",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:109,ticket_status:"Open",ticket_priority:"P3",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"},{ticket_id:110,ticket_status:"Closed",ticket_priority:"S",ticket_subject:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",ticket_last_updated:"05-May-2021 by Aditya Jain"}]},mutations:{},actions:{},modules:{}}),ut=n("f309");i["a"].use(ut["a"]);var lt=new ut["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:st,store:dt,vuetify:lt,render:function(t){return t(S)}}).$mount("#app")},7277:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white--text"},[n("v-container",[n("TicketsSummary"),n("v-divider",{staticClass:"mt-12 mb-5"}),n("TicketsTable")],1)],1)},a=[],r=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"Dashboard",components:{TicketsSummary:function(){return n.e("chunk-16435594").then(n.bind(null,"200f"))},TicketsTable:function(){return Promise.all([n.e("chunk-8227ea98"),n.e("chunk-36582bfe"),n.e("chunk-1d3362f2")]).then(n.bind(null,"bbd0"))}},mounted:function(){document.title="Dashboard"}}),o=r,s=n("2877"),c=n("6544"),d=n.n(c),u=n("a523"),l=n("ce7e"),p=Object(s["a"])(o,i,a,!1,null,null,null);e["default"]=p.exports;d()(p,{VContainer:u["a"],VDivider:l["a"]})},"988d":function(t,e,n){t.exports=n.p+"img/LOGO-main-light@2x.42689243.png"}});
//# sourceMappingURL=app.27fe987f.js.map