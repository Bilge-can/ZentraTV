import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

const client = axios.create({
    baseURL: BASE,
    params: { api_key: API_KEY, language: 'en-US' }
});

export async function fetchTrending() {
    const res = await client.get('/trending/movie/day');
    return res.data.results;
}

export async function fetchTopRated() {
    const res = await client.get('/movie/top_rated');
    return res.data.results;
}

export function posterUrl(path){
    return path ? `${IMG_BASE}${path}` : '/placeholder-poster.png';
}

export async function fetchMovieDetails(id) {
    const res = await client.get(`/movie/${id}`);
    return res.data;
}
