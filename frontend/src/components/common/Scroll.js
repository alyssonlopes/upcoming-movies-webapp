import React from 'react';

const handleScroll = () => {
    const { topMovies } = this.props;
    if (!topMovies.isLoading) {
        let percentageScrolled = getPercentageScrolledDown(window);
        if (percentageScrolled > .8) {
            const nextPage = this.state.currentPage + 1;
            this.props.getTopMovies(nextPage);
            this.setState({ currentPage: nextPage });
        }
    }
}

const getPercentageScrolledDown = (window) => {
    const pageHeight = window.document.documentElement.scrollHeight;
    const clientHeight = window.document.documentElement.clientHeight;
    const scrollPos = window.pageYOffset;
    const currentPosition = scrollPos + clientHeight;
    const percentageScrolled = currentPosition / pageHeight;
    return percentageScrolled;
}

const Scroll = ({ onPercentageScrolled, percentageScrolledExpected, children }) => {

    let percentageScrolled = getPercentageScrolledDown(window);
    if (percentageScrolled > .8) onPercentageScrolled && onPercentageScrolled()

    return children ? children : null;
}

export default Scroll;
