import"./styles/main.css";import"aos/dist/aos.css";import AOS from"aos";async function loadModule(){try{await import("./another-module.js")}catch(e){}}AOS.init(),document.addEventListener("DOMContentLoaded",(()=>{AOS.init()})),loadModule();const hamburger=document.getElementById("hamburger"),close=document.getElementById("close"),navMenu=document.getElementById("nav-menu"),ltp=document.getElementById("ltp");hamburger.addEventListener("click",(()=>{"block"===navMenu.style.display?navMenu.style.display="none":(navMenu.style.display="block",hamburger.style.display="none",close.style.display="block",ltp.style.display="none")})),close.addEventListener("click",(()=>{navMenu.style.display="none",hamburger.style.display="block",close.style.display="none",ltp.style.display="flex"}));const search=document.querySelectorAll(".search"),searchClose=document.querySelector(".search-close"),searchContainer=document.querySelector(".search-container");for(let e=0;e<search.length;e++)search[e].addEventListener("click",(()=>{"flex"===searchContainer.style.display?searchContainer.style.display="none":searchContainer.style.display="flex",navMenu.style.display="none"}));searchClose.addEventListener("click",(()=>{searchContainer.style.display="none",window.matchMedia("(min-width: 1024px)").matches?navMenu.style.display="none":navMenu.style.display="block"}));