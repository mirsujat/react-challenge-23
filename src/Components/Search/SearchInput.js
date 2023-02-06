import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            result: "",
            searchTerm: "me", 
            };
    }

componentDidMount(){
    const {searchTerm} = this.state;
    const regex = new RegExp("\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b");
    if(searchTerm === "me" || regex.test(searchTerm)){
            fetch(`https://ip.nf/${searchTerm}.json`)
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res})); 
    }else{
        return;
    }
    
};

shouldComponentUpdate(nextProps, nextState){
    const {searchTerm} = this.state;
    const regex = new RegExp(`/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/`);       
       if(searchTerm !== nextState.searchTerm && regex.test(searchTerm)){
         fetch(`https://ip.nf/${searchTerm}.json`)
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res})); 
       }else{
            return false;
       }
      
 
}


    handleChange = (e) =>{
        const { value} = e.target;
        this.setState({ searchTerm : value });
    }

    render() {
        console.log(" Return result", this.state.result);
        console.log("Return IP length:", this.state.result.toString(this.state.result.ip).length);
        console.log("searchTerm:", this.state.searchTerm);
        
        return (
            <form>
                <input 
                type="text" 
                name="searchTerm"
                value={this.state.searchTerm} 
                onChange={this.handleChange}  
                />
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