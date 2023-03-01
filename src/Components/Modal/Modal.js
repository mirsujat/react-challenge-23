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

const Backdrop = props => <div className="backdrop" {...props} />;


class Modal extends Component{

    handleClose = () =>{
        this.props.onClose();
    }

    render(){

        let content = null;
        if(this.props.isOpen){
            content = (
                <>
                    <Backdrop onClick={this.handleClose}></Backdrop>
                    <div
                        role="dialog"
                        open={this.props.isOpen}
                    >
                        {this.props.children}
                    </div>
                </>
            )
        }


        return(
            <Portal>
                <>{content}</>
            </Portal>
        )
    }
}

export default Modal;