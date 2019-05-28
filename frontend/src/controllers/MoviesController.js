class MoviesController {

    upcomingMovies = []
    searchedMovies = []
    currentPage = 0
    currentSearchPage = 0
    txSearch = null

    /**
     * Get Movies by page
     */
    async getMoviesByPage() {
        let movies
        if (this.txSearch != null) {
            this.currentSearchPage++
            const fetchedMovies = await searchMovies(this.txSearch, this.currentSearchPage) || []
            this.searchedMovies = [...this.searchedMovies, ...fetchedMovies]
            movies = this.searchedMovies
        } else {
            this.currentPage++
            const fetchedMovies = await fetchMovies(this.currentPage) || []
            this.upcomingMovies = [...this.upcomingMovies, ...fetchedMovies]
            movies = this.upcomingMovies
        }
        return movies
    }

   
}

const fetchMovies = async (page) => {
    try {
        const response = await fetch(`/api/movies/${page}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body.results
    } catch (error) {
        console.log(error)
    }
}

const searchMovies = async (query, page) => {
    try {
        const response = await fetch(`/api/search/movie/${query}/${page}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body.results
    } catch (error) {
        console.log(error)
    }
}

export default MoviesController