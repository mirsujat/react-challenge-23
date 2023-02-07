import React, { Component } from 'react';

class SearchIp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            searchTerm: "",
            result: "",
            loading: true,
            
        };
    }



    componentDidMount() {
        fetch("https://ip.nf/me.json")
            .then(res => res.json())
            .then(res => res.ip)
            .then(res => this.setState({
                result: res,
                loading: false,
                
            }))
    }

    componentDidUpdate(prevProps, prevState){
        const {searchTerm} = this.state;
        if(searchTerm !== prevState.searchTerm && searchTerm.toString(searchTerm).length >= 15){
            this.fetch(this.state.searchTerm);
        }
    }


    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({ searchTerm: value })
    }

    fetch = (param) =>{
        fetch(`https://ip.nf/${param}.json`)
            .then(res => res.json())
            .then(res => res.ip)
            .then(res => this.setState({
                result: res,
                loading: false,
                
            }))

    } 


    render() {

        console.log("ip Length:", this.state.result.toString(this.state.result.ip).length);

        let content;
        if(this.state.loading === false){
            content = <span>{this.state.result.ip}</span>
        }

        return (
            <div>
                <input 
                type="text" 
                value={this.state.searchTerm}
                searchterm={this.state.searchTerm}
                onChange={this.handleChange}
                 />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>Your IP Address: {content}</div>
            </div>
        );
    }
}

export default SearchIp;