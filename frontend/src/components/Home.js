import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Topbar from './Topbar';
import MovieList from './MovieList'

class Home extends Component {
    state = {
        movies: [],
        isLoading: true
    };

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.onscroll = this.handleScroll;
        this.callApi()
            .then(res => this.setState({ movies: res.results }))
            .catch(err => console.log(err));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    callApi = async () => {
        const response = await fetch('/api/movies/1');
        const body = await response.json();
        console.log(body)
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    handleScroll() {
        // const { topMovies } = this.props;
        // if (!topMovies.isLoading) {
        //     let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
        //     if (percentageScrolled > .8) {
        //         const nextPage = this.state.currentPage + 1;
        //         this.props.getTopMovies(nextPage);
        //         this.setState({ currentPage: nextPage });
        //     }
        // }
    }

    render() {
        return (
            <>
                <CssBaseline />
                <Topbar />
                <div className="App">
                    <Link to='/details' >
                        <span>Details</span>
                    </Link>
                    <MovieList movies={this.state.movies} isLoading={this.state.isLoading} />
                </div>
            </>
        );
    }
}

export default withRouter(Home)