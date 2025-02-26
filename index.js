import{a as h,S as g,i as l}from"./assets/vendor-hwdYKDic.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function m(r,e){const{data:o}=await h.get("https://pixabay.com/api/",{params:{key:"48844488-dc89d444e3fc14bdb2114dc7c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:e}});return o}const y=document.querySelector(".gallery");function f(r){const e=r.map(o=>`
        <li class="gallery-item">
            <a class='gallery-link' href="${o.largeImageURL}">
              <img class="li-img"
              src="${o.webformatURL}" 
              alt="${o.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${o.likes}</td><td>${o.views}</td><td>${o.comments}</td><td>${o.downloads}</tr>
                </table>   
                </div>
              </a>
            </li>
        `).join("");y.insertAdjacentHTML("beforeend",e),p.refresh()}const p=new g(".gallery a",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".form-find-img"),c=document.querySelector(".message"),b=document.querySelector(".gallery"),v=document.querySelector(".enter-img"),i=document.querySelector(".more");let a=1,n="";L.addEventListener("submit",async r=>{if(r.preventDefault(),c.innerHTML="Wait, the image is loaded",n=v.value.trim(),!!n){a=1,b.innerHTML="",i.classList.add("hidden");try{const e=await m(n,a);if(e.hits.length===0){l.error({position:"topRight",message:`Sorry, there are no images matching your search "${n}". Please try again!`});return}f(e.hits),a<Math.ceil(e.totalHits/40)&&i.classList.remove("hidden")}catch(e){l.error({position:"topRight",message:e.message}),i.classList.add("hidden")}finally{c.textContent=""}}});i.addEventListener("click",w);async function w(){a++,c.innerHTML="Wait, the image is loaded",i.disabled=!0;try{const r=await m(n,a);f(r.hits),S(),a>=Math.ceil(r.totalHits/40)&&(i.classList.add("hidden"),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){l.error({position:"topRight",message:r.message}),i.classList.add("hidden")}finally{c.textContent="",i.disabled=!1}}function S(){const e=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
