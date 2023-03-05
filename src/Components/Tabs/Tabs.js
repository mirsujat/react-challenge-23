import React, { Component } from 'react';



class Tabs extends Component {
    constructor(props) {
        super(props);

        this.tabs = this.props.children;
        this.state = { 
            selected : false

        };

        this.activeLink = React.createRef();
        this.NavigationKeys = {
            tabKey: 13,
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
        let selected = this.tabs.find(tab => tab.props.selected) ||  this.tabs[0].props.label;
        this.setState({ selected })
    }

    componentDidUpdate(){
        this.activeLink.focus();
    }



    selectTab = (tab) =>{
        this.setState({selected: tab})
    }

    onClickTabItem = (e, tab)=>{
        e.preventDefault();
        
        this.selectTab(tab);
   

    }

    //For keyboard accessibiilty
    nextTab = (tab) =>{
        let index = 0;
            console.log(index);
  
        if(index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1].props.label)
        
        console.log(index + 1);
    }
    previousTab = (tab) =>{
        let index = this.tabs.indexOf(tab);
        if(index > 0) this.selectTab(this.tabs[index - 1]);
    }
    firstTab = (tab) =>{
        let index = this.tabs.indexOf(tab);
        if(index !== 0) this.selectTab(this.tabs[0].props.label);
    }
    lastTab = (tab) =>{
         let index = this.tabs.indexOf(tab);
         if(index !== this.tabs.length) this.selectTab(this.tabs[this.tabs.length - 1].props.label);
    }

    handleKeyUp = (e, tab) =>{
        
        let key = e.keyCode;
       e.preventDefault();
        switch(key){
            case this.NavigationKeys.tabKey:
                this.selectTab(tab)
                break;
            case this.NavigationKeys.right:
                this.nextTab(tab)
                break;
            case this.NavigationKeys.left:
                this.previousTab(tab)
                break;
            case this.NavigationKeys.home:
                this.firstTab(tab)
                break;
            case this.NavigationKeys.end:
                this.lastTab(tab)
                break;
            default:
        }

    }


    render() {
        return (
            <div className='tabs'>
            <div role='tablist'>
                {this.tabs.map((tab, i) =>(
                    <button
                        key={i}
                        onClick={ (e) => this.onClickTabItem(e, tab.props.label)}
                        onKeyUp={(e) => this.handleKeyUp(e, tab.props.label)}
                        aria-selected={tab.props.label === this.state.selected}
                        tabIndex={tab.props.label === this.state.selected ? 0 : -1}
                        id={tab.props.label + `${i}`}
                        role='tab'
                        aria-controls={tab.props.label}
                        className="tab" 
                        ref={(el) =>{if(tab.props.label === this.state.selected) this.activeLink = el}}
                        

                    >
                    {tab.props.label}
                    
                    </button>

                ))}
            </div>
               
                <div>
                    {this.tabs.map((tab, i) =>{
                        if(this.state.selected !== tab.props.label) return undefined;
                        
                        return (
                            
                            <div
                            key={i}
                            id={tab.props.label}
                            role='tabpanel'
                            tabIndex='0'
                            aria-labelledby={tab.props.label}
                            aria-hidden={this.state.selected === tab.props.label ? false : true }

                            >
                            {tab.props.children}
                            </div>
                            
                            );
                    })}
                </div>

            </div>
        );
    }
}

export default Tabs;