import React, { Component } from 'react';



class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected : this.props.children[0].props.label,

         };
    }

    onClickTabItem = (tab)=>{
        return this.setState({selected: tab})
    }

    render() {
        return (
            <div role='tabs'>
            <div role='tablist'>
                {this.props.children.map((child, i) =>(
                    <button
                        key={i}
                        onClick={ () => this.onClickTabItem(child.props.label)}
                        aria-selected={this.state.selected}
                        id={child.props.label + `${i + 1}`}
                        role='tab'
                        aria-controls={`tab` + `${i + 1}`}
                        className="tab" 

                    >
                    {child.props.label}
                    
                    </button>

                ))}
            </div>
               
                <div>
                    {this.props.children.map((child, i) =>{
                        if(this.state.activeTab !== child.props.label) return undefined;
                        
                        return child.props.children;
                    })}
                </div>

            </div>
        );
    }
}

export default Tabs;