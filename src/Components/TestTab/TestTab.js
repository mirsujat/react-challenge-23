import React, { Component } from 'react';

class TestTab extends Component {
    constructor(props) {
        super(props);

        
        this.state = {   };
    }

   
    render() {
        return (
            <div>
                <ol>
                    {this.props.children.map((child, i) =>(
                        <li 
                        key={i}>{child.props.label}</li>
                    ))}
                </ol>
                <div>
                    {this.props.children.map((child, i) =>{
                        
                        if(this.state.label !== child.props.label) return undefined;
                        return child;

                    
                    })}
                </div>
            </div>
        );
    }
}

export default TestTab;