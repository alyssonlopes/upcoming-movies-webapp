import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Topbar from './Topbar';
import MovieList from './MovieList'

import MovieController from '../controllers/MoviesController'

class Home extends Component {
    state = {
        movies: [],
        isLoading: false
    }

    moviesController = new MovieController()

    constructor(props) {
        super(props);
        this.loadOneMorePage = this.loadOneMorePage.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.openMovieDetails = this.openMovieDetails.bind(this);
    }

    componentDidMount() {
        this.loadOneMorePage()
    }

    async loadOneMorePage() {
        if (!this.state.isLoading) {
            this.setState({ isLoading: true });
            const movies = await this.moviesController.getMoviesByPage()
            this.setState({ movies: movies, isLoading: false })
        }
    }

    async doSearch(txt) {
        console.log(txt)
        this.moviesController.txSearch = txt

        if (txt.length > 2) {
            this.loadOneMorePage()
        } else if (!txt) {
            this.moviesController.currentSearchPage = 0
            this.moviesController.searchedMovies = []
            this.setState({ movies: this.moviesController.upcomingMovies });
        }
    }

    openMovieDetails(movie) {
        console.log(movie)
        this.props.history.push('/details/' + movie.id)
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Topbar
                    onTypingSearch={this.doSearch}
                />
                <div className="App">
                    <Typography style={styles.title} variant="h6" align="left" paragraph>
                        {this.txSearch ? "Movies found:" : "Upcoming movies:"}
                    </Typography>
                    <MovieList
                        movies={this.state.movies}
                        isLoading={this.state.isLoading}
                        onItemSelected={this.openMovieDetails}
                        loadOneMorePage={this.loadOneMorePage}
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