import axios from 'axios';

const api_key = 'b8ef17bd40019759c9b93654e682a1a0';

const defaultArgs = {
    api_key,
    language: 'en-US',
    page: 1
}

const MovieDB = axios.create({
     baseURL: 'https://api.themoviedb.org/3'
});

export const discoverShows = () => MovieDB.get('/discover/tv', {
    params: { ...defaultArgs }
});

export const searchShows = showName => MovieDB.get('/search/tv', {
    params: { ...defaultArgs, query: showName }
});

export const getShow = showId => MovieDB.get(`/tv/${showId}`, {
    params: { ...defaultArgs }
});

export const getRecommendations = showId => MovieDB.get(`/tv/${showId}/recommendations`, {
    params: { ...defaultArgs }
});