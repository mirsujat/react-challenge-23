import React, { Component } from 'react';


class Challenge extends Component {
    constructor(props) {
        super(props);

        this.state = { activeTab: this.props.children[0].props.label };

        this.navigationKey = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
        }
    }

    onClickTabItem = (tab) =>{
        this.selectTab(tab);
    }

    selectTab = (tab) =>{
         this.setState({  activeTab : tab })
    }
    nextTab = (tab) =>{
        let index = this.props.children.indexOf(tab);
        if(index < this.props.children.length - 1){
            let newIndex = index + 1;
            this.selectTab(this.props.children[newIndex].props.label);
        }
        console.log(index);
    }

    onKeyUp = (e, tab) =>{
        e.preventDefault();
        let key = e.keyCode;
        switch(key){
            case this.navigationKey.right:
                this.nextTab(tab)
                break;
            default:    
        }

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
                aria-selected={this.state.activeTab === child.props.label}
                onClick={() => this.onClickTabItem(child.props.label)}
                onKeyUp={(e) => this.onKeyUp(e, child.props.label)}

                >
                    {child.props.label}
                </button>
            ))}
            
            </div>
            <div>
                {this.props.children.map((child, i) =>{
                    if(this.state.activeTab !== child.props.label) return undefined;
                    return(
                        <div key={i}>
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