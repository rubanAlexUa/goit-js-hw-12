import{a as l,S as d,i as u}from"./assets/vendor-CNpXvI_o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function m(n){return l.get("https://pixabay.com/api/",{params:{key:"48844488-dc89d444e3fc14bdb2114dc7c",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(console.log(r),r.data.hits)).catch(r=>[])}function f(n,r){const o=document.querySelector(r),s=n.map(e=>`
        <li class="gallery-item">
            <a class='gallery-link' href="${e.largeImageURL}">
              <img class="li-img"
              src="${e.webformatURL}" 
              alt="${e.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${e.likes}</td><td>${e.views}</td><td>${e.comments}</td><td>${e.downloads}</tr>
                </table>   
                </div>
              </a>
            </li>
        `).join("");o.insertAdjacentHTML("afterbegin",s),new d(r+" a",{captionsData:"alt",captionDelay:250}).refresh()}const g=document.querySelector(".form-find-img"),a=document.querySelector(".message"),c=document.querySelector(".gallery"),p=document.querySelector(".enter-img");g.addEventListener("submit",n=>{n.preventDefault(),a.innerHTML="Wait, the image is loaded";const r=p.value.trim();console.log(r),c.innerHTML="",m(r).then(o=>{o.length>0?f(o,".gallery"):u.error({position:"topRight",message:`Sorry, there are no images matching your search ${r}. Please try again!`}),a.textContent=""}).catch(o=>{c.innerHTML=""})});
//# sourceMappingURL=index.js.map
