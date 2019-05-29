import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import * as movieActions from '../actions/movie.actions';

import Topbar from './Topbar';
import MovieList from './MovieList'

class Home extends Component {
    state = {
        movies: [],
        isLoading: false,
        isSearch: false
    }

    currentPage = 1
    currentSearchPage = 1

    searchText = null

    constructor(props) {
        super(props);

        this.searchTimeout = 0

        this.loadOneMorePage = this.loadOneMorePage.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.openMovieDetails = this.openMovieDetails.bind(this);
    }

    componentDidMount() {
        this.props.getUpcomingMovies(this.currentPage)
    }

    async loadOneMorePage() {
        if (!this.state.isLoading) {
            if (this.state.isSearch) {
                this.currentSearchPage++
                this.props.searchMovies(this.searchText, this.currentSearchPage)
            } else {
                this.currentPage++
                this.props.getUpcomingMovies(this.currentPage)
            }
        }
    }

    async doSearch(txt) {
        console.log(txt)
        this.searchText = txt

        if (this.searchTimeout)
            clearTimeout(this.searchTimeout)

        if (this.searchText) {
            const _this = this
            this.searchTimeout = setTimeout(async () => {
                if (_this.searchText.length > 2) {
                    _this.currentSearchPage = 1
                    _this.props.searchMovies(_this.searchText, _this.currentSearchPage)
                    _this.setState({ isSearch: true });
                }
            }, 500)
        } else {
            this.setState({ isSearch: false })
        }
    }

    openMovieDetails(movie) {
        this.props.history.push('/details/' + movie.id)
    }

    getCurrentMovies() {
        return this.state.isSearch ? this.props.movieSearch : this.props.upcomingMovies
    }

    render() {
        const currentMovies = this.getCurrentMovies()
        const movies = currentMovies.response && currentMovies.response.results

        return (
            <>
                <CssBaseline />
                <Topbar
                    onTypingSearch={this.doSearch}
                />
                <div className="App">
                    <Typography style={styles.title} variant="h6" align="left" paragraph>
                        {this.state.isSearch ? "Searched movies:" : "Upcoming movies:"}
                    </Typography>
                    <MovieList
                        movies={movies}
                        isLoading={currentMovies && currentMovies.isLoading}
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

const mapStateToProps = (state) => {
    return {
        upcomingMovies: state.upcomingMovies,
        movieSearch: state.movieSearch
    }
}

const mapDispatchToProps = {
    getUpcomingMovies: movieActions.getUpcomingMovies,
    searchMovies: movieActions.searchMovies
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))