import React, { Component } from 'react';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            label: this.props.children[0].props.label,
         };
    }

    clickHandler =(tab) =>{
        this.setState({ label: tab })
    }



    render() {
        return (
            <div>
                <h1>This is Tab Component</h1>
                <div>
                    <ol>
                      {this.props.children.map((child, i) =>(
                        <li 
                        key={i}
                        onClick={() => this.clickHandler(child.props.label)}
                        >
                        {child.props.label}
                        </li>
                      ) )}  
                    </ol>
                </div>

                <div>
                    {this.props.children.map((child, i) =>{
                        if(this.state.label !== child.props.label) return undefined;
                        return child;
                    })}
                </div>

            </div>
        );
    }
}

export default Challenge;