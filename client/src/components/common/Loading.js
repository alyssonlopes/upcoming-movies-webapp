import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = {
    refreshStyle: {
        position: 'relative',
        display: 'block',
        margin: '0 auto'
    }
};

const LoaderComponent = ({ isLoading, children }) => {
    if (isLoading) {
        return (
            <CircularProgress
                style={styles.refreshStyle}
                size={50}
            />
        );
    }
    return children ? children : null;
}

export default LoaderComponent;
