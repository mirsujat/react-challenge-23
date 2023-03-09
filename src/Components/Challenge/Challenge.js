import React, { Component } from 'react';


class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: null };
        this.focusRef = React.createRef();
        this.NavigationKey = {
            tabKey: 9,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46
        };
    }

    componentDidMount() {
        let tab = this.props.children[0].props.label;
        this.selectTab(tab);
    }
    componentDidUpdate(){
        this.focusRef.focus();
    }

    onClickTabItem = (tab) =>{
        this.selectTab(tab);
    }

    selectTab = (tab) =>{
        this.setState({ activeTab : tab })
    }

    nextTab = (tab) =>{
        let index = this.props.children.indexOf(tab);
        if(index < this.props.children.length -1){
            let newIndex = index + 1;
            this.selectTab(this.props.children[newIndex].props.label);
        }
    }

    onKeyUp = (e, tab) =>{
        e.preventDefault();
        let key = e.keyCode;
        switch(key){
            case this.NavigationKey.right:
                this.nextTab(tab);
                break;
                default:
        }
    }
  




    render() {
        return (
            <div>
            <h3>Accessible React Tab Component</h3>
            <div>
            <div role='tablist'>
            {this.props.children.map((child, i) =>(
                <button
                key={i}
                onClick={() => this.onClickTabItem(child.props.label)}
                onKeyUp={(e) => this.onKeyUp(e, child)}
                ref={(el) => {if(this.state.activeTab === child.props.label) this.focusRef = el}}
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
            </div>
        );
    }
}

export default Challenge;