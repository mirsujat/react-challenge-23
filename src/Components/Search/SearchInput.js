import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        const result = {};
        this.state = { result };
    }

componentDidMount(){
    fetch("https://ip.nf/me.json")
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res})); 
};

    render() {
        console.log(" Return result", this.state.result);
        console.log("Return IP", this.state.result.ip);
        
        return (
            <form>
                <input type="text" />
                <input type="submit" /> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>Your IP Address: {this.state.result.ip}</p>
            </form>
        );
    }
}

export default SearchInput;