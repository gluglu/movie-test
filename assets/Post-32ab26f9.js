import{d as u,s as r,c,b as o,a as d,w as p,g as m,F as f,x as _,o as g,e as v,R as h}from"./index-2a250b2a.js";import{r as b,g as x,u as y}from"./index.esm2017-f8c39613.js";const B=o("h1",null,"動画受付画面",-1),N={id:"breadcrumbs"},P=o("li",null," 動画受付画面 ",-1),S=_('<section><button id="buttonPost">動画をアップロードする</button></section><section><form><input type="file" value="動画選択"><input type="submit" value="アップロード"></form></section><section><h2>以下の動画を受け付けております</h2><div><ul><li>douga1.mp4</li><li>douga2.mp4</li><li>douga3.mp4</li><li>douga4.mp4</li><li>douga5.mp4</li></ul></div></section>',3),w=u({__name:"Post",setup(V){return r(()=>{var e=document.querySelector("form");console.log("form:",e),e==null||e.addEventListener("submit",function(s){s.preventDefault();var t=e==null?void 0:e.querySelector("input");if(console.log("imgs:",t,"files:",t==null?void 0:t.files),t&&t.files){var n=[];for(var a of t.files){var l="folder1/"+a.name,i=b(x(),l);n.push(y(i,a)),console.log("uploads",a)}Promise.all(n).then(function(){alert("アップロード完了")}).catch(k=>{})}})}),(e,s)=>(g(),c(f,null,[B,o("nav",N,[o("ul",null,[o("li",null,[d(m(h),{to:{name:"AppTop"}},{default:p(()=>[v(" TOP ")]),_:1})]),P])]),S],64))}});export{w as default};