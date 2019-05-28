import { Component } from 'react';

class Scroll extends Component {

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.onscroll = this.handleScroll;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let percentageScrolled = getPercentageScrolledDown(window);
        if (percentageScrolled > this.props.percentageScrolledExpected)
            this.props.onPercentageScrolled && this.props.onPercentageScrolled()
    }

    render() {
        const { children } = this.props
        return children ? children : null;
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

export default Scroll;
