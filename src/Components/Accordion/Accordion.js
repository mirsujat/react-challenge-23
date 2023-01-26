import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
            
        this.state = {}
    }


    render() {
        
        return (
            <div>
            
                    {this.props.children.map((child, i) =>{
                        return(
                            <div key={i} >
                                <p>{child.props.label}</p>
                                {child}
                            </div>
                        )
                    })}
                
            </div>
        );
    }
}

export default Accordion;