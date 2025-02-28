import{a as f,S as g,i as c}from"./assets/vendor-hwdYKDic.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function m(r,e){const{data:s}=await f.get("https://pixabay.com/api/",{params:{key:"48844488-dc89d444e3fc14bdb2114dc7c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:e}});return s}const y=document.querySelector(".gallery");function h(r){const e=r.map(s=>`
        <li class="gallery-item">
            <a class='gallery-link' href="${s.largeImageURL}">
              <img class="li-img"
              src="${s.webformatURL}" 
              alt="${s.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${s.likes}</td><td>${s.views}</td><td>${s.comments}</td><td>${s.downloads}</tr>
                </table>   
                </div>
              </a>
            </li>
        `).join("");y.insertAdjacentHTML("beforeend",e),p.refresh()}const p=new g(".gallery a",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".form-find-img"),b=document.querySelector(".gallery"),v=document.querySelector(".enter-img"),i=document.querySelector(".more"),l=document.querySelector(".loader");let a=1,n="";L.addEventListener("submit",async r=>{if(r.preventDefault(),l.innerHTML="Wait, the image is loaded",n=v.value.trim(),!!n){a=1,b.innerHTML="",i.classList.add("hidden"),l.classList.remove("hidden");try{const e=await m(n,a);if(e.hits.length===0){c.error({position:"topRight",message:`Sorry, there are no images matching your search "${n}". Please try again!`});return}h(e.hits),a<Math.ceil(e.totalHits/40)&&i.classList.remove("hidden")}catch(e){c.error({position:"topRight",message:e.message}),i.classList.add("hidden")}finally{l.classList.add("hidden")}}});i.addEventListener("click",w);async function w(){a++,i.disabled=!0,l.classList.remove("hidden");try{const r=await m(n,a);h(r.hits),S(),a>=Math.ceil(r.totalHits/40)&&(i.classList.add("hidden"),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){c.error({position:"topRight",message:r.message}),i.classList.add("hidden")}finally{l.classList.add("hidden"),i.disabled=!1}}function S(){const e=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
