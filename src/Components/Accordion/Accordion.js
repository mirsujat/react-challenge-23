import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
            activeTab: this.props.children[0].props.label,
         };
    }

    onClickTabItem = (tab) =>{
       
            this.setState(prevState => {
                return{ 
                    isOpen: !prevState.isOpen,
                    activeTab: tab
                }
               

            })
        

    }


    render() {
        return (
            <div>
                
                    {this.props.children.map((child, i) =>{
                        return (
                            <div key={i}
                            open={this.state.isOpen}
                            activeTab={this.state.activeTab}
                            onClick={ () => this.onClickTabItem(child.props.label)}
                            >
                            <p>{child.props.label}</p>
                            
                            {
                                this.state.isOpen && this.state.activeTab === child.props.label 
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