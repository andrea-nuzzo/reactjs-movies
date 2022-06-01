import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {

    // https://api.themoviedb.org/3/movie/movieType[type]
    getMoviesList: (type, params) =>{
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },

    // https://api.themoviedb.org/3/tv/tvType[type]
    getTvList: (type, params) =>{
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },

    //https://api.themoviedb.org/3/category[cate]/id/videos
    getVideos: (cate, id) =>{
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },

    //https://api.themoviedb.org/3/search/category[cate]
    search: (cate, params) =>{
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },

    //https://api.themoviedb.org/3/category[cate]/id
    detail: (cate, id, params) =>{
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },

    //https://api.themoviedb.org/3/category[cate]/id/credits
    credits: (cate, id) =>{
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },

     //https://api.themoviedb.org/3/category[cate]/id/similar
     similar: (cate, id) =>{
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;