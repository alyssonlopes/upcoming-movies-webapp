import React, { Component } from 'react';
import { connect } from "react-redux";
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Back from './common/Back';
import Loading from './common/Loading';
import Grid from '@material-ui/core/Grid';

import * as movieActions from '../actions/movie.actions';

class MovieDetails extends Component {

    componentDidMount() {
        if(this.props.match.params.movie) {
            this.props.getMovieDetails(this.props.match.params.movie)
        }
    }

    render() {
        const { classes } = this.props;
        const movieDetails = this.props.movieDetails || {}
        const movie = movieDetails && movieDetails.response
        const genres = (movie && movie.genres) ? movie.genres.map(genre => genre.name).join(', ') : '';

        return (
            <>
                <CssBaseline />
                <div className={classes.root}>
                    <Back />
                    <Loading isLoading={movieDetails.isLoading} >
                        {movie && <>
                            <header className="App-header" style={styles.headerContent(movie.backdrop_path)}>
                            </header>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <img
                                        src={movie.poster_path}
                                        onError={(e) => { e.target.src = 'images/default-movie.png' }}
                                        alt={movie.title}
                                        width="300"
                                    />
                                </Grid>
                                <Grid item xs>
                                    <div>
                                        <h1>{movie.title}</h1>
                                        <h5>{genres}</h5>
                                        <p>{movie.overview}</p>
                                        <p>Release date: {movie.release_date}</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </>}
                    </Loading>
                </div>
            </>
        )
    }
}

const styles = {
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        backgroundSize: 'cover',
        paddingBottom: 500
    },
    headerContent: (backgroundUrl) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100%',
        minHeight: 400,
        color: 'white',
        padding: 10
    })
}

// redux
const mapStateToProps = (state) => {
    return {
        movieDetails: state.movieDetails
    }
}

const mapDispatchToProps = {
    getMovieDetails: movieActions.getMovieDetails
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetails)))
