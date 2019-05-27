import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import Loading from './common/Loading';

const styles = {
    root: {
        flexGrow: 1,
        padding: "10px"
    },
    movieColumn: {
        // marginBottom: 20
    }
}
const MovieList = ({ movies, isLoading, classes }) => {
    const movieColumns = movies ? movies.map(movie => (
        <Grid item style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
            <MovieCard movie={movie} />
        </Grid>
    )) : null;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {movieColumns}
                <Loading isLoading={isLoading} />
            </Grid>
        </div>
    );
}

export default withStyles(styles)(MovieList);
