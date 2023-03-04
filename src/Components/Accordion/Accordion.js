import React, { Component } from 'react';

class Accordion extends Component {
    static allowMulti = false;

    constructor(props) {
        super(props);

        const openSection = {};

        this.state = { openSection};

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
                    [label] : !isOpen,
                    expanded: true
                } 
            })

        }

    }

    render() {
        return (
            <div>
                <div id="accordionGroup" className="accordion">
                    {this.props.children.map((child, i) =>(
                        <div key={i}>
                            <h3 
                                open={this.state.openSection[child.props.label]}
                                onClick={() => this.onClickOpenSection(child.props.label)} 
                            >
                            <button
                            type='button'
                            aria-expanded={ this.state.openSection[child.props.label] ? this.state.openSection.expanded : false}
                            className="accordion-trigger"
                            area-controls={`section${i}`}
                            id={`accordion${i}`}
                            >
                            <span className='accordion-title'>
                                {child.props.label}
                                <span className="accordion-icon"></span>
                            
                            </span>
                            </button>
                            </h3>
                            <div 
                            id={`section${i}`}
                            role='region'
                            area-aria-labelledby={`accordion${i}`}
                            className='accordion-panel'
                            >
                                {this.state.openSection[child.props.label] && child.props.children}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Accordion;