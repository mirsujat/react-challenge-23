import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            result: null,
            searchTerm: "",
            loading: true, 
            };
    }



    componentDidMount(){
        const {searchTerm} = this.state;
            fetch(`https://ip.nf/me.json`)
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res, loading: false, searchTerm: res.ip})); 
    };



    componentDidUpdate(prevProps, prevState){
    
        if(this.state.searchTerm !== prevState.searchTerm){
         
            this.fetchData(this.state.searchTerm);
        }
    }




    handleChange = (e) =>{
        const { value} = e.target;
        this.setState({ searchTerm : value });
    }

    fetchData = (SearchQuery) =>{
        const URL = `https://ip.nf/${SearchQuery}.json`;

        return fetch(URL)
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res, loading: false, searchTerm: res.ip})); 
  }
    

    render() {


        let content;
        if(this.state.loading === true){
             content = <span>Loading....</span>

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

export default SearchInput;