(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelectorAll(".link");s.forEach(i=>{i.addEventListener("click",o=>{o.preventDefault();const n=i.getAttribute("href"),r=document.querySelector(n);if(r){const e=document.getElementById("header").offsetHeight,t=r.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:t,behavior:"smooth"})}})});document.getElementById("hero").addEventListener("click",i=>{i.preventDefault();const o=document.getElementById("hero").getAttribute("href"),n=document.querySelector(o);if(n){const r=document.getElementById("header").offsetHeight,e=n.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:e,behavior:"smooth"})}});
//# sourceMappingURL=hero-Cy9SMv8w.js.map
