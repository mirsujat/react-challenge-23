import React, { Component } from 'react';
import Tab from "../Tab/Tab";

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) =>{
        this.setState({activeTab: tab});
    }


    render() {
        return (
            <div>
                <ol>
                    {this.props.children.map((child, i) =>(
                        <Tab 
                            key={i}
                            label={child.props.label}
                            onClick={this.onClickTabItem}
                        />
                    ))}
                </ol>

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