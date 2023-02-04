import React, { Component } from 'react';

class Accordion extends Component {
    static allowMulti = false;

    constructor(props) {
        super(props);

        const openSection = {};

        this.state = { openSection };
    }

    onClickOpenSection = (label) =>{
        const isOpen = !!this.state.openSection[label];

        if(this.props.allowMulti){
            this.setState({
                openSection: {
                    ...this.state.openSection,
                    [label]: !isOpen
                }
            })
        }else{
            this.setState({
                openSection: {
                    [label] : !isOpen
                } 
            })

        }

    }

    render() {
        return (
            <div>
                <div>
                    {this.props.children.map((child, i) =>(
                        <div key={i}>
                            <p 
                                open={this.state.openSection[child.props.label]}
                                onClick={() => this.onClickOpenSection(child.props.label)} 
                            >
                                {child.props.label}
                            </p>
                            {this.state.openSection[child.props.label] && child.props.children}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Accordion;