import React, { Component } from 'react';



class Tabs extends Component {
    constructor(props) {
        super(props);

        this.tabs = this.props.children;
        
        this.state = { 
            selected : {}
        };
       


        this.activeLink = React.createRef();
        this.NavigationKeys = {
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
        let selected =  this.tabs[0].props.label;
        this.setState({ selected: {[selected] : true }});
       console.log(selected ) ;
       
    }

    componentDidUpdate(){
        this.activeLink.focus();
    }



    selectTab = (tab) =>{
        const isOpen = !!this.state.selected[tab]
        this.setState({ selected: { [tab] : !isOpen }})
    }

    onClickTabItem = (tab)=>{
        this.selectTab(tab);

    }

    //For keyboard accessibiilty
    nextTab = (tab) =>{
        let index = this.tabs.indexOf(tab);
        if(index < this.tabs.length - 1){
             let newIndex = index + 1;
            this.selectTab(this.tabs[newIndex].props.label)
        }  
        
        
    }
    previousTab = (tab) =>{
        let index = this.tabs.indexOf(tab);
        if(index > 0){
            let newIndex = index - 1;
            this.selectTab(this.tabs[newIndex].props.label);
        } 
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

       console.log(e.keyCode);
        switch(key){
            case this.NavigationKeys.tabKey:
                this.nextTab(tab)
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
                        role='tab'
                        id={`tab-${i + 1}`}
                        aria-selected={!!this.state.selected[tab.props.label] }
                        aria-controls={`panel-${i + 1}`}
                        tabIndex={this.state.selected[tab.props.label] ? 0 : -1}
                        onClick={ () => this.onClickTabItem(tab.props.label)}
                        onKeyUp={(e) => this.handleKeyUp(e, tab)}
                        className="tab" 
                        ref={(el) =>{if(this.state.selected[tab.props.label]) this.activeLink = el}}
                        
                    >
                    {tab.props.label}
                    
                    </button>

                ))}
            </div>
                <div>
                    {this.tabs.map((tab, i) =>{
                        if(this.state.selected[tab.props.label]){
                            return (
                            
                            <div
                            key={i}
                            role='tabpanel'
                            id={`panel-${i + 1}`}
                            aria-labelledby={`tab-${i + 1}`}
                            aria-hidden={!!this.state.selected[tab.props.label] ? false : true}
                            tabIndex='0'
                            >
                            {tab.props.children}
                            </div>
                            
                            );
                        }else{
                            return null;
                        } ;
                        
                    })}
                </div>

            </div>
        );
    }
}

export default Tabs;