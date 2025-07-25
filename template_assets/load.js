function loadem(){
if (localStorage.getItem("EPDN")) { Array.from(document.getElementsByClassName("EPDN")).forEach((index) => { index.innerHTML = localStorage.getItem("EPDN") }) }; 
if (localStorage.getItem("EPname")) { Array.from(document.getElementsByClassName("EPname")).forEach((index) => { index.innerHTML = localStorage.getItem("EPname") }) }; 
if (localStorage.getItem("WxC")) { Array.from(document.getElementsByClassName("WxC")).forEach((index) => { index.innerHTML = localStorage.getItem("WxC") }) } ;
if (localStorage.getItem("PW")) { Array.from(document.getElementsByClassName("PW")).forEach((index) => { index.innerHTML = localStorage.getItem("PW") }) } ;
if (localStorage.getItem("login")) { Array.from(document.getElementsByClassName("login")).forEach((index) => { index.innerHTML = localStorage.getItem("login") }) } ;
if (localStorage.getItem("Queue")) { Array.from(document.getElementsByClassName("Queue")).forEach((index) => { index.innerHTML = localStorage.getItem("Queue") }) } ;
if (localStorage.getItem("Team")) { Array.from(document.getElementsByClassName("Team")).forEach((index) => { index.innerHTML = localStorage.getItem("Team") }) } ;
if (localStorage.getItem("POD")) { Array.from(document.getElementsByClassName("POD")).forEach((index) => { index.innerHTML = localStorage.getItem("POD") }) } ;
// if (sessionStorage.getItem("EPDN")) { Array.from(document.getElementsByClassName("EPDN")).forEach((index) => { index.innerHTML = sessionStorage.getItem("EPDN") }) }; 
// if (sessionStorage.getItem("EPname")) { Array.from(document.getElementsByClassName("EPname")).forEach((index) => { index.innerHTML = sessionStorage.getItem("EPname") }) }; 
// if (sessionStorage.getItem("WxC")) { Array.from(document.getElementsByClassName("WxC")).forEach((index) => { index.innerHTML = sessionStorage.getItem("WxC") }) } ;
// if (sessionStorage.getItem("PW")) { Array.from(document.getElementsByClassName("PW")).forEach((index) => { index.innerHTML = sessionStorage.getItem("PW") }) } ;
// if (sessionStorage.getItem("login")) { Array.from(document.getElementsByClassName("login")).forEach((index) => { index.innerHTML = sessionStorage.getItem("login") }) } ;
// if (sessionStorage.getItem("Queue")) { Array.from(document.getElementsByClassName("Queue")).forEach((index) => { index.innerHTML = sessionStorage.getItem("Queue") }) } ;
// if (sessionStorage.getItem("Team")) { Array.from(document.getElementsByClassName("Team")).forEach((index) => { index.innerHTML = sessionStorage.getItem("Team") }) } ;
// if (sessionStorage.getItem("POD")) { Array.from(document.getElementsByClassName("POD")).forEach((index) => { index.innerHTML = sessionStorage.getItem("POD") }) } ;
[].forEach.call(document.getElementsByTagName("copy"),function(el){el.addEventListener("click",function(event){
    if(event.target.tagName == "COPY"){navigator.clipboard.writeText(event.target.innerText)}
if(event.target.tagName == "W"){navigator.clipboard.writeText(event.target.parentNode.innerText)}
})})
}loadem()