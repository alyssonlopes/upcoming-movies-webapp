import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Topbar from './Topbar';

class Home extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ movies: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/search/movie/rock/1');
        const body = await response.json();
        console.log(body)
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <>
                <CssBaseline />
                <Topbar />
                <div className="App">
                    <Link to='/details' >
                        <span>Details</span>
                    </Link>
                    {this.state.movies.map(movie => {
                        return (
                            <p>{JSON.stringify(movie)}</p>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default withRouter(Home)