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
        // height: 470,
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
        // const subtitle = this.state.isMouseOver ? movie.overview : null;

        return (
            <Card
                style={styles.card}
            >
                <CardMedia
                    style={styles.cardMedia}
                    title={movie.title}
                    alt={movie.title}
                    component="img"
                    image={movie.poster_path}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                    </Typography>
                </CardContent>
                {/* <img style={styles.bgImage} src={movie.poster_path} alt="" /> */}
            </Card>
        );
    }
}

export default MovieCard
