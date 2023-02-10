import React, { Component } from 'react';

class Challenge extends Component {

    constructor(props){
        super(props);
        const openSection = {}; 
        this.state = { openSection }

    }

    onClickTabItem = (label) =>{
        const isOpen = !!this.state.openSection[label];
        this.setState({
            openSection:{
                [label] : !isOpen
            }
        })
    }


    render() {
        return (
            <div>
                <h1>This is Accordion Component</h1>
                <div>
                    {this.props.children.map((child, i) =>(
                        <div key={i} open={!!this.state.openSection[child.props.label]}>
                            <li onClick={() => this.onClickTabItem(child.props.label)}>
                            {child.props.label}
                            </li>
                    
                             {this.state.openSection[child.props.label] && child}
                            
                        
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Challenge;