import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';
import Loading from './common/Loading';

const styles = {
    root: {
        flexGrow: 1,
        padding: "10px"
    }
}
const MovieList = ({ movies, isLoading, classes, onItemSelected }) => {
    const movieColumns = movies ? movies.map(movie => (
        <Grid item style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3} >
            <MovieCard movie={movie} onItemClicked={m => onItemSelected(m)} />
        </Grid>
    )) : null;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {movieColumns}
                <Grid item xs={12}>
                    <Loading isLoading={isLoading} />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(MovieList);
