
const apiConfig = {
    base: 'https://api.themoviedb.org/3/',
    apiKey: '012221f6f2f19b76150fb8c79d712a76',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;