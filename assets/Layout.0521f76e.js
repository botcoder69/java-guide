import{f as x,i as j,j as ie,k as p,l as q,r as P,h as s,o,m as M,w as T,n as w,d as H,t as S,p as ae,c,q as C,s as Me,v as E,x as V,y as Te,z as oe,a as l,F as B,A as z,b as k,B as F,C as Be,D as Ie,g as N,E as G,G as K,H as ue,I as ce,J as Ne,T as de,K as O,L as ve,M as he,N as pe,O as _e,u as me,P as fe,Q as be,R as A,S as re,U as De}from"./app.ecd2d336.js";const Re=n=>/^mailto:/.test(n),He=n=>/^tel:/.test(n),ze=["href","rel","target","aria-label"],Ee=x({inheritAttrs:!1});var D=x({...Ee,props:{item:{type:Object,required:!0}},setup(n){const e=n,a=j(),r=Me(),{item:t}=ie(e),f=p(()=>q(t.value.link)),v=p(()=>Re(t.value.link)||He(t.value.link)),m=p(()=>{if(!v.value){if(t.value.target)return t.value.target;if(f.value)return"_blank"}}),i=p(()=>m.value==="_blank"),u=p(()=>!f.value&&!v.value&&!i.value),d=p(()=>{if(!v.value){if(t.value.rel)return t.value.rel;if(i.value)return"noopener noreferrer"}}),_=p(()=>t.value.ariaLabel||t.value.text),h=p(()=>{const L=Object.keys(r.value.locales);return L.length?!L.some(b=>b===t.value.link):t.value.link!=="/"}),g=p(()=>h.value?a.path.startsWith(t.value.link):!1),$=p(()=>u.value?t.value.activeMatch?new RegExp(t.value.activeMatch).test(a.path):g.value:!1);return(L,b)=>{const y=P("RouterLink"),I=P("OutboundLink");return s(u)?(o(),M(y,ae({key:0,class:["nav-link",{"router-link-active":s($)}],to:s(t).link,"aria-label":s(_)},L.$attrs),{default:T(()=>[w(L.$slots,"before"),H(" "+S(s(t).text)+" ",1),w(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),c("a",ae({key:1,class:"nav-link external",href:s(t).link,rel:s(d),target:s(m),"aria-label":s(_)},L.$attrs),[w(L.$slots,"before"),H(" "+S(s(t).text)+" ",1),s(i)?(o(),M(I,{key:0})):C("",!0),w(L.$slots,"after")],16,ze))}}});const Pe=["aria-labelledby"],Ae={class:"hero"},Fe=["src","alt"],Oe={key:1,id:"main-title"},Ue={key:2,class:"description"},Ge={key:3,class:"actions"},je={key:0,class:"features"},qe={class:"theme-default-content custom"},Ve=["innerHTML"],Qe=["textContent"];var Ke=x({setup(n){const e=E(),a=V(),r=p(()=>e.value.heroImage?Te(e.value.heroImage):null),t=p(()=>e.value.heroText===null?null:e.value.heroText||a.value.title||"Hello"),f=p(()=>e.value.heroAlt||t.value||"hero"),v=p(()=>e.value.tagline===null?null:e.value.tagline||a.value.description||"Welcome to your VuePress site"),m=p(()=>oe(e.value.actions)?e.value.actions.map(({text:_,link:h,type:g="primary"})=>({text:_,link:h,type:g})):[]),i=p(()=>oe(e.value.features)?e.value.features:[]),u=p(()=>e.value.footer),d=p(()=>e.value.footerHtml);return(_,h)=>{const g=P("Content");return o(),c("main",{class:"home","aria-labelledby":s(t)?"main-title":void 0},[l("header",Ae,[s(r)?(o(),c("img",{key:0,src:s(r),alt:s(f)},null,8,Fe)):C("",!0),s(t)?(o(),c("h1",Oe,S(s(t)),1)):C("",!0),s(v)?(o(),c("p",Ue,S(s(v)),1)):C("",!0),s(m).length?(o(),c("p",Ge,[(o(!0),c(B,null,z(s(m),$=>(o(),M(D,{key:$.text,class:F(["action-button",[$.type]]),item:$},null,8,["class","item"]))),128))])):C("",!0)]),s(i).length?(o(),c("div",je,[(o(!0),c(B,null,z(s(i),$=>(o(),c("div",{key:$.title,class:"feature"},[l("h2",null,S($.title),1),l("p",null,S($.details),1)]))),128))])):C("",!0),l("div",qe,[k(g)]),s(u)?(o(),c(B,{key:1},[s(d)?(o(),c("div",{key:0,class:"footer",innerHTML:s(u)},null,8,Ve)):(o(),c("div",{key:1,class:"footer",textContent:S(s(u))},null,8,Qe))],64)):C("",!0)],8,Pe)}}});const ge=n=>!q(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,We={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Xe=({docsRepo:n,docsBranch:e,docsDir:a,filePathRelative:r,editLinkPattern:t})=>{const f=ge(n);let v;return t?v=t:f!==null&&(v=We[f]),v?v.replace(/:repo/,q(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,Be(`${Ie(a)}/${r}`)):null},Ye={class:"page-meta"},Je={key:0,class:"meta-item edit-link"},Ze={key:1,class:"meta-item last-updated"},et={class:"meta-item-label"},tt={class:"meta-item-info"},st={key:2,class:"meta-item contributors"},nt={class:"meta-item-label"},at={class:"meta-item-info"},ot=["title"],rt=H(", ");var lt=x({setup(n){const e=()=>{const i=N(),u=G(),d=E();return p(()=>{var I,R;if(!((R=(I=d.value.editLink)!=null?I:i.value.editLink)!=null?R:!0))return null;const{repo:h,docsRepo:g=h,docsBranch:$="main",docsDir:L="",editLinkText:b}=i.value;if(!g)return null;const y=Xe({docsRepo:g,docsBranch:$,docsDir:L,filePathRelative:u.value.filePathRelative,editLinkPattern:i.value.editLinkPattern});return y?{text:b!=null?b:"Edit this page",link:y}:null})},a=()=>{const i=V(),u=N(),d=G(),_=E();return p(()=>{var $,L,b,y;return!((L=($=_.value.lastUpdated)!=null?$:u.value.lastUpdated)!=null?L:!0)||!((b=d.value.git)!=null&&b.updatedTime)?null:new Date((y=d.value.git)==null?void 0:y.updatedTime).toLocaleString(i.value.lang)})},r=()=>{const i=N(),u=G(),d=E();return p(()=>{var h,g,$,L;return((g=(h=d.value.contributors)!=null?h:i.value.contributors)!=null?g:!0)&&(L=($=u.value.git)==null?void 0:$.contributors)!=null?L:null})},t=N(),f=e(),v=a(),m=r();return(i,u)=>(o(),c("footer",Ye,[s(f)?(o(),c("div",Je,[k(D,{class:"meta-item-label",item:s(f)},null,8,["item"])])):C("",!0),s(v)?(o(),c("div",Ze,[l("span",et,S(s(t).lastUpdatedText)+": ",1),l("span",tt,S(s(v)),1)])):C("",!0),s(m)&&s(m).length?(o(),c("div",st,[l("span",nt,S(s(t).contributorsText)+": ",1),l("span",at,[(o(!0),c(B,null,z(s(m),(d,_)=>(o(),c(B,{key:_},[l("span",{class:"contributor",title:`email: ${d.email}`},S(d.name),9,ot),_!==s(m).length-1?(o(),c(B,{key:0},[rt],64)):C("",!0)],64))),128))])])):C("",!0)]))}});const it={key:0,class:"page-nav"},ut={class:"inner"},ct={key:0,class:"prev"},dt=H(" \u2190 "),vt={key:1,class:"next"},ht=H(" \u2192 ");var pt=x({setup(n){const e=i=>i===!1?null:ue(i)?ce(i):Ne(i)?i:!1,a=(i,u,d)=>{const _=i.findIndex(h=>h.link===u);if(_!==-1){const h=i[_+d];return h!=null&&h.link?h:null}for(const h of i)if(h.children){const g=a(h.children,u,d);if(g)return g}return null},r=E(),t=K(),f=j(),v=p(()=>{const i=e(r.value.prev);return i!==!1?i:a(t.value,f.path,-1)}),m=p(()=>{const i=e(r.value.next);return i!==!1?i:a(t.value,f.path,1)});return(i,u)=>s(v)||s(m)?(o(),c("nav",it,[l("p",ut,[s(v)?(o(),c("span",ct,[dt,k(D,{item:s(v)},null,8,["item"])])):C("",!0),s(m)?(o(),c("span",vt,[k(D,{item:s(m)},null,8,["item"]),ht])):C("",!0)])])):C("",!0)}});const _t={class:"page"},mt={class:"theme-default-content"};var ft=x({setup(n){return(e,a)=>{const r=P("Content");return o(),c("main",_t,[w(e.$slots,"top"),l("div",mt,[k(r)]),k(lt),k(pt),w(e.$slots,"bottom")])}}}),bt=x({setup(n){const e=r=>{r.style.height=r.scrollHeight+"px"},a=r=>{r.style.height=""};return(r,t)=>(o(),M(de,{name:"dropdown",onEnter:e,onAfterEnter:a,onBeforeLeave:e},{default:T(()=>[w(r.$slots,"default")]),_:3}))}});const gt=["aria-label"],kt={class:"title"},$t=l("span",{class:"arrow down"},null,-1),Lt=["aria-label"],yt={class:"title"},wt={class:"nav-dropdown"},Ct={class:"dropdown-subtitle"},xt={key:1},St={class:"dropdown-subitem-wrapper"};var Mt=x({props:{item:{type:Object,required:!0}},setup(n){const e=n,{item:a}=ie(e),r=p(()=>a.value.ariaLabel||a.value.text),t=O(!1),f=j();ve(()=>f.path,()=>{t.value=!1});const v=i=>{i.detail===0?t.value=!t.value:t.value=!1},m=(i,u)=>u[u.length-1]===i;return(i,u)=>(o(),c("div",{class:F(["dropdown-wrapper",{open:t.value}])},[l("button",{class:"dropdown-title",type:"button","aria-label":s(r),onClick:v},[l("span",kt,S(s(a).text),1),$t],8,gt),l("button",{class:"mobile-dropdown-title",type:"button","aria-label":s(r),onClick:u[0]||(u[0]=d=>t.value=!t.value)},[l("span",yt,S(s(a).text),1),l("span",{class:F(["arrow",t.value?"down":"right"])},null,2)],8,Lt),k(bt,null,{default:T(()=>[he(l("ul",wt,[(o(!0),c(B,null,z(s(a).children,(d,_)=>(o(),c("li",{key:d.link||_,class:"dropdown-item"},[d.children?(o(),c(B,{key:0},[l("h4",Ct,[d.link?(o(),M(D,{key:0,item:d,onFocusout:h=>m(d,s(a).children)&&d.children.length===0&&(t.value=!1)},null,8,["item","onFocusout"])):(o(),c("span",xt,S(d.text),1))]),l("ul",St,[(o(!0),c(B,null,z(d.children,h=>(o(),c("li",{key:h.link,class:"dropdown-subitem"},[k(D,{item:h,onFocusout:g=>m(h,d.children)&&m(d,s(a).children)&&(t.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),M(D,{key:1,item:d,onFocusout:h=>m(d,s(a).children)&&(t.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[pe,t.value]])]),_:1})],2))}});const Tt={key:0,class:"navbar-links"};var ke=x({setup(n){const e=()=>{const u=_e(),d=me(),_=V(),h=N();return p(()=>{var y,I;const g=Object.keys(_.value.locales);if(g.length<2)return[];const $=u.currentRoute.value.path,L=u.currentRoute.value.fullPath;return[{text:(y=h.value.selectLanguageText)!=null?y:"unkown language",ariaLabel:(I=h.value.selectLanguageAriaLabel)!=null?I:"unkown language",children:g.map(R=>{var Y,J,Z,ee,te,se;const Ce=(J=(Y=_.value.locales)==null?void 0:Y[R])!=null?J:{},W=(ee=(Z=h.value.locales)==null?void 0:Z[R])!=null?ee:{},X=`${Ce.lang}`,xe=(te=W.selectLanguageName)!=null?te:X;let U;if(X===_.value.lang)U=L;else{const ne=$.replace(d.value,R);u.getRoutes().some(Se=>Se.path===ne)?U=ne:U=(se=W.home)!=null?se:R}return{text:xe,link:U}})}]})},a=()=>{const u=N(),d=p(()=>u.value.repo),_=p(()=>d.value?ge(d.value):null),h=p(()=>d.value&&!q(d.value)?`https://github.com/${d.value}`:d.value),g=p(()=>h.value?u.value.repoLabel?u.value.repoLabel:_.value===null?"Source":_.value:null);return p(()=>!h.value||!g.value?[]:[{text:g.value,link:h.value}])},r=u=>ue(u)?ce(u):u.children?{...u,children:u.children.map(r)}:u,f=(()=>{const u=N();return p(()=>(u.value.navbar||[]).map(r))})(),v=e(),m=a(),i=p(()=>[...f.value,...v.value,...m.value]);return(u,d)=>s(i).length?(o(),c("nav",Tt,[(o(!0),c(B,null,z(s(i),_=>(o(),c("div",{key:_.text,class:"navbar-links-item"},[_.children?(o(),M(Mt,{key:0,item:_},null,8,["item"])):(o(),M(D,{key:1,item:_},null,8,["item"]))]))),128))])):C("",!0)}});function Bt(){const n=O(!1),e=(t=n.value)=>{const f=window==null?void 0:window.document.querySelector("html");f==null||f.classList.toggle("dark",t);const v=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;t&&v||!t&&!v?localStorage.removeItem("guide-color-scheme"):t&&!v?localStorage.setItem("guide-color-scheme","dark"):!t&&v&&localStorage.setItem("guide-color-scheme","light")},a=O(null),r=t=>{n.value=t.matches};return fe(()=>{const t=localStorage.getItem("guide-color-scheme");a.value=window.matchMedia("(prefers-color-scheme: dark)"),n.value=t==="dark"||t!=="light"&&a.value.matches,a.value.addEventListener("change",r),ve(n,e,{immediate:!0})}),be(()=>{var t;(t=a.value)==null||t.removeEventListener("change",r)}),{isDarkMode:n}}const It=l("svg",{class:"icon light-icon",focusable:"false",viewBox:"0 0 32 32"},[l("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"}),l("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"}),l("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"}),l("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"}),l("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"}),l("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"}),l("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"}),l("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"}),l("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"})],-1),Nt=l("svg",{class:"icon dark-icon",focusable:"false",viewBox:"0 0 32 32"},[l("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"})],-1),Dt=[It,Nt];var Rt=x({setup(n){const{isDarkMode:e}=Bt(),a=()=>{e.value=!e.value};return(r,t)=>(o(),c("button",{class:"toggle-dark-button",onClick:a},Dt))}});const $e={},Ht={viewBox:"0 0 448 512"},zt=l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"},null,-1),Et=[zt];function Pt(n,e){return o(),c("svg",Ht,Et)}$e.render=Pt;var At=$e;const Le={},Ft={viewBox:"0 0 24 24"},Ot=l("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z",fill:"currentColor"},null,-1),Ut=[Ot];function Gt(n,e){return o(),c("svg",Ft,Ut)}Le.render=Gt;var jt=Le,qt=x({emits:["toggle"],setup(n){return(e,a)=>(o(),c("div",{class:"toggle-sidebar-button",onClick:a[0]||(a[0]=r=>e.$emit("toggle"))},[k(At,{class:"icon sidebar-menu-icon"}),k(jt,{class:"icon sidebar-close-icon"})]))}});const Vt={class:"navbar"},Qt={class:"navbar-wrapper"},Kt={class:"navbar-links-wrapper"},Wt={class:"navbar-links-container"},Xt={class:"navbar-links-home"},Yt={class:"navbar-links-container"};var Jt=x({emits:["toggle-sidebar"],setup(n){const e=me(),a=V(),r=N(),t=p(()=>r.value.home||e.value),f=p(()=>a.value.title);return(v,m)=>{const i=P("RouterLink"),u=P("NavbarSearch");return o(),c("header",Vt,[l("div",Qt,[l("div",Kt,[l("div",Wt,[l("span",Xt,[k(i,{to:s(t)},{default:T(()=>[H(S(s(f)),1)]),_:1},8,["to"])]),w(v.$slots,"before"),k(ke,{class:"can-hide"}),w(v.$slots,"after")]),l("div",Yt,[k(Rt),k(u,{class:"navbar-search"}),k(qt,{onToggle:m[0]||(m[0]=d=>v.$emit("toggle-sidebar"))})])])])])}}});const le=n=>decodeURI(n).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Zt=(n,e)=>{if(e===void 0)return!1;if(n.hash===e)return!0;const a=le(n.path),r=le(e);return a===r},ye=(n,e)=>Zt(n,e.link)?!0:e.children?e.children.some(a=>ye(n,a)):!1,es=(n,e)=>n.link?A(D,{...e,item:n}):A("p",e,n.text),ts=(n,e)=>{var a;return!((a=n.children)===null||a===void 0)&&a.length?A("ul",{class:{"sidebar-sub-items":e>0}},n.children.map(r=>A("li",A(Q,{item:r,depth:e+1})))):null},Q=({item:n,depth:e=0})=>{const a=j(),r=ye(a,n);return[es(n,{class:{"sidebar-heading":e===0,"sidebar-item":!0,active:r}}),ts(n,e)]};Q.displayName="SidebarChild";Q.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};function ss(){return{setTheme:({colorTheme:e="default",persist:a=!1})=>{const r=["blurple"],{classList:t}=document.documentElement,f=r.map(v=>`guide-theme-${v}`);if(e!=="default"&&!r.includes(e)){const v=localStorage.getItem("guide-color-theme");e=r.includes(v)?v:"default"}if(a&&localStorage.setItem("guide-color-theme",e),e==="default")return t.remove(...f);t.remove(...f.filter(v=>v!==`guide-theme-${e}`)),t.add(`guide-theme-${e}`)}}}const ns={class:"theme-options"},as={class:"color-theme-options"},os=l("span",null,"Theme",-1);var rs=x({setup(n){const{setTheme:e}=ss();return(a,r)=>(o(),c("div",ns,[l("ul",as,[os,l("li",null,[l("button",{class:"default-theme",title:"Green theme",onClick:r[0]||(r[0]=re(t=>s(e)({persist:!0}),["prevent"]))})]),l("li",null,[l("button",{class:"blurple-theme",title:"Blurple theme",onClick:r[1]||(r[1]=re(t=>s(e)({colorTheme:"blurple",persist:!0}),["prevent"]))})])])]))}});const we={},ls={viewBox:"0 0 24 24"},is=l("path",{d:"M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z",fill:"currentColor"},null,-1),us=[is];function cs(n,e){return o(),c("svg",ls,us)}we.render=cs;var ds=we;const vs=H(" Settings "),hs={class:"sidebar-item"};var ps=x({setup(n){const e=O(!1);return(a,r)=>(o(),c("div",{class:F(["sidebar-group",{"sidebar-group-collapsed":!e.value}])},[l("button",{class:"sidebar-heading sidebar-item",onClick:r[0]||(r[0]=t=>e.value=!e.value)},[vs,k(ds,{class:"menu-icon"})]),he(l("ul",null,[l("li",null,[l("div",hs,[k(rs)])])],512),[[pe,e.value]])],2))}});const _s={class:"sidebar"},ms={class:"sidebar-links"};var fs=x({setup(n){const e=K();return(a,r)=>(o(),c("aside",_s,[k(ke),w(a.$slots,"top"),l("ul",ms,[k(ps),(o(!0),c(B,null,z(s(e),t=>(o(),M(s(Q),{key:t.link||t.text,item:t},null,8,["item"]))),128))]),w(a.$slots,"bottom")]))}});const bs={class:"content-wrapper"},gs={class:"sidebar-wrapper"};var $s=x({setup(n){const e=G(),a=E(),r=N(),t=p(()=>a.value.navbar!==!1&&r.value.navbar!==!1),f=K(),v=O(!1),m=b=>{v.value=typeof b=="boolean"?b:!v.value},i={x:0,y:0},u=b=>{i.x=b.changedTouches[0].clientX,i.y=b.changedTouches[0].clientY},d=b=>{const y=b.changedTouches[0].clientX-i.x,I=b.changedTouches[0].clientY-i.y;Math.abs(y)>Math.abs(I)&&Math.abs(y)>40&&m(y>0&&i.x<=80)},_=p(()=>[{"no-navbar":!t.value,"no-sidebar":!f.value.length,"sidebar-open":v.value},a.value.pageClass]);let h;fe(()=>{h=_e().afterEach(()=>{m(!1)})}),be(()=>{h()});const g=De(),$=g.resolve,L=g.pending;return(b,y)=>(o(),c("div",{class:F(["theme-container",s(_)]),onTouchstart:u,onTouchend:d},[s(t)?(o(),M(Jt,{key:0,onToggleSidebar:m},{before:T(()=>[w(b.$slots,"navbar-before")]),after:T(()=>[w(b.$slots,"navbar-after")]),_:3})):C("",!0),l("div",bs,[l("div",{class:"sidebar-mask",onClick:y[0]||(y[0]=I=>m(!1))}),l("div",gs,[k(fs,null,{top:T(()=>[w(b.$slots,"sidebar-top")]),bottom:T(()=>[w(b.$slots,"sidebar-bottom")]),_:3})]),s(a).home?(o(),M(Ke,{key:0})):(o(),M(de,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:s($),onBeforeLeave:s(L)},{default:T(()=>[k(ft,{key:s(e).path},{top:T(()=>[w(b.$slots,"page-top")]),bottom:T(()=>[w(b.$slots,"page-bottom")]),_:3})]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{$s as default};
