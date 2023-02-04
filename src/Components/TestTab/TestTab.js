import React, { Component } from 'react';

class TestTab extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ol>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ol>
                 <div>
                    <div>content of tab one</div>
                    <div>content of tab two</div>
                    <div>content of tab three</div>
                </div>

            </div>
        );
    }
}

export default TestTab;