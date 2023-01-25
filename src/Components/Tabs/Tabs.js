import React, { Component } from 'react';
import Tab from '../Tab/Tab';


class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeTab: this.props.children[0].props.label,
         };
    }

    onClickTabItem = (tab)=>{
        return this.setState({activeTab: tab})
    }

    render() {
        return (
            <div>
            <ol>
                {this.props.children.map((child, i) =>(
                    <li
                        key={i}
                        onClick={ () => this.onClickTabItem(child.props.label)}
                        actoveTab={this.state.activeTab}
                    >
                    {child.props.label}
                    
                    </li>

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