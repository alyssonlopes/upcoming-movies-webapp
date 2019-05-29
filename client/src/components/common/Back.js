import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Link, withRouter } from 'react-router-dom';

const styles = _ => ({
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  }
});

class Back extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" noWrap>
              <Link className={classes.link} to={{ pathname: "/" }}>
                <KeyboardArrowLeft />
                <span className={classes.text}>Back</span>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Back));