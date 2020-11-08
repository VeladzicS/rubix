const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "08e2784136872c01a26e24bb1ac01ecb";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
export const API_ENDPOINT_TOP_MOVIES = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const API_ENDPOINT_TOP_SHOWS = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const BACKDROP_SIZE = "w1280";

export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE };
