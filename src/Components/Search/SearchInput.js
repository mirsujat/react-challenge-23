import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            result: null,
            searchTerm: "me",
            loading: true, 
            };
    }

componentDidMount(){
    const {searchTerm} = this.state;
            fetch(`https://ip.nf/${searchTerm}.json`)
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res, loading: false})); 
};

componentDidUpdate(prevProps, prevState){
    const {searchTerm} = this.state;
    if(this.state.searchTerm !== prevState.searchTerm){
         fetch(`https://ip.nf/${searchTerm}.json`)
                .then(res => res.json())
                .then(res => Object.assign({}, res.ip))
                .then(res => this.setState({result: res, loading: false})); 
    }
}

// shouldComponentUpdate(nextProps, nextState){
//     const {searchTerm} = this.state;
//     //const regex = new RegExp(`/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/`);       
//        if(searchTerm !== nextState.searchTerm ){
//           return true;
//        }
//        if(this.props.value !== nextProps.value){
//         return true;
//        }
//        return false;
// }


    handleChange = (e) =>{
        const { value} = e.target;
        this.setState({ searchTerm : value });
    }

    

    render() {
        // console.log(" Return result", this.state.result);
        // console.log("Return IP length:", this.state.result.toString(this.state.result.ip).length);
        // console.log("searchTerm:", this.state.searchTerm);
        let content;
        if(this.state.loading === true){
             content = <div>Loading....</div>

        }
        if(this.state.loading === false){
           content = <div>{this.state.result.ip}</div>
            
        }
       

        return (
            <div>
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
                
            </form>
            <div>Your IP Address: {content}</div>
            </div>
        );
    }
}

export default SearchInput;