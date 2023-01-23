import React, {Component} from 'react';
import Tab from '../Tab/Tab';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
    }
    }
    onClickTabItem = () =>{
        return;
      
    }


    render() {
        return (
            <div className="tabs">
            Hello From Tabs
            <ol className="tab-list">
                {
                    this.props.children.map((child) =>(
                        <Tab 
                            
                            key={child.props.label}
                            label={child.props.label}
                            onClick={this.onClickTabItem}
                         />
                        )
                       
                    )
                }
            </ol>
                <div className="tab-content">
                {
                    this.props.children.map((child) =>{
                        if(child.props.label !== this.state.activeTab) return undefined;
                        return child.props.children;
                    })
                }
                </div>
            </div>
        );
    }
}

export default Tabs;