(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={nav:"UserHeaderNav_nav__3FhBg",active:"UserHeaderNav_active__2rovP",mobileButton:"UserHeaderNav_mobileButton__6HDPw",mobileButtonActive:"UserHeaderNav_mobileButtonActive__1iZ_M",navMobile:"UserHeaderNav_navMobile__2soo0",navMobileActive:"UserHeaderNav_navMobileActive__1K2b4"}},function(e,t,n){e.exports={photo:"PhotoContent_photo__17tR-",scaleUp:"PhotoContent_scaleUp__2dNdL",details:"PhotoContent_details__10hLM",img:"PhotoContent_img__2JTH4",comments:"PhotoContent_comments__3jkea",author:"PhotoContent_author__1K2iF",visualizacoes:"PhotoContent_visualizacoes__1JLuA",attributes:"PhotoContent_attributes__TaQaI"}},function(e,t,n){e.exports={header:"Header_header__1xknz",nav:"Header_nav__rCTBH",logo:"Header_logo__3pnjt",login:"Header_login__1dc3H"}},function(e,t,n){e.exports={wrapper:"Input_wrapper__1S6cM",input:"Input_input__2JGfz",label:"Input_label__rhzCM",error:"Input_error__1VRqd"}},function(e,t,n){e.exports={form:"LoginForm_form__1yu2I",lostPassword:"LoginForm_lostPassword__3IQpt",createAccount:"LoginForm_createAccount__2Kjlj",subtitle:"LoginForm_subtitle__1aIS2"}},function(e,t,n){e.exports={button:"Button_button__3zYWQ"}},function(e,t,n){e.exports={photoPost:"UserPhotoPost_photoPost__1eu1O",file:"UserPhotoPost_file__buUQs",preview:"UserPhotoPost_preview__jiNxo"}},,function(e,t,n){e.exports={photo:"FeedPhotosItem_photo__sZgmz",visualization:"FeedPhotosItem_visualization__cKKgW"}},function(e,t,n){e.exports={login:"Login_login__buL48",forms:"Login_forms__2ARPT"}},,,function(e,t,n){e.exports={footer:"Footer_footer__KGGDS"}},function(e,t,n){e.exports={modal:"FeedModal_modal__3TQpp"}},function(e,t,n){e.exports={feed:"FeedPhotos_feed__1HQzt"}},function(e,t,n){e.exports={header:"UserHeader_header__3Erq0"}},,,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(20),s=n.n(c),i=(n(31),n(3)),l=n(2),u=n(5),j=n.n(u),d=n(7),b=n(4),h="https://dogsapi.origamid.dev/json";function p(e){return{url:h+"/jwt-auth/v1/token",options:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}}}function f(e){return{url:h+"/jwt-auth/v1/token/validate",options:{method:"POST",headers:{Authorization:"Bearer "+e}}}}function v(e){return{url:h+"/api/user",options:{method:"GET",headers:{Authorization:"Bearer "+e}}}}function O(e){return{url:h+"/api/user",options:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}}}function m(e){var t=e.page,n=e.total,a=e.user;return{url:h+"/api/photo/?_page=".concat(t,"&_total=").concat(n,"&_user=").concat(a),options:{method:"GET",cache:"no-store"}}}var x=o.a.createContext(),g=function(e){var t=e.children,n=o.a.useState(null),r=Object(b.a)(n,2),c=r[0],s=r[1],i=o.a.useState(null),u=Object(b.a)(i,2),h=u[0],O=u[1],m=o.a.useState(!1),g=Object(b.a)(m,2),w=g[0],_=g[1],y=o.a.useState(null),C=Object(b.a)(y,2),P=C[0],N=C[1],E=Object(l.h)(),k=o.a.useCallback(Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(null),N(null),_(!1),O(!1),window.localStorage.removeItem("token"),E("/login");case 6:case"end":return e.stop()}}),e)}))),[E]);function S(e){return z.apply(this,arguments)}function z(){return(z=Object(d.a)(j.a.mark((function e(t){var n,a,r,o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(t),a=n.url,r=n.options,e.next=3,fetch(a,r);case 3:return o=e.sent,e.next=6,o.json();case 6:c=e.sent,s(c),O(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(d.a)(j.a.mark((function e(t,n){var a,r,o,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!1),_(!0),a=p({username:t,password:n}),r=a.url,o=a.options,e.next=6,fetch(r,o);case 6:if((c=e.sent).ok){e.next=9;break}throw new Error("Error: ".concat(c.statusText));case 9:return e.next=11,c.json();case 11:return s=e.sent,i=s.token,window.localStorage.setItem("token",i),console.log(i),e.next=17,S(i);case 17:E("/account"),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(0),N(e.t0.message),O(!1);case 24:return e.prev=24,_(!1),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[0,20,24,27]])})))).apply(this,arguments)}return o.a.useEffect((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("token"))){e.next=23;break}return e.prev=2,N(null),_(!0),n=f(t),a=n.url,r=n.options,e.next=8,fetch(a,r);case 8:if(e.sent.ok){e.next=11;break}throw new Error("Token inv\xe1lido");case 11:return e.next=13,S(t);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),k();case 18:return e.prev=18,_(!1),e.finish(18);case 21:e.next=24;break;case 23:O(!1);case 24:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),Object(a.jsx)(x.Provider,{value:{userLogin:function(e,t){return I.apply(this,arguments)},userLogout:k,data:c,error:P,loading:w,login:h},children:t})},w=n(11),_=n.n(w);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z",fill:"#333"}),N=r.createElement("circle",{cx:21,cy:3,r:3,fill:"#333"}),E=r.createElement("circle",{cx:7,cy:3,r:3,fill:"#333"});function k(e,t){var n=e.title,a=e.titleId,o=C(e,["title","titleId"]);return r.createElement("svg",y({width:28,height:22,viewBox:"0 0 28 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,P,N,E)}var S=r.forwardRef(k),z=(n.p,function(){var e=o.a.useContext(x).data;return Object(a.jsx)("header",{className:_.a.header,children:Object(a.jsxs)("nav",{className:"".concat(_.a.nav," container"),children:[Object(a.jsx)(i.b,{className:_.a.logo,to:"/","aria-label":"Dogs - Home",children:Object(a.jsx)(S,{})}),e?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i.b,{className:_.a.login,to:"/account",children:e.username})}):Object(a.jsx)(i.b,{className:_.a.login,to:"/login",children:"Login / Criar"})]})})}),I=n(21),M=n.n(I),H=function(){return Object(a.jsx)("div",{className:M.a.footer,children:"Footer"})},L=function(){var e=o.a.useState(null),t=Object(b.a)(e,2),n=t[0],a=t[1],r=o.a.useState(null),c=Object(b.a)(r,2),s=c[0],i=c[1],l=o.a.useState(null),u=Object(b.a)(l,2),h=u[0],p=u[1];return{data:n,loading:h,error:s,request:o.a.useCallback(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(null),p(!0),e.next=5,fetch(t,n);case 5:return r=e.sent,e.next=8,r.json();case 8:if(o=e.sent,!1!==r.ok){e.next=11;break}throw new Error(o.message);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),o=null,i(e.t0.message);case 17:return e.prev=17,a(o),p(!1),e.abrupt("return",{response:r,json:o});case 22:case"end":return e.stop()}}),e,null,[[0,13,17,22]])})));return function(t,n){return e.apply(this,arguments)}}(),[])}},A=function(e){var t=e.error;return t?Object(a.jsx)("p",{style:{color:"#f31",margin:"1rem 0"},children:t}):null},B=function(){return Object(a.jsx)("div",{children:"Carregando..."})},R=function(){return Object(a.jsx)("div",{})},F=n(10),U=n.n(F),T=function(e){var t=e.data,n=t.photo,r=t.comments;return Object(a.jsxs)("div",{className:U.a.photo,children:[Object(a.jsx)("div",{className:U.a.img,children:Object(a.jsx)("img",{src:n.src,alt:n.title})}),Object(a.jsx)("div",{className:U.a.details,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:U.a.author,children:[Object(a.jsxs)(i.b,{to:"/profile/".concat(n.author),children:["@",n.author]}),Object(a.jsx)("span",{className:U.a.visualizacoes,children:n.acessos})]}),Object(a.jsx)("h1",{className:"title",children:Object(a.jsx)(i.b,{to:"/photo/".concat(n.id),children:n.title})}),Object(a.jsxs)("ul",{className:U.a.attributes,children:[Object(a.jsxs)("li",{children:[n.peso," kg"]}),Object(a.jsxs)("li",{children:[n.idade," anos"]})]})]})}),Object(a.jsx)(R,{id:n.id,comments:r})]})},V=n(22),Z=n.n(V),q=function(e){var t=e.photo,n=e.setModalPhoto,r=L(),c=r.data,s=r.error,i=r.loading,l=r.request;return o.a.useEffect((function(){var e,n=(e=t.id,{url:h+"/api/photo/".concat(e),options:{method:"GET",cache:"no-store"}});l(n.url,n.options)}),[t,l]),Object(a.jsxs)("div",{className:Z.a.modal,onClick:function(e){e.target===e.currentTarget&&n(null)},children:[s&&Object(a.jsx)(A,{error:s}),i&&Object(a.jsx)(B,{}),c&&Object(a.jsx)(T,{data:c})]})},D=n(17),J=n.n(D),G=function(e){var t=e.photo,n=e.setModalPhoto;return Object(a.jsxs)("li",{className:J.a.photo,onClick:function(){n(t)},children:[Object(a.jsx)("img",{src:t.src,alt:t.title}),Object(a.jsx)("span",{className:J.a.visualization,children:t.acessos})]})},K=n(23),Q=n.n(K),$=function(e){var t=e.setModalPhoto,n=L(),r=n.data,c=n.error,s=n.loading,i=n.request;return o.a.useEffect((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,n,a,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m({page:1,total:6,user:0}),n=t.url,a=t.options,e.next=3,i(n,a);case 3:r=e.sent,o=r.json,console.log(o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),c?Object(a.jsx)(A,{error:c}):s?Object(a.jsx)(B,{}):r?Object(a.jsx)("ul",{className:"".concat(Q.a.feed," animeLeft"),children:r.map((function(e){return Object(a.jsx)(G,{photo:e,setModalPhoto:t},e.id)}))}):null},W=function(){var e=o.a.useState(null),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[n&&Object(a.jsx)(q,{photo:n,setModalPhoto:r}),Object(a.jsx)($,{setModalPhoto:r})]})},Y=function(){return Object(a.jsx)("section",{className:"container mainContainer",children:Object(a.jsx)(W,{})})},X=n(6),ee={email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email v\xe1lido"},password:{regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,message:"A senha precisa ter 1 caracter mai\xfasculo, 1 min\xfasculo e 1 d\xedgito. Com no m\xednimo 8 caracteres."},number:{regex:/^\d+$/,message:"Utilize n\xfamero apenas."}},te=function(e){var t=o.a.useState(""),n=Object(b.a)(t,2),a=n[0],r=n[1],c=o.a.useState(null),s=Object(b.a)(c,2),i=s[0],l=s[1];function u(t){return!1===e||(0===t.length?(l("Preencha um valor."),!1):ee[e]&&!ee[e].regex.test(t)?(l(ee[e].message),!1):(l(null),!0))}return{value:a,setValue:r,onChange:function(e){var t=e.target;i&&u(t.value),r(t.value)},error:i,validate:function(){return u(a)},onBlur:function(){return u(a)}}},ne=n(25),ae=n(14),re=n.n(ae),oe=function(e){var t=e.children,n=Object(ne.a)(e,["children"]);return Object(a.jsx)("button",Object(X.a)(Object(X.a)({},n),{},{className:re.a.button,children:t}))},ce=n(12),se=n.n(ce),ie=function(e){var t=e.label,n=e.type,r=e.name,o=e.value,c=e.onChange,s=e.error,i=e.onBlur;return Object(a.jsxs)("div",{className:se.a.wrapper,children:[Object(a.jsx)("label",{className:se.a.label,htmlFor:r,children:t}),Object(a.jsx)("input",{id:r,name:r,className:se.a.input,type:n,onChange:c,value:o,onBlur:i}),s&&Object(a.jsx)("p",{className:se.a.error,children:s})]})},le=n(13),ue=n.n(le),je=function(){var e=te(),t=te(),n=o.a.useContext(x),r=n.userLogin,c=n.error,s=n.loading;function l(){return(l=Object(d.a)(j.a.mark((function n(a){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.preventDefault(),e.validate()&&t.validate()&&r(e.value,t.value);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(a.jsxs)("section",{className:"animeLeft",children:[Object(a.jsx)("h1",{className:"title",children:"Login"}),Object(a.jsxs)("form",{className:ue.a.form,action:"",onSubmit:function(e){return l.apply(this,arguments)},children:[Object(a.jsx)(ie,Object(X.a)({label:"Usu\xe1rio",type:"text",name:"username"},e)),Object(a.jsx)(ie,Object(X.a)({label:"Senha",type:"password",name:"password"},t)),s?Object(a.jsx)(oe,{disabled:!0,children:"Carregando..."}):Object(a.jsx)(oe,{children:"Entrar"}),Object(a.jsx)(A,{error:c})]}),Object(a.jsx)(i.b,{className:ue.a.lostPassword,to:"/login/lostpassword",children:"Perdeu a senha?"}),Object(a.jsxs)("div",{className:ue.a.createAccount,children:[Object(a.jsx)("h2",{className:ue.a.subtitle,children:"Cadastre-se"}),Object(a.jsx)("p",{children:"Ainda n\xe3o possui conta? Cadastre-se no site."}),Object(a.jsx)(i.b,{className:re.a.button,to:"/login/createAccount",children:"Cadastro"})]})]})},de=function(){var e=te(),t=te("email"),n=te(),r=o.a.useContext(x).userLogin,c=L(),s=c.loading,i=c.error,l=c.request;function u(){return(u=Object(d.a)(j.a.mark((function a(o){var c,s,i,u;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o.preventDefault(),c=O({username:e.value,email:t.value,password:n.value}),s=c.url,i=c.options,a.next=4,l(s,i);case 4:u=a.sent,u.response.ok&&r(e.value,n.value);case 7:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(a.jsxs)("section",{className:"animeLeft",children:[Object(a.jsx)("h1",{className:"title",children:"Cadastre-se"}),Object(a.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(a.jsx)(ie,Object(X.a)({label:"Usu\xe1rio",type:"text",name:"username"},e)),Object(a.jsx)(ie,Object(X.a)({label:"Email",type:"email",name:"email"},t)),Object(a.jsx)(ie,Object(X.a)({label:"Senha",type:"password",name:"password"},n)),s?Object(a.jsx)(oe,{disabled:!0,children:"Cadastrando..."}):Object(a.jsx)(oe,{children:"Cadastrar"}),Object(a.jsx)(A,{error:i})]})]})},be=function(){return Object(a.jsx)("div",{children:"Perdeu"})},he=function(){return Object(a.jsx)("div",{children:"Reset"})},pe=n(18),fe=n.n(pe),ve=function(){return!0===o.a.useContext(x).login?Object(a.jsx)(l.a,{to:"/account"}):Object(a.jsx)("section",{className:fe.a.login,children:Object(a.jsx)("div",{className:fe.a.forms,children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",element:Object(a.jsx)(je,{})}),Object(a.jsx)(l.b,{path:"createAccount",element:Object(a.jsx)(de,{})}),Object(a.jsx)(l.b,{path:"lost",element:Object(a.jsx)(be,{})}),Object(a.jsx)(l.b,{path:"reset",element:Object(a.jsx)(he,{})})]})})})};function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var xe=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 4h3a3 3 0 013 3v3a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H7zM7 15h3a3 3 0 013 3v3a3 3 0 01-3 3H7a3 3 0 01-3-3v-3a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H7zM18 4h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3V7a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1h-3zM18 15h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3v-3a3 3 0 013-3zm0 2a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3z",fill:"#333"});function ge(e,t){var n=e.title,a=e.titleId,o=me(e,["title","titleId"]);return r.createElement("svg",Oe({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,xe)}var we=r.forwardRef(ge);n.p;function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ce=r.createElement("rect",{x:6,y:14,width:2,height:8,rx:1,fill:"#333"}),Pe=r.createElement("rect",{x:13,y:10,width:2,height:12,rx:1,fill:"#333"}),Ne=r.createElement("rect",{x:20,y:6,width:2,height:16,rx:1,fill:"#333"});function Ee(e,t){var n=e.title,a=e.titleId,o=ye(e,["title","titleId"]);return r.createElement("svg",_e({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,Ce,Pe,Ne)}var ke=r.forwardRef(Ee);n.p;function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ie=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 5a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H6a1 1 0 110-2h7V6a1 1 0 011-1z",fill:"#333"});function Me(e,t){var n=e.title,a=e.titleId,o=ze(e,["title","titleId"]);return r.createElement("svg",Se({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,Ie)}var He=r.forwardRef(Me);n.p;function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Be=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289L24.7071 13.2929C25.0976 13.6834 25.0976 14.3166 24.7071 14.7071L20.7071 18.7071C20.3166 19.0976 19.6834 19.0976 19.2929 18.7071C18.9024 18.3166 18.9024 17.6834 19.2929 17.2929L21.5858 15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H21.5858L19.2929 10.7071C18.9024 10.3166 18.9024 9.68342 19.2929 9.29289Z",fill:"#333"}),Re=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 6C5 5.44772 5.44772 5 6 5H15C15.5523 5 16 5.44772 16 6V10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10V7H7V21H14V18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V22C16 22.5523 15.5523 23 15 23H6C5.44772 23 5 22.5523 5 22V6Z",fill:"#333"});function Fe(e,t){var n=e.title,a=e.titleId,o=Ae(e,["title","titleId"]);return r.createElement("svg",Le({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?r.createElement("title",{id:a},n):null,Be,Re)}var Ue=r.forwardRef(Fe),Te=(n.p,n(9)),Ve=n.n(Te),Ze=function(e){var t=o.a.useState(null),n=Object(b.a)(t,2),a=n[0],r=n[1];return o.a.useEffect((function(){function t(){var t=window.matchMedia(e).matches;r(t)}return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),a},qe=function(){var e=o.a.useContext(x).userLogout,t=Ze("(max-width: 40rem)"),n=o.a.useState(!1),r=Object(b.a)(n,2),c=r[0],s=r[1],u=Object(l.g)().pathname;return o.a.useEffect((function(){s(!1)}),[u]),Object(a.jsxs)(a.Fragment,{children:[t&&Object(a.jsx)("button",{"area-label":"Menu",className:"".concat(Ve.a.mobileButton," ").concat(c&&Ve.a.mobileButtonActive),onClick:function(){return s(!c)}}),Object(a.jsxs)("nav",{className:"".concat(t?Ve.a.navMobile:Ve.a.nav," ").concat(c&&Ve.a.navMobileActive),children:[Object(a.jsxs)(i.c,{to:"/account",end:!0,activeClassName:Ve.a.active,children:[Object(a.jsx)(we,{}),t&&"Minhas Fotos"]}),Object(a.jsxs)(i.c,{to:"/account/stats",activeClassName:Ve.a.active,children:[Object(a.jsx)(ke,{}),t&&"Estat\xedsticas"]}),Object(a.jsxs)(i.c,{to:"/account/post",activeClassName:Ve.a.active,children:[Object(a.jsx)(He,{}),t&&"Adicionar Foto"]}),Object(a.jsxs)("button",{onClick:e,children:[Object(a.jsx)(Ue,{}),t&&"Sair"]})]})]})},De=n(24),Je=n.n(De),Ge=function(){var e=o.a.useState(""),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(l.g)();return o.a.useEffect((function(){switch(c.pathname){case"/account":r("Minha Conta");break;case"/account/stats":r("Estat\xedsticas");break;case"/account/post":r("Postar");break;default:r("Minha Conta")}}),[c]),Object(a.jsxs)("header",{className:Je.a.header,children:[Object(a.jsx)("h1",{className:"title",children:n}),Object(a.jsx)(qe,{})]})},Ke=n(15),Qe=n.n(Ke),$e=function(){var e=te(),t=te("number"),n=te("number"),r=o.a.useState({}),c=Object(b.a)(r,2),s=c[0],i=c[1],u=L(),j=u.data,d=u.error,p=u.loading,f=u.request,v=Object(l.h)();return o.a.useEffect((function(){j&&v("/account")}),[j,v]),Object(a.jsxs)("section",{className:"".concat(Qe.a.photoPost," animeLeft"),children:[Object(a.jsxs)("form",{onSubmit:function(a){a.preventDefault();var r=new FormData;r.append("img",s.raw),r.append("nome",e.value),r.append("peso",t.value),r.append("idade",n.value);var o=function(e,t){return{url:h+"/api/photo",options:{method:"POST",headers:{Authorization:"Bearer "+t},body:e}}}(r,window.localStorage.getItem("token")),c=o.url,i=o.options;f(c,i)},children:[Object(a.jsx)(ie,Object(X.a)({label:"Nome",type:"text",name:"nome"},e)),Object(a.jsx)(ie,Object(X.a)({label:"Peso",type:"text",name:"peso"},t)),Object(a.jsx)(ie,Object(X.a)({label:"Idade",type:"text",name:"idade"},n)),Object(a.jsx)("input",{className:Qe.a.file,type:"file",name:"img",id:"img",onChange:function(e){var t=e.target;i({preview:URL.createObjectURL(t.files[0]),raw:t.files[0]})}}),p?Object(a.jsx)(oe,{disabled:!0,children:"Enviando..."}):Object(a.jsx)(oe,{children:"Enviar"}),Object(a.jsx)(A,{error:d})]}),Object(a.jsx)("div",{children:s.preview&&Object(a.jsx)("div",{className:Qe.a.preview,style:{backgroundImage:"url('".concat(s.preview,"')")}})})]})},We=function(){return Object(a.jsx)("div",{children:"Estat\xedsticas"})},Ye=function(){return Object(a.jsxs)("section",{className:"container",children:[Object(a.jsx)(Ge,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",element:Object(a.jsx)(W,{})}),Object(a.jsx)(l.b,{path:"post",element:Object(a.jsx)($e,{})}),Object(a.jsx)(l.b,{path:"stats",element:Object(a.jsx)(We,{})})]})]})},Xe=function(e){var t=o.a.useContext(x).login;return!0===t?Object(a.jsx)(l.b,Object(X.a)({},e)):!1===t?Object(a.jsx)(l.a,{to:"/login"}):null},et=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(g,{children:[Object(a.jsx)(z,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",element:Object(a.jsx)(Y,{})}),Object(a.jsx)(l.b,{path:"login/*",element:Object(a.jsx)(ve,{})}),Object(a.jsx)(Xe,{path:"account/*",element:Object(a.jsx)(Ye,{})})]}),Object(a.jsx)(H,{})]})})})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(et,{})}),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.f917200b.chunk.js.map