import React, { Component } from 'react';
import ReactDOM from "react-dom";

const body = document.body;
let modalRoot = document.getElementById("modal-root");

if(!modalRoot){
   modalRoot = document.createElement("div");
   modalRoot.setAttribute("id", "modal-root");
   body.appendChild(modalRoot);

}

class Portal extends Component{
    constructor(props){
        super(props);

        this.container = document.createElement("div");
    }

    componentDidMount() {
        modalRoot.appendChild(this.container);
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.container);
    }

    render(){
        return ReactDOM.createPortal(this.props.children, this.container);
    }
}

const Backdrop = props => <div className={props.className} {...props} />;

