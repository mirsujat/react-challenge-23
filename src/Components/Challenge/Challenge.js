import React, { Component } from 'react';


class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: this.props.children[0].props.label };
    }

    onClickTabItem = (tab) =>{
        this.setState({  activeTab : tab })
    }

    


    render() {
        return (
            <div>
            <h2>React Accessible Tab Component</h2>
            <div className='tablist' role='tablist'>
            {this.props.children.map((child, i) =>(
                <button
                key={i}
                role='tab'

                onClick={() => this.onClickTabItem(child.props.label)}

                >
                    {child.props.label}
                </button>
            ))}
            
            </div>
            <div>
                {this.props.children.map((child, i) =>{
                    if(this.state.activeTab !== child.props.label) return undefined;
                    return(
                        <div>
                            {child.props.children}
                        </div>
                    )
                })}
            </div>
            
            </div>
        );
    }
}

export default Challenge;