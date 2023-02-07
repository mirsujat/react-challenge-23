import React, { Component } from 'react';

class SearchIp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            searchTerm: "",
            result: "",
            loading: true,
            ip: "",
            
        };
    }



    componentDidMount() {
        this.fetch("me");
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.searchTerm !== prevState.searchTerm ){
            this.fetch(this.state.searchTerm);
        }
    }


    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({ searchTerm: value })
    }

    fetch = (param) =>{
        if(param.length >= 14 || param === "me"){
        fetch(`https://ip.nf/${param}.json`)
            .then(res => res.json())
            .then(res => res.ip)
            .then(res => this.setState({
                result: res,
                loading: false,
                ip: res.ip,
            }))
        }

    } 


    render() {

        console.log("ip Length:", this.state.ip.length);
        console.log("searchterm Length: ", this.state.searchTerm.length);
        let content;
        if(this.state.loading === true){
            content= <span>Loading...</span>
        }
        if(this.state.loading === false){
            content = <span>{this.state.result.ip}</span>
        }

        return (
            <div>
                <input 
                type="text" 
                value={this.state.searchTerm}
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