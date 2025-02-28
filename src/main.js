import { getImage } from './js/pixabay-api.js';
import { make } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form-find-img');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.enter-img');
const btnLoadMore = document.querySelector('.more');
const loader = document.querySelector('.loader'); // Додаємо лоадер
let currentPage = 1;
let searchQuery = '';

form.addEventListener('submit', async e => {
  e.preventDefault();
  loader.innerHTML = 'Wait, the image is loaded';

  searchQuery = input.value.trim();
  if (!searchQuery) return; // Якщо запит порожній, лоадер не буде показуватися

  currentPage = 1;
  gallery.innerHTML = '';

  btnLoadMore.classList.add('hidden');
  loader.classList.remove('hidden'); // Показуємо лоадер

  try {
    const images = await getImage(searchQuery, currentPage);
    if (images.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message: `Sorry, there are no images matching your search "${searchQuery}". Please try again!`,
      });
      return;
    }
    make(images.hits);

    if (currentPage < Math.ceil(images.totalHits / 40)) {
      btnLoadMore.classList.remove('hidden');
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: error.message,
    });
    btnLoadMore.classList.add('hidden');
  } finally {
    loader.classList.add('hidden'); // Ховаємо лоадер
  }
});

btnLoadMore.addEventListener('click', loadMore);

async function loadMore() {
  currentPage++;
  btnLoadMore.disabled = true;
  loader.classList.remove('hidden'); // Показуємо лоадер при натисканні на "Load More"

  try {
    const images = await getImage(searchQuery, currentPage);
    make(images.hits);
    smoothScroll();

    if (currentPage >= Math.ceil(images.totalHits / 40)) {
      btnLoadMore.classList.add('hidden');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: error.message,
    });
    btnLoadMore.classList.add('hidden');
  } finally {
    loader.classList.add('hidden'); // Ховаємо лоадер після завантаження
    btnLoadMore.disabled = false;
  }
}

function smoothScroll() {
  const elem = document.querySelector('.gallery');
  const rect = elem.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: rect.height * 2,
    behavior: 'smooth',
  });
}
