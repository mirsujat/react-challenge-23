import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
           
        }
    }

  

    render() {
        
        return (
            <div>
            
                    {this.props.children.map((child, i) =>{
                        return(
                            <div key={i} >
                                <p
                                
                                >
                                {child.props.label}
                                </p>
                                {
                                this.state.activeTab === child.props.label || this.state.isOpen 
                                ? child : null
        
                                }
                            </div>
                        )
                    })}
                
            </div>
        );
    }
}

export default Accordion;