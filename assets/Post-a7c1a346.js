import{e as P,g as m,h,j as b,o as i,c as u,b as l,a as w,w as x,d as B,u as p,k as C,i as D,v as E,F as _,l as F,R as N,t as V}from"./index-aea4c5b1.js";import{r as g,g as y,u as k}from"./index.esm2017-0720249d.js";import{u as T}from"./movieInfo-d2007fb9.js";const q=l("h1",null,"動画投稿",-1),A={id:"breadcrumbs"},R=l("li",null," 動画投稿 ",-1),U={key:0},j=l("h2",null,"以下の動画を受け付けております",-1),H=P({__name:"Post",setup(z){const c=T(),d=m(()=>c.movieInfoList),L=m(()=>c.isMovieListEmpty),r=h(!1),s=h(null),S=async()=>{if(console.log("handle",s),s.value){console.log("selected files",s.value.files);var e=s.value.files;if(e){for(var n=e.length,o=[],t=0;t<n;t++){var a=e[t],v="Folder1/"+a.name,f=g(y(),v);o.push(k(f,a)),console.log("uploads",a),r.value=!0}Promise.all(o).then(function(){alert("アップロード完了")}).catch(M=>{}).finally(()=>{r.value=!1})}}};let I=[];return c.prepareMovieInfoList().then(e=>{const n=d.value;console.log("Prepareの方",n.size);for(const[o,t]of n)I.push(t.name),console.log("D",o,t)}).catch(e=>{console.log("error in prepare ",e)}),b(()=>{var e=document.querySelector("#upload");console.log("form:",e),e==null||e.addEventListener("submit",function(n){n.preventDefault();var o=e==null?void 0:e.querySelector("input");if(console.log("imgs:",o,"files:",o==null?void 0:o.files),o&&o.files){var t=[];for(var a of o.files){var v="folder1/"+a.name,f=g(y(),v);t.push(k(f,a)),console.log("uploads",a)}Promise.all(t).then(function(){alert("アップロード完了")}).catch(M=>{})}})}),(e,n)=>(i(),u(_,null,[q,l("nav",A,[l("ul",null,[l("li",null,[w(p(N),{to:{name:"AppTop"}},{default:x(()=>[B(" TOP ")]),_:1})]),R])]),l("section",null,[l("input",{ref_key:"rfile",ref:s,onChange:S,type:"file",accept:"video/*"},null,544),r.value?(i(),u("h2",U,"アップロード中・・・")):C("",!0)]),D(l("section",null,[j,l("div",null,[l("ul",null,[(i(!0),u(_,null,F(p(d),([o,t])=>(i(),u("li",{key:o},V(t.name),1))),128))])])],512),[[E,!p(L)&&!r.value]])],64))}});export{H as default};