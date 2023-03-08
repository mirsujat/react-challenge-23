import React, { Component } from 'react';


class Challenge extends Component {
    constructor(props) {
        super(props);

        this.tabs = this.props.children;
        this.focusRef = React.createRef();
        this.state = { activeTab: false };

        this.navigationKey = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
        }
    }

    componentDidMount() {
        let tab = this.tabs[0].props.label;
        this.selectTab(tab);
    }

    componentDidUpdate(){
        this.focusRef.focus();
    }

    onClickTabItem = (tab) =>{
        this.selectTab(tab);
    }

    selectTab = (tab) =>{
         this.setState({  activeTab : tab })
    }
    nextTab = (tab) =>{
        let index = this.tabs.indexOf(tab);
        if(index < this.tabs.length - 1){
            let newIndex = index + 1;
            this.selectTab(this.tabs[newIndex].props.label);
        }
        console.log(index);
    }

    onKeyUp = (e, tab) =>{
        
        let key = e.keyCode;
        e.preventDefault();
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
            {this.tabs.map((child, i) =>(
                <button
                key={i}
                role='tab'
                id={`tab-${i + 1}`}
                aria-controls={`tabpanel-${i + 1}`}
                aria-selected={this.state.activeTab === child.props.label}
                onClick={() => this.onClickTabItem(child.props.label)}
                onKeyUp={(e) => this.onKeyUp(e, child.props.label)}
                tabIndex={this.state.activeTab === child.props.label ? 0 : -1}
                ref={(el) => {if(this.state.activeTab === child.props.label) this.focusRef = el}}
                className='tab'

                >
                    {child.props.label}
                </button>
            ))}
            
            </div>
            <div>
                {this.tabs.map((child, i) =>{
                    if(this.state.activeTab !== child.props.label) return undefined;
                    return(
                        <div 
                        key={i}
                        tabIndex='0'
                        role='tabpanel'
                        id={`tabpanel-${i + 1}`}
                        aria-labelledby={`tab-${i + 1}`}
                        aria-hidden={this.state.activeTab === child.props.label ? false : true}
                        className='tabpanel'
                        >
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