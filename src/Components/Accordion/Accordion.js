import React, { Component } from 'react';

class Accordion extends Component {
    static allowMultipleOpen = false;

    constructor(props) {
        super(props);
        
        const openSections = {};

        this.state = { openSections };
    }

    onClick = (label) =>{
        const {openSections} = this.state;
        const isOpen = !!openSections[label];
        if(this.props.allowMultipleOpen){
            this.setState({
                openSections: {
                     ...openSections,
                [label] : !isOpen
                }
            })
        }else{
            this.setState({

            openSections : {
                [label] : !isOpen
            }
        })
        }

        
    }

    render() {
        
        return (
            <div>
                    {this.props.children.map((child, i) =>{
                        return(
                            <div key={i} >
                                <p
                                isOpen={!!this.state.openSections[child.props.label]}
                                onClick={() => this.onClick(child.props.label)}
                                >
                                {child.props.label}
                                </p>
                                {
                                 this.state.openSections[child.props.label] && child 
        
                                }
                            </div>
                        )
                    })}
                
            </div>
        );
    }
}

export default Accordion;