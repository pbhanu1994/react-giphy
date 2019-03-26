import http from "./httpServices";

const trendingApiEndPoint =
  process.env.REACT_APP_API_URL + process.env.REACT_APP_TRENDING;

const searchApiEndPoint =
  process.env.REACT_APP_API_URL + process.env.REACT_APP_SEARCH;

const apiKey = process.env.REACT_APP_API_KEY;

export function trendingGiphs() {
  return http.get(`${trendingApiEndPoint}?api_key=${apiKey}`);
}

export function loadMoreTrendingGiphs(offset) {
  return http.get(`${trendingApiEndPoint}?api_key=${apiKey}&offset=${offset}`);
}

export function searchGiphs(searchTerm) {
  return http.get(`${searchApiEndPoint}?api_key=${apiKey}&q=${searchTerm}`);
}

export function loadMoreSearchGiphs(searchTerm, offset) {
  return http.get(
    `${searchApiEndPoint}?api_key=${apiKey}&q=${searchTerm}&offset=${offset}`
  );
}
