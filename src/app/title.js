import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'andy', date2: new Date() };
    }
    render() {
        return <h1>hello, {this.props.theme}</h1>;
    }
}

export default Title;
