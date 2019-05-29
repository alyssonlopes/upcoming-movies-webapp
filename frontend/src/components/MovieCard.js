import React, { Component } from 'react';
// import { Card, CardTitle, CardMedia } from 'material-ui';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
    cardMedia: {
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        overflow: 'hidden',
        maxWidth: 345
    },
    bgImage: {
        width: '100%'
    },
    title: {
        fontSize: 14,
    }
};

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseOver: false
        };
    }

    render() {
        const { movie } = this.props;
        return (
            <Card
                style={styles.card}
                onClick={_ => this.props.onItemClicked(movie)}
            >
                <CardMedia
                    style={styles.cardMedia}
                    title={movie.title}
                    alt={movie.title}
                    component="img"
                    src={
                        // 'images/default-movie.png' 
                        movie.poster_path
                    }
                    onError={(e) => { e.target.src = 'images/default-movie.png' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {movie.title}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default MovieCard
