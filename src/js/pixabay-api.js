import axios from 'axios';

export async function getImage(imgInfo, page) {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '48844488-dc89d444e3fc14bdb2114dc7c',
      q: imgInfo,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page,
    },
  });
  return data;
}
