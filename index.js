import"./assets/hero-CU7pXuz9.js";const t=document.querySelectorAll(".cont-second img");let e=0,s=!1;function c(){e<t.length&&!s?(t[e].classList.add("show"),e++,setTimeout(c,500)):e===t.length&&!s&&(s=!0,e=0,setTimeout(r,3e3))}function r(){e<t.length?(t[e].classList.remove("show"),t[e].classList.add("hide"),e++,setTimeout(r,500)):(s=!1,e=0,t.forEach(o=>o.classList.remove("hide")),setTimeout(c,1e3))}setTimeout(c,0);const m=document.querySelectorAll(".link-products"),i=document.querySelector(".cart-item"),l=document.querySelector(".img-cart");localStorage.getItem("user_id")||(localStorage.setItem("count_buy",0),localStorage.setItem("user_id",u()));let n=parseInt(localStorage.getItem("count_buy"))||0;i.textContent=n;function u(){return"user_"+Math.random().toString(36).substring(2,15)+Date.now()}m.forEach(o=>{o.addEventListener("click",d=>{d.preventDefault(),n++,i.textContent=n,localStorage.setItem("count_buy",n),a.style.display="block",setTimeout(y,100)})});var a=document.getElementById("myModal"),g=document.getElementsByClassName("close")[0];g.addEventListener("click",()=>{a.style.display="none"});window.addEventListener("click",o=>{o.target==a&&(a.style.display="none")});function y(){l.classList.add("move")}l.addEventListener("transitionend",()=>{l.classList.remove("move")});
//# sourceMappingURL=index.js.map
