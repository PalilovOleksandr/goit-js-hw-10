import{f as y,i as h}from"./vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i=document.querySelector("input#datetime-picker"),a=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");a.addEventListener("click",v);let d,l;a.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){if(d=o[0],d<=new Date){a.disabled=!0,h.error({message:"Please choose a date in the future",backgroundColor:"#ef4040",position:"topRight",messageColor:"#ffffff"});return}else a.disabled=!1}};function v(){a.disabled=!0,i.disabled=!0,l=setInterval(()=>{const o=d-new Date;if(o<=0){clearInterval(l),i.disabled=!1;return}const{days:r,hours:c,minutes:n,seconds:e}=C(o);p.textContent=r,g.textContent=u(c),b.textContent=u(n),S.textContent=u(e)},1e3)}function C(o){const t=Math.floor(o/864e5),s=Math.floor(o%864e5/36e5),f=Math.floor(o%864e5%36e5/6e4),m=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:f,seconds:m}}function u(o){return String(o).padStart(2,"0")}y(i,q);
//# sourceMappingURL=1-timer-DdbWfXqF.js.map
