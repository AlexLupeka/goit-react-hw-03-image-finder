const API_KEY = '30762289-c4fbd74d7c9928359623371dc';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImages };

export default api;
