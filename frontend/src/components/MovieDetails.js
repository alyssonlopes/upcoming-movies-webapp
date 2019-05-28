import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Back from './common/Back';
import Loading from './common/Loading';
import Grid from '@material-ui/core/Grid';

class MovieDetails extends Component {

    state = {
        isLoading: false,
        movie: null
    }

    constructor(props) {
        super(props)
        this.fetchMovieDetails = this.fetchMovieDetails.bind(this)
    }

    componentDidMount() {
        console.log(this.props.match.params.movie)
        this.fetchMovieDetails(this.props.match.params.movie)
    }

    async fetchMovieDetails(movieId) {
        this.setState({ isLoading: true })
        let movie
        try {
            const response = await fetch(`/api/movie/${movieId}`);
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            console.log(body)
            movie = body
        } catch (error) {
            console.log(error)
        }
        this.setState({ isLoading: false, movie })
    }

    render() {

        const { classes } = this.props;
        const { movie } = this.state
        const genres = (movie && movie.genres) ? movie.genres.map(genre => genre.name).join(', ') : '';

        return (
            <>
                <CssBaseline />
                <div className={classes.root}>
                    <Back />
                    <Loading isLoading={this.state.isLoading} >
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

export default withRouter(withStyles(styles)(MovieDetails))
