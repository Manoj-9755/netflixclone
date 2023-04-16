const Api_key="d3fea7a29fc7ec882b068757d050ccff";
const requests={
    fetchtrending:`/trending/all/week?api_key=${Api_key}&language=en-Us`,
    fetchnetflixoriginals:`/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchttoprated:`/movie/top_rated?api_key=${Api_key}&language=en-Us`,
    fetchtactionmovies:`/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchcomedymovie:`/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchhorrormovie:`/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchtromancemovie:`/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchtdocumentaries:`/discover/movie?api_key=${Api_key}&with_genres=99`,
}
export  default requests;