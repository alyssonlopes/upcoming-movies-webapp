import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Back from './common/Back';

import logo from '../logo.svg';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        marginTop: 10,
        paddingBottom: 500
    }
})

class Details extends Component {
    render() {

        const { classes } = this.props;

        return (
            <>
                <CssBaseline />
                <div className={classes.root}>
                    <Back />
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </>
        )
    }
}

export default withRouter(withStyles(styles)(Details))
