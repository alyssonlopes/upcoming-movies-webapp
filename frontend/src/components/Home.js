import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Topbar from './Topbar';
import MovieList from './MovieList'
import Scroll from './common/Scroll'

class Home extends Component {
    state = {
        movies: [],
        isLoading: false
    };

    upcomingMovies = []
    searchedMovies = []
    currentPage = 0
    currentSearchPage = 0
    txSearch = null

    constructor(props) {
        super(props);
        this.loadOneMorePage = this.loadOneMorePage.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.openMovieDetails = this.openMovieDetails.bind(this);
    }

    componentDidMount() {
        this.loadOneMorePage()
    }

    fetchMovies = async (page) => {
        try {
            const response = await fetch(`/api/movies/${page}`);
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            return body.results
        } catch (error) {
            console.log(error)
        }
    };

    searchMovies = async (query, page) => {
        try {
            const response = await fetch(`/api/search/movie/${query}/${page}`);
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            return body.results
        } catch (error) {
            console.log(error)
        }
    };

    async loadOneMorePage() {
        if (!this.state.isLoading) {
            this.setState({ isLoading: true });
            let movies
            if (this.txSearch) {
                this.currentSearchPage = this.currentSearchPage + 1;
                const fetchedMovies = await this.searchMovies(this.txSearch, this.currentSearchPage) || []
                this.searchedMovies = [...this.searchedMovies, ...fetchedMovies]
                movies = this.searchedMovies
            } else {
                this.currentPage = this.currentPage + 1;
                const fetchedMovies = await this.fetchMovies(this.currentPage) || []
                this.upcomingMovies = [...this.upcomingMovies, ...fetchedMovies]
                movies = this.upcomingMovies
            }
            this.setState({ movies: movies, isLoading: false });
        }
    }

    async onSearch(txt) {
        console.log(txt)
        if (txt.length > 2) {
            if (!this.state.isLoading) {
                this.setState({ isLoading: true });
                this.currentSearchPage = !this.txSearch ? 1 : this.currentSearchPage + 1;

                const fetchedMovies = await this.searchMovies(txt, this.currentSearchPage) || []
                this.searchedMovies = [...this.searchedMovies, ...fetchedMovies]
                this.setState({ movies: this.searchedMovies, isLoading: false });
            }
        }
        this.txSearch = txt
        if (!txt) this.setState({ movies: this.upcomingMovies });
    }

    openMovieDetails(movie) {
        console.log(movie)
        this.props.history.push('/details/' + movie.id)
    }

    render() {
        return (
            <>
                <Scroll
                    onPercentageScrolled={this.loadOneMorePage}
                    percentageScrolledExpected={.8}
                />
                <CssBaseline />
                <Topbar onSearch={this.onSearch} />
                <div className="App">
                    <Typography style={styles.title} variant="h6" align="left" paragraph>
                        {this.txSearch ? "Movies found:" : "Upcoming movies:"}
                    </Typography>
                    <MovieList
                        movies={this.state.movies}
                        isLoading={this.state.isLoading}
                        onItemSelected={this.openMovieDetails}
                    />
                </div>
            </>
        );
    }
}

const styles = {
    title: {
        marginLeft: 20,
        marginTop: 20
    }
}

export default withRouter(Home)